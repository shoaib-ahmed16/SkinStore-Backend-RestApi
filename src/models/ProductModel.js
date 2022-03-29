const mongoose = require("mongoose");



const ProductSchema=mongoose.Schema({
    ImageUrl :{type:String,required:true},
    name:{type:String,required:true},
    price :{type:Number,required:true,},
   

},{
    timestamps:true,
    versionKey:false
})
const Product = mongoose.model("product", ProductSchema)
module.exports = Product;