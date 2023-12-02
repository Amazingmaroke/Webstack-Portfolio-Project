require('dotenv').config();
const express =require("express")
const mongoose =require("mongoose");
const Connet = require('./configs/databasecon');
const app = express();
const port = 3000;
Connet()
app.get('/', (req, res) => {
  res.send('Welcome to geval branch server!');
});
mongoose.connection.once("open",()=>{
  console.log("connected")
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
});
