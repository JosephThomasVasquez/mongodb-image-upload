const dotenv = require("dotenv");
const express = require("express");
const connect = require("./database/db");
const chalk = require("chalk");

dotenv.config();

const app = express();

chalk.blue(connect());

// server port and default port
const { PORT = 5000 } = process.env;

// Run server
const listener = () =>
  console.log(chalk.bgGreenBright.black(`Listening on Port ${PORT}!`));
app.listen(PORT, listener);
