const express = require('express')

module.exports = function(server){
    try{
        const router = express.Router()
        server.use('/api', router)
        const tesourariaService = require('../api/backend_tesouraria/backendTesourariaService')
        tesourariaService.register(router,'/tesouraria')
    }catch(e){
        console.log(e)
    }

}


