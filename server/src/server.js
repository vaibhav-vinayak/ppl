import express from "express";
import cors from "cors";
import routes from "./routes";
import { config } from "dotenv";

config();

const server = express();

server.use(cors());
server.use(express.json());

server.use("/api", routes);

server.get("/", (req, res) => res.send("Welcome to PPL backend!"));

server.listen(5400, () => console.log("server started on port: 5400"));
