require('dotenv').config();
const express =require("express")
const mongoose =require("mongoose");
const Connet = require('./configs/databasecon');
const app = express();
const port = 3000;
Connet()

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/user", require('./routes/user'))

mongoose.connection.once("open",()=>{
  console.log("connected")
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
});
