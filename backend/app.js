const express = require("express");
const { PrismaClient } = require("@prisma/client");

const app = express();

app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
