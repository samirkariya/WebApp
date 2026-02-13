const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const user = require('./model/user');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/API_D2D")
.then(()=>console.log('Database Connected!'))
.catch(err=>console.log(err));

app.post('/adduser', async(req,res)=>{
    const newUser = new user(req.body);
    await newUser.save();
    res.send('User added!');
})

app.listen(5000,()=>console.log('Server is running on 5000'));