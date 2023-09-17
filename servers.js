const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
require('dotenv').config();
const apiRoute=require("./Route/apiRoute");
const app=express();

//body parser for collecting data
app.use(bodyParser.json());

//api routes
app.use(apiRoute);
//mongoose connection
const port=process.env.PORT;
const db=process.env.MONGO_URL;
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    app.listen(port,()=>{
        console.log(`server is running http://localhost:${port}/users`);
        console.log('db is connected');
    })
})
.catch(()=>{
    console.log("Error!");
})
