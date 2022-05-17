const express=require('express')
const userRoute=require('./route/userRoute')
const cors=require('cors')

const app=express()

app.use(express.json())


app.use(cors({
    origin:"http://localhost:3000"
}))

app.use('/api/users',userRoute)

app.all('*',(req,res,next)=>{
    res.status(404).json({
        message:"route does not exist"
    })
    
})

module.exports=app