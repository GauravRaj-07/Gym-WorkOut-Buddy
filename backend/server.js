// Importing express package
const express=require('express')

const dotenv=require('dotenv')

const mongoose=require('mongoose')

// routes
const workoutRoutes=require('./routes/workout')
const userRoutes=require('./routes/user')

dotenv.config()

// Express APP
const app=express()

// middleWare
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next()  
})
app.use(express.json())

// Routes
app.get('/',(req,res)=>{
    res.json({msg:"Welcome to our application"})
})
app.use('/api/workouts/',workoutRoutes)
app.use('/api/user/',userRoutes)


// connect to database
mongoose.connect(process.env.MONGO_URL)
.then(()=>{console.log("DataBase Connected")})
.catch((error)=>{console.log(error)})

// Port 
const PORT=process.env.PORT;

// Listen for request
app.listen(PORT,()=>{
    console.log(`Server is Up and running on port: http://localhost:${PORT}`);
    
})