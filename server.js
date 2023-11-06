// Import the Express.js framework
// import express from "express";
const express = require("express");
const port = 4000;

// Create an Express application
const app = express();

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
