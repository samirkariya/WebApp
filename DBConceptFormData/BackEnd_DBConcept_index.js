const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const student = require('./models/student');
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/API_D2D")
.then(()=>console.log('Database Connected!'))
.catch(err=>console.log(err));

app.get('/students', async(req,res)=>{
    const data = await student.find().populate("deptId");
    res.json(data);
})

app.listen(5000,()=>console.log('Server is running on 5000'));
// Absent No:501,502,503,504,506,508,534,546,548,556,557,561,564,566,569,576