const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/auth', require('./routes/auth'));
server.use('/api/course', require('./routes/course'))

server.use("*", (res, req /*eslint-disable-line */) => {
  res.status(404).json({ message: "invalid endpoint!" });
});

server.use((err, req, res, next /*eslint-disable-line */) => {
  res.status(err.status || 500).json({
    note: "Houston, we have a problem!!!",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
