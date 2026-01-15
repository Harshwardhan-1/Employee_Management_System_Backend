import {Request,Response} from 'express';
import { userModel } from '../models/userModel';
import { employeeModel } from '../models/EmployeeCompleteProfile';
import { checkName } from '../validators/checkNameValidator';
import { checkEmail } from '../validators/checkEmailValidator';

export const completeEmployee=async(req:Request,res:Response)=>{
const {name,gmail,department,designation,salary}=req.body;
if(!name || !gmail || !department || !designation || !salary){
    return res.status(401).json({
        message:"provide proper detail",
    });
}
const chName=await checkName({name});
if(!chName.isValid){
    return res.status(400).json({
        message:"name should be of 3 characters",
    });
}
const chgmail=checkEmail({gmail});
if(!chgmail.isValid){
    return res.status(400).json({
        message:"Enter proper email id",
    })
}
const checkIt=await employeeModel.findOne({gmail});
if(checkIt){
    return res.status(401).json({
        message:"user already exist",
    });
}
const user=(req as any).user;
const userId=user.userId;

const updateRole=await userModel.findOne({gmail});
if(!updateRole){
    return res.status(401).json({
        message:"UserNotFound",
    });
}
updateRole.status="APPROVED";
await updateRole.save();
const createIt=await employeeModel.create({
    userId:userId,
    name,
    gmail,
    department,
    designation,
    salary,
    status:"APPROVED",
    date:Date.now(),
});
return res.status(200).json({
    message:"employee created successfull",
    data:createIt,
})
} 