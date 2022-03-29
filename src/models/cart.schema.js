const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
        productName:{Type:String,required:false},
        productBrand:{Type:String,required:false},
        quantities:{Type:String,required:false},
        priceOfProduct:{Type:String,required:false},
    }
)

module.exports =mongoose.model("cartproduct",cartSchema)