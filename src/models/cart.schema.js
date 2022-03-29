const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
        product:{type:String,required:false},
        brand:{type:String,required:false},
        quantities:{type:Number,default:1},
        productPrice:{type:String,required:false},
        productImage:{type:String,required:false}
    }
)

module.exports =mongoose.model("cartproduct",cartSchema)