const express = require("express");
const userRouter = require("./routes/userRoutes");
const locationRouter = require("./routes/locationRoutes");
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
app.use("/api", locationRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
