const express = require("express");
const router = express.Router();
const product1= require("../models/ProductModel1.js");

router.get("/", async (req, res) => {
  try {
    const product = await product1.find().lean().exec();
    res.status(200).send({ Products: product });
  } catch (error) {
    return res.status(404).send("not found");
  }
});

router.post("/", async function (req, res) {
  try {
    const product = await product1.create(req.body);
    res.status(200).send({ Products: product });
  } catch (error) {
    return res.status(404).send("not found");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await product1.findById(req.params.id);
    res.status(200).send({ Products: product });
  } catch (error) {
    return res.status(404).send("not found");
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const product = await product1.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).send({ Products: product });
  } catch (error) {
    return res.status(404).send("not found");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const product = await product1.findByIdAndDelete(req.params.id);
    res.status(200).send({ Products: product });
  } catch (error) {
    return res.status(404).send("not found");
  }
});

module.exports = router;
