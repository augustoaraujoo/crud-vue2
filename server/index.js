const express = require('express');
const app = express()

app.use('/',(req,res)=>{
    res.send('home')
})
app.listen(3001,()=>{
    console.log('server ok ');
})