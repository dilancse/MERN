const express = require("express");
const dotEnv = require("dotenv").config();
const port = process.env.PORT;

const app = express();

app.get('/api/goals', (req, res, next)=>{
    res.status(200).json({message: 'Get goals'});
})

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
