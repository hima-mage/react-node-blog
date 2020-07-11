const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
// bring routes 
const blogRoutes = require('./routes/blog')
// app 
const app = express()

// middlewars
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
//cors
if(process.env.NODE_ENV === 'development') { 
    app.use(cors({origin : `${process.env.CLIENT_URL}`}))
}

//db
mongoose
    .connect(process.env.DATABASE_LOCAL , {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false} )
    .then( () => console.log('DB connected '))
//routes middleware
app.use('/api' , blogRoutes)
//routes
// app.get('/api' , (req, res) => {
//     res.json({time: Date().toString() })
// })
// port 
const port = process.env.PORT || 8000
app.listen(port , () => {
    console.log(`this server work on port ${port}`)
})