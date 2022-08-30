// importing express - method-override
const express = require('express')
const methodOverride = require('method-override')
require('./config/db.connection.js')


//CONTROLLER IMPORTS
const postController = require('./controllers/post_controller')
const commentController = require('./controllers/comment_controller')

//app configuration
const app = express()
const PORT = 4000
app.set('view engine','ejs')

// Middleware
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));


app.use('/blog', postController)
app.use('/comments',commentController)


//home route
// app.get('/')


//SERVER
app.listen(PORT, () => console.log('starting server at port:', PORT))

// module.exports = app