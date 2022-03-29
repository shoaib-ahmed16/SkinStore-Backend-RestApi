const express =require("express")

const cartController =require("./controllers/cart.controller.js")

const app = express();

app.use(express.json())


app.use("/cartproduct",cartController)



















module.exports =app;