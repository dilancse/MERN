const express = require("express");
const dotEnv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT;

const app = express();
// add body parser for json
app.use(express.json());
// add parser for url encoded
app.use(express.urlencoded({ extended: false }));
//API path for goals
app.use("/api/goals", require("./routes/goalRoutes"));
//Included errorHandler middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
