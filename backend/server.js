// Importing express package
const express=require('express')

const dotenv=require('dotenv')

dotenv.config()

// Express APP
const app=express()

// middleWare
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next()
    
})

// Routes
app.get('/',(req,res)=>{
    res.json({msg:"Welcome to our application"})
})

// Port 
const PORT=process.env.PORT;

// Listen for request
app.listen(PORT,()=>{
    console.log(`Server is Up and running on port: http://localhost:${PORT}`);
    
})