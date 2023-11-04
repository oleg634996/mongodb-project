const mongoose = require("mongoose")
console.log(process.env);

const {DB_HOST}=process.env


  
mongoose.connect(DB_HOST)
    .then(() =>  console.log("conect ok"))
    .catch(err => console.log(err.massage));

    