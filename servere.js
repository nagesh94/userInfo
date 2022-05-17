const app=require('./app')
const mongoose=require('mongoose')

const dotenv=require('dotenv')

dotenv.config({
    path:'./config.env'
})

db=process.env.DATABASE


mongoose.connect(db).then(()=>{
    console.log("database connected")
})
port=process.env.PORT

app.listen(port,()=>{
    console.log("server has started")
})

