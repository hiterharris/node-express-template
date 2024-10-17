const express = require("express");
const server = express();
const { limiter } = require("./middlewares.js");

server.use(limiter);

server.get("/", (req, res) => {
    res.send("Hello world .");
});

module.exports = server;
