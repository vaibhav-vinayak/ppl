import express from "express";

const server = express();

server.get("/", (req, res) => res.send("Welcome to PPL backend!"));

server.listen(5400, () => console.log("server started on port: 5400"));
