const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productId: Number,
    productTitle: String,
    productPrice: Number,
    productDesc: String
})

module.exports = mongoose.model('Product',productSchema);