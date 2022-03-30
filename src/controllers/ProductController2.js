const express = require("express");
const router = express.Router();
const Product2= require("../models/ProductModel2");
const authorization = require("../middleware/Authorization")

router.get("/", async (req, res) => {
  try {
    const product = await Product2.find().lean().exec();
    res.status(200).send({ Products: product });
  } catch (error) {
    return res.status(404).send("not found");
  }
});

router.post("/",authorization(["admin","seller"]), async function (req, res) {
  try {
    const product = await Product2.create(req.body);
    res.status(200).send({ Products: product });
  } catch (error) {
    return res.status(404).send("not found");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product2.findById(req.params.id);
    res.status(200).send({ Products: product });
  } catch (error) {
    return res.status(404).send("not found");
  }
});

router.patch("/:id",authorization(["admin","seller"]), async (req, res) => {
  try {
    const product = await Product2.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).send({ Products: product });
  } catch (error) {
    return res.status(404).send("not found");
  }
});

router.delete("/:id",authorization(["admin","seller"]), async (req, res) => {
  try {
    const product = await Product2.findByIdAndDelete(req.params.id);
    res.status(200).send({ Products: product });
  } catch (error) {
    return res.status(404).send("not found");
  }
});

module.exports = router;
