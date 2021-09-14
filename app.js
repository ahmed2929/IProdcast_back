const {startServer} =require('./server');
const {setMeiddlewares} =require("./middleware/index")
const ConnectDB=require("./database/mongo/config/index")
require("dotenv").config();
(async function () {
 
let app = await startServer(process.env.PORT || 3000);

app=setMeiddlewares(app);
await ConnectDB()


})()
  