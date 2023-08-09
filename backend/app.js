const express = require("express");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/userRoutes");
const locationRouter = require("./routes/locationRoutes");
const eventRouter = require("./routes/eventRoutes");
const organizerRouter = require("./routes/organizerRoutes");
require("dotenv").config();

const app = express();

// global middlewares
app.use(express.json());
app.use(cookieParser());

const port = 3000 || process.env.PORT;

// health checkup route
app.get("/", (req, res) => {
  res.sendStatus(200);
});

// routes
app.use("/api", userRouter);
app.use("/api", locationRouter);
app.use("/api",eventRouter);
app.use("/api",organizerRouter);
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
