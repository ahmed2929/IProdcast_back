const app =require('express')();

const startServer = async(port) => {
await app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
return app
}



module.exports = {
    startServer
};