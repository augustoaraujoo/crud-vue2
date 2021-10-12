/*
    * descrição : arquivo responsável 
    por fazer a chamada da api Backend
*/
const express = require('express');
const router = express.Router();

router.get('/api',(req,res)=>{
    res.status(200).send({
        success : 'true',
        message : 'bem vindo',
        version : '1.0.0'
    })
})

module.exports = router