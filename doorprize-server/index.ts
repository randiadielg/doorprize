import Fastify from "fastify";
import type { FastifyInstance } from "fastify";
import FastifyWebsocket from "@fastify/websocket";
import FastifyCors from "@fastify/cors";
import fs from "fs";
import type { WebSocket } from "ws";

const server: FastifyInstance = Fastify({});

let connectedSockets = new Set<WebSocket>();

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
    connectedSockets.add(connection.socket);

    // Client message
    // connection.socket.on("message", (message) => {
    //   if (message.toString() === "ack") {
    //     controller.write("Done!");
    //     controller.end();
    //   }
    // });
    // Client disconnect
    connection.socket.on("close", () => {
      connectedSockets.delete(connection.socket);
      console.log("Client disconnected");
    });
  });
});

const isReshuffled = (num: number) => {
  // all algorithm to check eligibility of the winner
  if (Boolean(winners[num]?.isCancelled)) return true;
  if (winners[num]?.isWin) return true;

  // all algorithm to check every adjustment to make the doorprize fair
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

const getRandomizedNumber = () => {
  let randomNum = -1;

  do {
    randomNum = Math.round(Math.random() * maxNumber - 1);
  } while (isReshuffled(randomNum));

  winners[randomNum] = { ...winners[randomNum], isWin: true };
  return randomNum;
};

server.get("/trigger", (request, reply) => {
  // Lazy Typecasting
  const { count } = request.query as { count: string };
  const intCount = parseInt(count);

  reply.header("cors", "*");
  const randomizedPersons = [
    ...Array(count && Number.isInteger(intCount) ? intCount : 1),
  ].map(() => {
    const number = getRandomizedNumber();
    return {
      index: number,
      name: items[number],
    };
  });

  announceAllConnectedSockets(JSON.stringify(randomizedPersons));

  winnersArray = [
    ...winnersArray,
    ...randomizedPersons.map((person) => person.index),
  ];

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

server.listen({ port: 5000, host: "192.168.1.100" }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at: ${address}`);
});
