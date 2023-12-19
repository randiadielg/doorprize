import Fastify, { FastifyInstance } from "fastify";
import FastifyWebsocket from "@fastify/websocket";
import FastifyCors from "@fastify/cors";
import fs from "fs";

const server: FastifyInstance = Fastify({});

const connectedSockets: any[] = [];

let winnersArray: number[] = [];
let winners: Record<string, any> = { 0: { isCancelled: true } };
let items: string[] | number[] = [];

let maxNumber: number;

try {
  const data = fs.readFileSync("./db.txt", "utf8");
  const array = fs.readFileSync("./array.txt", "utf8");
  const itemsFileData = fs.readFileSync("./items.txt", "utf8");

  if (data || array) {
    winners = JSON.parse(data);
    winnersArray = JSON.parse(array);
    items = JSON.parse(itemsFileData);
    maxNumber = items.length;
    console.log("DB Load Data Success");
  }
} catch (err) {
  console.error(err);
}

const syncToDb = () => {
  try {
    fs.writeFileSync("./db.txt", JSON.stringify(winners));
    fs.writeFileSync("./array.txt", JSON.stringify(winnersArray));
  } catch (err) {
    console.error(err);
  }
};

const announceAllConnectedSockets = (message: string) => {
  connectedSockets.forEach((socket) => {
    socket.send(message);
  });
};

server.register(FastifyWebsocket);
server.register(FastifyCors, {
  allowedHeaders: "*",
  origin: "*",
});

server.register(async (server) => {
  server.get("/doorprize", { websocket: true }, (connection, req) => {
    // Client connect
    console.log("Client connected");
    connectedSockets.push(connection.socket);

    // Client message
    // connection.socket.on("message", (message) => {
    //   if (message.toString() === "ack") {
    //     controller.write("Done!");
    //     controller.end();
    //   }
    // });
    // Client disconnect
    connection.socket.on("close", () => {
      console.log("Client disconnected");
    });
  });
});

const isReshuffled = (num: number) => {
  if (Boolean(winners[num]?.isCancelled)) return true;
  if (winners[num]?.isWin) return true;
  if (Object.keys(winners).length < 0.2 * maxNumber) {
    if (winners[num + 1]) return true;
    if (winners[num + 2]) return true;
    if (winners[num - 1]) return true;
    if (winners[num - 2]) return true;
  }
  return false;
};

server.get("/ping", (_, reply) => {
  reply.send({
    message: "OK",
  });
});

server.get("/trigger", (request, reply) => {
  reply.header("cors", "*");
  let randomNum = -1;

  do {
    randomNum = Math.round(Math.random() * maxNumber);
  } while (isReshuffled(randomNum));

  winners[randomNum] = { ...winners[randomNum], isWin: true };

  announceAllConnectedSockets(
    JSON.stringify({
      index: randomNum.toString(),
      name: items[randomNum],
    })
  );

  winnersArray.push(randomNum);

  syncToDb();
  reply.send("Started Randomizing");
});

server.get("/max", (_, reply) => {
  reply.header("cors", "*");
  reply.send(maxNumber);
});

server.get("/items", (_, reply) => {
  reply.header("cors", "*");
  reply.send(items);
});

server.get("/winners", (_, reply) => {
  reply.header("cors", "*");
  reply.send(winners);
});

server.get("/winners/array", (_, reply) => {
  reply.header("cors", "*");
  reply.send(winnersArray.slice().reverse());
});

server.post("/cancel", (request, reply) => {
  reply.header("cors", "*");
  const { number: stringNumber } = request.body as { number: number };
  const number = Number(stringNumber);
  winners[number] = {
    ...winners[number],
    isCancelled: !Boolean(winners[number]?.isCancelled),
  };

  syncToDb();
  reply.send(winners);
});

server.get("/stop", (request, reply) => {
  reply.header("cors", "*");
  connectedSockets.forEach((socket) => {
    socket.send("stop");
  });
  reply.send("Stopped Randomizing");
});

server.listen({ port: 5000, host: "localhost" }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at: ${address}`);
});
