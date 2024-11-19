require("dotenv").config();
const express = require("express");
const server = express();
const path = require("path");

server.use(express.urlencoded({
    extended: true
}));
server.use(express.json());

server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "Views"));

server.use("/", require("./router.js"));

const PORT = process.env.PORT;
server.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor iniciado em http://localhost:${PORT}`);
});