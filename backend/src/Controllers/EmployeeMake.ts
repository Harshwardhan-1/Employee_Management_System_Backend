import {Request,Response} from 'express';
import { employeeModel } from '../models/EmployeeCompleteProfile';

export const completeEmployee=async(req:Request,res:Response)=>{
const {name,gmail,department,designation,salary}=req.body;
if(!name || !gmail || !department || !designation || !salary){
    return res.status(401).json({
        message:"provide proper detail",
    });
}
const checkIt=await employeeModel.findOne({gmail});
if(checkIt){
    return res.status(401).json({
        message:"user already exist",
    });
}
const user=(req as any).user;
const userId=user.userId;
const createIt=await employeeModel.create({
    userId:userId,
    name,
    gmail,
    department,
    designation,
    salary,
    date:Date.now(),
});
return res.status(200).json({
    message:"employee created successfull",
    data:createIt,
})
} 