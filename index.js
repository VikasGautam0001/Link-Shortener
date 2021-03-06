const express = require('express')
const app = express()
const st  = require('./short.js')
const fl = require('./full.js')
const ra = require('./recentactivity.js')

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))
app.use('/st',st) // short route
app.use('/',fl) //retreive url
app.use('/ra',ra)

let port = process.env.PORT || 4444;
app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})