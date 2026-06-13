const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// Test Route
app.get("/admin", (req, res) => {
    res.send("Employee Management API Running...");
});

module.exports = app;