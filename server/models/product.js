const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
   
})


const Product = (module.exports = mongoose.model("product", ProductSchema))