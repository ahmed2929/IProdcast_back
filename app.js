const {startServer} =require('./server');
const {setMeiddlewares} =require("./middleware/index")
const DB=require("./database/config/index")
require("dotenv").config();
const DB_Config={
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    port:process.env.DB_PORT
    
};


(async function () {
try {
    let app = await startServer(process.env.PORT || 3355);

    app=setMeiddlewares(app);
   
   await DB.connect(DB_Config);
   console.log("Database connected");

} catch (error) {
    console.log(error);  
}


 

})();
  