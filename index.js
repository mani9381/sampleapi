const express = require('express')
var port = process.env.PORT ||5000
var app = express()


app.get("/",(req,res)=>{
    res.status(200).json({path:"data"}) //http://localhost:5000/
})

app.get("/data",(req,res)=>{
    res.status(200).json({msg:"Iam working perfectly"})
})



app.listen(port,()=>{
    console.log("Server Running")
})
