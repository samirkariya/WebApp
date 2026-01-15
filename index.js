const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Product = require('./models/product');

const app = express();
app.use(express.json())
app.use(cors());
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/API_D2D')
.then(()=>console.log('Database Connected!'))
.catch(err=>console.log(err));

app.post('/products/add',async(req,res)=>{
    const data = new Product(req.body);
    await data.save();
    res.send('Product added.');
})

app.get('/products',async(req,res)=>{
    const data = await Product.find();
    res.json(data);
})

app.get('/products/:id',async(req,res)=>{
    const data = await Product.findOne({productId:req.params.id});
    res.json(data);
})

app.delete('/products/:id',async(req,res)=>{
    const data = await Product.findOneAndDelete({productId:req.params.id});
    res.send('Product deleted');
});

app.put('/products/:id',async(req,res)=>{
    const data = await Product.findOneAndUpdate({productId:req.params.id}, req.body);
    res.json(data);
});
app.listen(3000,()=>console.log('Server is running on 3000'));