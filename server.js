require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Connection error:", err.message));

app.get("/", (req, res) => res.send("Server running"));

app.listen(5000, () => console.log("Server on port 5000"));
