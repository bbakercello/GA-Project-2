const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User  = require("../models/User.js");

// fetch data from models
const db = require('../models')

require('../config/db.connection')

//translate to JSON
router.use(express.json())

//translate incoming data to strings or arrays
router.use(express.urlencoded({extended: false}))


// register route
router.get("/register", function (req, res) {
    return res.render("auth/register");
  });

// login route
router.get("/login", function (req, res) {
  res.render("auth/login");
});

// logout route
router.get("/logout", async function (req, res) {
    try {
        await req.session.destroy();
        return res.redirect("/login");
    } catch (error) {
        console.log(error);
        return res.send(error);
    }
});

// register post route to database
router.post("/register", async function (req, res) {
    try {
      // step check if user exists
      const foundUser = await db.User.exists({ email: req.body.email });
      // if so redirect to login
      if (foundUser) {
        return res.redirect("/login");
      }
      // if not create user and redirect to login
  
      // salt will created a more complicated hash
      const salt = await bcrypt.genSalt(12);
      // hash will convert our password into something more secure
      // test1234 => "$2a$10$5vR9VhGpkARz6EFPdkuNQ.aZNRGUgSCNSKEb9Xp1IKzrfxYETlkB2"
      const hash = await bcrypt.hash(req.body.password, salt);
  
      req.body.password = hash;
  
      // create user in database
      const newUser = await db.User.create(req.body);
  
      return res.redirect("/login");
    } catch (err) {
      console.log(err);
      return res.send(err);
    }
  });

// login post route to database and starts session
router.post("/login", async function (req, res) {
    try {
        // check if the user exists
        const foundUser = await db.User.findOne({ email: req.body.email });
        
        // if not
        // redirect to register
        if (!foundUser) return res.redirect("/register");
        
        // if the user exists
        // validate the user if passwords match -> login
        // .compare(body password, hashed password) => return true or false
        const match = await bcrypt.compare(req.body.password, foundUser.password);
    
        // if not match send error
        if (!match) return res.send("email or password is invalid");
    
        // if match create the session and redirect to home\
        // here we have created the key card
        req.session.currentUser = {
            id: foundUser._id,
            username: foundUser.username,
            avatar: foundUser.avatar
        };  
    
        return res.redirect("/blog");
    } catch (err) {
        console.log(err);
        req.err = err;
        res.send(err);
    }
});
  


  

module.exports = router;