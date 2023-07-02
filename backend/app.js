const express = require("express");
const { PrismaClient } = require("@prisma/client");
require("dotenv").config();

const app = express();
// const prisma = new PrismaClient();

app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
