const express = require("express");
const userRouter = require("./routes/userRoutes");
require("dotenv").config();

const app = express();

// global middlewares
app.use(express.json());

const port = 3000 || process.env.PORT;

// health checkup route
app.get("/", (req, res) => {
  res.sendStatus(200);
});

// routes
app.use("/api", userRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
