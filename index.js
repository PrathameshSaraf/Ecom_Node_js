const { config } = require('dotenv');
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const morgan=require('morgan');
const mongoose=require('mongoose');


require('dotenv/config');


//Routes
const productRounter=require('./Routes/product');
const categoriesRoutes = require('./Routes/categories');
const userRoutes=require('./Routes/user');
const authJwt=require('./helper/jwt');
const errorHandler = require('./helper/error-handler');


//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(authJwt());
app.use(errorHandler);

const api=process.env.API_URL;

app.use(`${api}/products`,productRounter)
app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/users`,userRoutes)


 

//Connection database
mongoose.connect(process.env.CONNECTIONS_STRING,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName:'eshop'
}).then(()=>{
  console.log('connection success');
}).catch((e)=>{
 console.log(e);
});



//server
app.listen(3000,()=>{
    console.log(api);
  console.log('server is running http://localhost:3000');
});