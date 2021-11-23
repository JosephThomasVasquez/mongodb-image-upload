const dotenv = require("dotenv");
const express = require("express");

dotenv.config();

const app = express();

// server port and default port
const { PORT = 5000 } = process.env;

// Run server
const listener = () => console.log(`Listening on Port ${PORT}!`);
app.listen(PORT, listener);
