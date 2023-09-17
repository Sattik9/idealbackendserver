const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
require('dotenv').config();
const apiRouter=require("./Route/homeRouter");
const app=express();

//body parser for data collection
app.use(bodyParser.json());

//api router
app.use(apiRouter);

//mongoose connection
const port=process.env.PORT;
const db=process.env.URL;
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    app.listen(port);
    console.log('db is connected');
    console.log(`server is running at http://localhost:${port}/`);
})
.catch(()=>{
    console.log('error');
})