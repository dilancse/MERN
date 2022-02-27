const express = require("express");
const dotEnv = require("dotenv").config();
const port = process.env.PORT;

const app = express();
// add body parser for json
app.use(express.json());
// add parser for url encoded
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
