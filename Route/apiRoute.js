const express=require('express');
const Route=express.Router();
const apiControll=require("../Controller/apiController");
Route.get("/users",apiControll.views);
Route.post("/users/create",apiControll.creation);
Route.get("/users/edit/:id",apiControll.edit);
Route.put("/users/update/:id",apiControll.update);
Route.delete("/users/delete/:id",apiControll.deletion);
module.exports=Route;