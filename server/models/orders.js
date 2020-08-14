const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    cart:{
        type:String,
        required:true
    },
    total:{
        type:Number,
        required:true
    }
})


const Order = (module.exports = mongoose.model("order", OrderSchema))