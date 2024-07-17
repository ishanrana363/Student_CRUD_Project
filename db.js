const mongoose = require('mongoose');

require("dotenv").config();

const dbUrl = process.env.URL;


const connectDb = ()=>{
    try {
        mongoose.connect(dbUrl);
        console.log(`MongoDB Connected Successfully!`);
    }catch (e) {
        console.log(`MongoDB Connection Error: ${e}`);
    }
}


module.exports = connectDb;

