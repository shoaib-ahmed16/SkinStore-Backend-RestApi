const mongoose = require("mongoose");
const bcrypt = require('bcrypt');


const userSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    mobileNumber:{type:Number,required:true,},
    referalCode:{type:String,required:false},
    role:{type:String,default:["user"]}
},{
    timestamps:true,
    versionKey:false
})

userSchema.pre("save", function(next){
    const hash = bcrypt.hashSync(this.password, 5);
    this.password = hash;
    return next() 
})

userSchema.methods.checkPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}






const User = mongoose.model("user", userSchema)

module.exports = User;