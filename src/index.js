const express=require("express");
const app=express();

app.use(express.json())

const {register,login,generateToken}=require("./controllers/register&login.controller")
const productController = require("./controllers/ProductController")


app.post("/register",register)

app.post("/login",login)







module.exports=app;