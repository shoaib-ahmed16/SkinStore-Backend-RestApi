var GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config()
const passport=require("passport")
const { v4: uuidv4 } = require('uuid');
const User = require('../models/user.model');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
 async function(accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ googleId: profile }, function (err, user) {
    // });

    let user=await User.findOne({email : profile?._json?.email}).lean().exec()

    if(!user){
      user=await User.create({
        name:profile._json.name,
        email:profile._json.email,
        password:uuidv4(),
        role:"customer",
        mobileNumber:null
      })
    }
    console.log(user)
    return cb(null, "user");
  }
));

module.exports=passport