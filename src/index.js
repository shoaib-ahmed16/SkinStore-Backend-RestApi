const express =require("express")

const cartController =require("./controllers/cart.controller.js")

const productController = require("./controllers/ProductController")

const addressController =require("./controllers/address.controller.js")

const app = express();

app.use(express.json())



app.use("/cartproduct",cartController)
app.use("/product1",productController)
app.use("/product2",productController)
app.use("/product3",productController)

app.use("/address",addressController)








module.exports=app;