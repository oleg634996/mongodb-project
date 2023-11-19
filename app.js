const mongoose =require("mongoose")

console.log(process.env.DB_HOST)
const { DB_HOST } = process.env.DB_HOST
 

mongoose.connect(DB_HOST)
    .then(() =>  console.log("conect ok"))
    .catch(err => console.log(err.massage));


// const mongoose = require("mongoose")
// const dotenv =require("dotenv")
// dotenv.config()
// const {}=process.env


  
// mongoose.connect(DB_HOST)
//     .then(() =>  console.log("conect ok"))
//     .catch(err => console.log(err.massage));

    