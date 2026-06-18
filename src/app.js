const express = require("express");
const cors = require("cors");

const queryRoutes = require("./routes/queryRoutes");

const app = express();

app.use(cors());

// Support JSON
app.use(express.json());

// Support plain text
app.use(express.text({ type: "text/plain" }));

app.use("/api", queryRoutes);

module.exports = app;