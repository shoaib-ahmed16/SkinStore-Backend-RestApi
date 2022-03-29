const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
        product:{type:String,required:true},
        brand:{type:String,required:true},
        quantities:{type:Number,default:1},
        productPrice:{type:String,required:true},
        productImage:{type:String,required:true}
    }
)

module.exports =mongoose.model("cartproduct",cartSchema)