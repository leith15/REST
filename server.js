// 1 require express
const express = require("express");

// 2 express instance
const app = express();

// require dotenv & configuration
require("dotenv").config();

// 3 port
const PORT = process.env.PORT;

// 8 MiddleWare bodypare
app.use(express.json());

// 5 connectDB
const connectDB = require("./config/connectDB.js");
connectDB();

// 6 Routes
app.use("/api/contacts", require("./routes/contact"));

// 4 create server
app.listen(PORT, (error) => {
  error
    ? console.error(`failed to connect to the server ${error}`)
    : console.log(`Server is running on port ${PORT}...`);
});
