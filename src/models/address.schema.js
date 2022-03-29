const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
        fullName:{type:String,required:true},
        MobileNumber:{type:Number,required:true},
        Pincode:{type:Number,required:true},
        State:{type:String,required:true},
        BuildingNameORNumber:{type:String,required:false},
        SteetNameOrNumber:{type:String,required:false},
        Landmark:{type:String,required:true},
        type:{type:String,required:true}
    },
    {
        versionKey:false,
        timestamps:true
    }
)

module.exports =mongoose.model("address",cartSchema)