const express = require('express')
const router = express.Router()
const Product3 = require('../models/ProductModel5')
const authorization = require('../middleware/Authorization')

router.get('/', async (req, res) => {
  try {
    const product = await Product3.find().lean().exec()
    res.status(200).send({ Products: product })
  } catch (error) {
    return res.status(404).send('not found')
  }
})

router.post('/', async function (req, res) {
  try {
    const product = await Product3.create(req.body)
    res.status(200).send({ Products: product })
  } catch (error) {
    return res.status(404).send('not found')
  }
})

router.get('/:id', async (req, res) => {
  try {
    const product = await Product3.findById(req.params.id)
    res.status(200).send({ Products: product })
  } catch (error) {
    return res.status(404).send('not found')
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const product = await Product3.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    res.status(200).send({ Products: product })
  } catch (error) {
    return res.status(404).send('not found')
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const product = await Product3.findByIdAndDelete(req.params.id)
    res.status(200).send({ Products: product })
  } catch (error) {
    return res.status(404).send('not found')
  }
})

module.exports = router
