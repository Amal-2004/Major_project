import express from "express";
import mongoose  from "mongoose";

import userRoutes from "./Routes/userRoutes.js"
import authRoutes from './Routes/authRoutes.js'
import { insertUser, updateUser } from "./Controller/userController.js";

const app =express()
app.use('/register',userRoutes)
app.use('/insert',userRoutes)
app.use('/update',userRoutes)
app.use('/delete',userRoutes)
app.use('/auth', authRoutes)

await mongoose.connect('mongodb://127.0.0.1:27017/powertools').then(()=>{
    app.listen(9000,()=>console.log('Server Running in port 9000'))
}).catch(err=>console.log(err.message))
app.all('/',(req,res)=>{
    res.send('Api Working')
})