const mongoose =require("mongoose")
const DB= process.env.DB

module.exports= async()=>{
   
    return mongoose.connect(DB, {
    
  })
  .then(() => console.log("DATABASE connection successfull"))
  .catch((err) => console.log("Error connecting to database"));
}
  
