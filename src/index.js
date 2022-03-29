const express =require("express")

const cartController =require("./controllers/cart.controller.js")

const productController1= require("./controllers/ProductController1.js")

const productController2 = require("./controllers/ProductController2.js")

const productController3 = require("./controllers/ProductController3.js")


const addressController =require("./controllers/address.controller.js")

const app = express();

app.use(express.json())



app.use("/cartproduct",cartController)
app.use("/product1",productController1)
app.use("/product2",productController2)
app.use("/product3",productController3)
app.use("/address",addressController)




module.exports=app;