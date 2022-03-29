const express = require("express")

const { body, validationResult } = require('express-validator');

const cartProd =require("../models/address.schema.js")


const router = express.Router();

router.get("",async(req,res)=>{
    try{
        let cart = await cartProd.find().lean().exec();

       return res.status(200).send({cartProducts:cart});
    }
    catch (err)
    {
        return res.status(400).send({message:err.message});
    }
});

router.post("",
body("fullName")
.not()
.isEmpty()
.withMessage("fullName cannot be empty")
.bail(),
body("MobileNumber")
.not()
.isEmpty()
.withMessage("Mobile number cannot be empty")
.isNumeric("Mobile number must be in Numeric")
.isLength({min:10,max:10})
.withMessage("Invalid Mobile Number")
.bail(),
body("Pincode")
.not()
.isEmpty()
.withMessage("Pincode number cannot be empty")
.isNumeric("Pincode must be in Numeric")
.isLength({min:6,max:6})
.withMessage("Invalid Pincode")
.bail(),
body("State")
.not()
.isEmpty()
.withMessage("State cannot be empty")
.bail(),
body("Landmark")
.not()
.isEmpty()
.withMessage("landmark is must")
.bail(),
body("type")
.not()
.isEmpty()
.withMessage("type is must mention")
.bail(),
async(req,res)=>{
    try{
        const errors =validationResult(req)
        if(!errors.isEmpty())
        {
            return res.status(400).send({ errors: errors.array() });
        }
        let cart =await cartProd.create(req.body)

        return res.status(200).send({ProductAddTocart:cart})
    }
    catch (err)
    {
        return res.status(400).send({message:err.message})
    }
})


router.delete("/:id",async(req,res)=>{
    try{
        let cart =await cartProd.findByIdAndDelete(req.params.id).lean().exec();

        return res.status(200).send(cart)
    }
    catch (err)
    {
        return res.status(400).send({message:err.message})
    }
})


router.patch("/:id",async(req,res)=>{
    try{
        let cart =await cartProd.findByIdAndUpdate(req.params.id,req.body,{new :true}).lean().exec();

        return res.status(200).send(cart)
    }
    catch (err)
    {
        return res.status(400).send({message:err.message})
    }
})


module.exports =router;
