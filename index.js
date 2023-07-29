const express = require('express')

var app = express()


app.get("/",(req,res)=>{
    res.status(200).json({path:"data"}) //http://localhost:5000/
})

app.get("/data",(req,res)=>{
    res.status(200).json({msg:"Iam working perfectly"})
})



app.listen(5000,()=>{
    console.log("Server Running")
})