const mongoose = require('mongoose')

const PageSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
})


const Page = (module.exports = mongoose.model("Page", PageSchema))