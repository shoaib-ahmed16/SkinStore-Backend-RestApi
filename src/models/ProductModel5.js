const mongoose = require("mongoose");



const ProductSchema=mongoose.Schema({
    id:{type:Number,required:true,unique:true},
    productPic :{type:String,required:true},
    productName:{type:String,required:true},
    productBrand : {type:String,required:false},
    priceOfProduct :{type:Number,required:true},

},{
    timestamps:true,
    versionKey:false
})
const product5 = mongoose.model("product5", ProductSchema)

module.exports =product5;