import mongoose from 'mongoose';
const employeeSchema=new mongoose.Schema({
    userId:{
        type:String,
        ref:"user",
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    gmail:{
        type:String,
        required:true,
    },
    department:{
        type:String,
        enum:['Hr',"Finance",'Backend Devloper','Frontend Devloper',"API Devloper","UI Devloper"],
        required:true,
    },
    salary:{
        type:String,
        required:true,
    },
    designation:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
})


export const employeeModel=mongoose.model("updateEmployee",employeeSchema);