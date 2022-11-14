const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const DB_URL = process.env.DB_URL;
const connectDB = async() =>{
    try{
        const db = await mongoose.connect(DB_URL, {
            useNewUrlPaser: true,
            useUnifiedTopology: true
        });
        const {name, host} = db.connectDB;
        console.log(`Connected with db ${name} in host ${host}`);
    } catch(error){
        console.log(`Error connecting to MongoDB: ${error}`);
    }
}
module.exports = {connectDB, DB_URL};