import Fastify, { FastifyInstance } from "fastify";
import FastifyWebsocket from "@fastify/websocket";
import FastifyCors from "@fastify/cors";
import fs from "fs";

const server: FastifyInstance = Fastify({});

const connectedSockets: any[] = [];

const MAX_NUMBER = 200;

let winnersArray: number[] = [];
let winners: Record<string, any> = { 0: { isCancelled: true } };

try {
  const data = fs.readFileSync("./db.txt", "utf8");
  const array = fs.readFileSync("./array.txt", "utf8");
  if (data) {
    winners = JSON.parse(data);
    winnersArray = JSON.parse(array);
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

server.get("/hello", (request, reply) => {
  reply.send({
    message: "Hello Fastify",
  });
});

const isReshuffled = (num: number) => {
  if (Boolean(winners[num]?.isCancelled)) return true;
  if (winners[num]?.isWin) return true;
  if (Object.keys(winners).length < 0.2 * MAX_NUMBER) {
    if (winners[num + 1]) return true;
    if (winners[num + 2]) return true;
    if (winners[num - 1]) return true;
    if (winners[num - 2]) return true;
  }
  return false;
};

server.get("/trigger", (request, reply) => {
  reply.header("cors", "*");
  let randomNum = -1;

  do {
    randomNum = Math.round(Math.random() * MAX_NUMBER);
  } while (isReshuffled(randomNum));

  winners[randomNum] = { ...winners[randomNum], isWin: true };

  connectedSockets.forEach((socket) => {
    socket.send(`${randomNum >= 170 ? 1 : ""}${randomNum.toString()}`);
  });

  winnersArray.push(randomNum);

  syncToDb();
  reply.send("Started Randomizing");
});

server.get("/max", (_, reply) => {
  reply.header("cors", "*");
  reply.send(MAX_NUMBER);
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
