const mongoose = require("mongoose")

const DB_HOST =
    "mongodb+srv://kolodiy:yvbQAhiWTbsENXbp@cluster0.5venpxt.mongodb.net/contacts?retryWrites=true&w=majority";
  
mongoose.connect(DB_HOST)
    .then(() =>  console.log("conect ok"))
    .catch(err => console.log(err.massage));

    