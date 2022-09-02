const express = require('express')
const router = express.Router()

// fetch data from models
const db = require('../models')
const Comment = require('../models/Comment.js')
const Post = require('../models/Post.js')
const User = require('../models/User.js')



//translate to JSON
router.use(express.json())

//translate incoming data to strings or arrays
router.use(express.urlencoded({extended: false}))



//new comment route
router.get('/:id/new', async(req,res,next)=>{
    
    try{
        const user = req.session.currentUser 
        const post = await db.Post.findById(req.params.id)      
        const comments = await db.Comment.find({
            post: req.params.id
        });
        res.render('comments/new.ejs',{
            post: post,
            id: post.id,
            comments: comments,
        })
    }catch (error){
        req.error = error
        return next()
    }
    
})

router.delete('/:id', async (req, res, next) => {
    try{
      const comment =  await db.Comment.findByIdAndDelete(req.params.id) 
        res.redirect('/blog')
    } catch (error) {
        req.error = error
        return next()
    }
})

router.post('/',async (req,res,next)=>{
    try{
        const comment = await db.Comment.create(req.body)
        user: req.session.currentUser.id
        res.redirect(`/blog`)
    }catch(error){
        req.err = error
        console.log(error)
    }
})


module.exports = router