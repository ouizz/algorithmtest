const express = require('express')
const cors = require('cors');
const urlRouter = require('./router/url')
const app = express()

app.use(cors())
app.use('/' , urlRouter)

app.listen(1234 , () => {
    console.log('Listening to port 5555');
})