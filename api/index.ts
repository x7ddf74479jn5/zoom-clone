import fastify from "fastify";
import fastifyIO from "fastify-socket.io";

import type { User } from "../shared/types";

const server = fastify({ logger: true });
server.register(fastifyIO);

let users: User[] = [];
const PORT = 3001;

server.get("/", (_req, reply) => {
  reply.send({ hello: "world" });
});

const addUser = (userName: string, roomId: string) => {
  users.push({ userName, roomId });
};

const getRoomUsers = (roomId: string) => {
  return users.filter((user) => user.roomId === roomId);
};

const userLeave = (userName: string) => {
  users = users.filter((user) => user.userName !== userName);
};

type Message = {
  roomId: string;
  userName: string;
};

server.ready().then(() => {
  // we need to wait for the server to be ready, else `server.io` is undefined
  server.io.on("connection", (socket) => {
    console.log("a user connected");
    socket.on("join-room", ({ roomId, userName }: Message) => {
      console.log("someone joined the room");
      console.log(roomId, userName);
      if (roomId && userName) {
        socket.join(roomId);
        addUser(userName, roomId);
        socket.to(roomId).emit("user-connected", userName);
        server.io.to(roomId).emit("all-users", getRoomUsers(roomId));
      }

      socket.on("disconnect", () => {
        console.log("user disconnected");
        socket.leave(roomId);
        userLeave(userName);
        server.io.to(roomId).emit("all-users", getRoomUsers(roomId));
      });
    });
  });
});

server.listen(PORT, (_err, address) => {
  console.log(`server listening on ${address}`);
});
