const User=require('./../modal/user')


exports.createUser=async(req,res,next)=>{
    try {
        const user= await User.create(req.body)
        res.status(200).json({
            status:"user created",
            user
        })
    } catch (error) {
        res.status(400).json({
            status:"failed"
        })
    }
}

exports.getUser=async(req,res,next)=>{
    try {
        const users=await User.find()
        res.status(200).json({
            status:"success",
            users
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status:"failed"
        })
    }
}


