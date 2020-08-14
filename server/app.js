const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const path = require('path')
const formiddable = require('express-formidable')
//const dotenv = require('dotenv');
const cors = require('cors')
//const { notFound, logErrors} = require('./helpers/error-handler')



const pages = require('./routes/pages')
const categories = require('./routes/categories')
const products = require('./routes/products')
const orders = require('./routes/orders')

const app = express();



//to work with our assets files which is static files
app.use(express.static(path.join(__dirname,'public')))
    
/**  Add headers */
app.use(function (req, res, next) {
      // Website you wish to allow to connect
      res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
  
      // Request methods you wish to allow
      res.setHeader(
          "Access-Control-Allow-Methods",
          "GET, POST, OPTIONS, PUT, PATCH, DELETE"
      );
  
      // Request headers you wish to allow
      res.setHeader(
          "Access-Control-Allow-Headers",
          "X-Requested-With,content-type"
      );
  
      // Set to true if you need the website to include cookies in the requests sent
      // to the API (e.g. in case you use sessions)
      res.setHeader("Access-Control-Allow-Credentials", true);
  
      // Pass to next layer of middleware
      next();
  });
  
app.use(express.json());
app.use(bodyParser.urlencoded({ limit:'10mb', extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev')) 
app.use(formiddable()) 
app.use(cors())


const config = require('./config/db')
mongoose.connect(config.DB,{
useNewUrlParser:true,
useUnifiedTopology:true,
useCreateIndex:true,
useFindAndModify:false
}, ()=>{
 console.log('db connected')
})





  app.use('/pages', pages)
 app.use('/categories', categories)
 app.use('/products', products)
 app.use('/orders', orders)
//ERROR HANDLER MIDDLEWARE
//app.use(notFound)
//app.use(logErrors)


    
   

const PORT = process.env.PORT || 3030
app.listen(PORT, function(){
      console.log('app is running on:' , + PORT)
})

