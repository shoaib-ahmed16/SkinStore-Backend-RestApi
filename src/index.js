const express = require('express')
const cors = require('cors')

const userschema = require('./controllers/dummy.user.controller.js')

const cartController = require('./controllers/cart.controller.js')

const productController1 = require('./controllers/ProductController1.js')

const productController2 = require('./controllers/ProductController2.js')

const productController3 = require('./controllers/ProductController3.js')

const addressController = require('./controllers/address.controller.js')

const {
  register,
  login,
  generateToken,
} = require('./controllers/registerlogin.controller')

const passport = require('./configs/google-oauth')

const app = express()

app.use(cors())

app.use(express.json())

app.use('/user', userschema) //extra use less api use to remove error
app.use('/cartproduct', cartController)
app.use('/product1', productController1)
app.use('/product2', productController2)
app.use('/product3', productController3)
app.use('/address', addressController)

app.post('/register', register)
app.post('/login', login)

app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
)

app.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login',
    session: false,
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('https://www.skinstore.com')
    console.log(generateToken())
  }
)

module.exports = app
