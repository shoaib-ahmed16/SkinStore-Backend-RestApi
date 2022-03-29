const express = require("express")

const cartProd =require("../models/cart.schema.js")

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

router.post("",async(req,res)=>{
    try{
        console.log(req.body)
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
