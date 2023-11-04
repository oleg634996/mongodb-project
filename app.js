const mongoose = require("mongoose")
const {DB_HOST}=require("./config")


  
mongoose.connect(DB_HOST)
    .then(() =>  console.log("conect ok"))
    .catch(err => console.log(err.massage));

    