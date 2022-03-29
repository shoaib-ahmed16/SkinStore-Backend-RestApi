const mongoose = require("mongoose");



const ProductSchema=mongoose.Schema({
    productPic :{type:String,required:true},
    productName:{type:String,required:true},
    productBrand : {type:String,required:true},
    priceOfProduct :{type:Number,required:true},

},{
    timestamps:true,
    versionKey:false
})
const product1 = mongoose.model("product1", ProductSchema)

module.exports =product1 ;