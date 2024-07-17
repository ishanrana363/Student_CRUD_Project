const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const StudentSchema = new Schema({
    name : {
        type: String,
    },
    class : {
        type : String,
    },
    roll : {
        type : Number,
    },
    gpa : {
        type : Number,
    },
    address : {
        type : String,
    }
},{timestamps:true,versionKey:false});


const studentModel = model("students",StudentSchema);

module.exports = studentModel;