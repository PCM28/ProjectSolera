const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const DB_URL = process.env.DB_URL;

const connectDb = async () => {
    try{
        const db = await mongoose.connect(DB_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        const {name, host} = db.connection;
        console.log(`Connected with db ${name} in host ${host}`);
    }catch(error){
        console.log(`Error connecting to MongoDB: ${error}`);
    }
}
module.exports = {connectDb, DB_URL};