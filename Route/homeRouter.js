const express=require('express');
const Route=express.Router();
const apiControll=require("../Controller/apiController");
//Read
Route.get("/",apiControll.views);

//Create
Route.post("/create",apiControll.create);

//Edit
Route.get("/edit/:id",apiControll.edition);

//Update
Route.post("/update/:id",apiControll.update);

//Delete
Route.get("/delete/:id",apiControll.deletion);

module.exports=Route;