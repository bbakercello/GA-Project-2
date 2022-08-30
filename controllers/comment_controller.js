const express = require('express')
const router = express.Router()

// fetch data from models
const db = require('../models')

//translate to JSON
router.use(express.json())

//translate incoming data to strings or arrays
router.use(express.urlencoded({extended: false}))



//get all comments route (do we need this?)
router.get('/', (req,res)=>{
    res.send('These are great comments')
})

//edit route

//delete route


//new comment route
router.get('/:id/new', async(req,res,next)=>{
    try{
        const post = await db.Post.findById(req.params.id)
        const comments = await db.Comment.find({
            post: req.params.id
        });
        res.render('comments/new.ejs',{
            post: post,
            id: post.id,
            comments: comments
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
        console.log(comment)
        
    } catch (error) {
        req.error = error
        return next()
    }
})

router.post('/',async (req,res,next)=>{
    try{
        const comment = await db.Comment.create(req.body)
        console.log(comment)
        res.redirect(`/blog`)
    }catch(error){
        req.err = error
        console.log(error)
    }
})

module.exports = router