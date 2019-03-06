const port = 3003

const bodyParce = require('body-parser')
const express = require('express')
const server = express()
//const allowCors = require('./cors')


server.use(bodyParce.urlencoded({extended:true}))
server.use(bodyParce.json())
//server.use(allowCors)
server.listen(port, function(){
    console.log(`APP backend-tesouraria RUNNING !!!!! PORT:${port}.`)
})

module.exports = server