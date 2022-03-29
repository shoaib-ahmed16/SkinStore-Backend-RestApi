const express=require("express");
const app=express();

app.use(express.json())

const {register,login,generateToken}=require("./controllers/register&login.controller")



app.post("/register",register)

app.post("/login",login)




module.exports=app;