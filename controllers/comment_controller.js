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
router.get('/:id/new', (req,res)=>{
    res.render('comments/new.ejs')
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