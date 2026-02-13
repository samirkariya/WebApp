const mongoose = require('mongoose');
require('./dept');
const studSchema = new mongoose.Schema({
    _id:String,
    name: String,
    rollno:Number,
    deptId:{
        type:String,
        ref:"department"
    }  
});

module.exports = mongoose.model('student',studSchema);