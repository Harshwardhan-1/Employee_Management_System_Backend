import mongoose from 'mongoose';
const userSchema=new mongoose.Schema({
name:String,
gmail:String,
password:String,
otp:Number,
otpExpire:Number,
identity:String,
status:String,
})
export const userModel=mongoose.model("user",userSchema);