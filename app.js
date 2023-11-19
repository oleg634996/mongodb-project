const mongoose =require("mongoose")

const DB_HOST =
  "mongodb+srv://diving:SFKjiTZQEvWDWRSo@cluster0.59shgmv.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB_HOST).then(() => {
    console.log("OK oleg")
})


// const mongoose = require("mongoose")
// const dotenv =require("dotenv")
// dotenv.config()
// const {}=process.env


  
// mongoose.connect(DB_HOST)
//     .then(() =>  console.log("conect ok"))
//     .catch(err => console.log(err.massage));

    