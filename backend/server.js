const express = require("express");
const dotEnv = require("dotenv").config();
const port = process.env.PORT;

const app = express();

app.use("/api/goals", require("./routes/goalRoutes"));

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
