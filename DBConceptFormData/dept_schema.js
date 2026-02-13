const mongoose = require('mongoose');

const deptSchema = new mongoose.Schema({
    _id:String,
    deptName: String
});

module.exports = mongoose.model("department",deptSchema);