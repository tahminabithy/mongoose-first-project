import app from "./app";
import config from "./config";
import mongoose from "mongoose";

async function main() {
    try{
        await mongoose.connect(config.database_url as string);  // connecting with the database 
        app.listen(config.port, () => {
            console.log(`Example app listening on port ${config.port}`); // listening on the port
        });
    }
    catch(err){
        console.error(err);
    }
  
  }

main();
// adminUser
// 2fDmGFvRpc04DxOI