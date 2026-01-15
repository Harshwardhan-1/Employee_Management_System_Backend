import {Request,Response,NextFunction} from 'express';
const verifyEmployee=async(req:Request,res:Response,next:NextFunction)=>{
const employee=(req as any).user;
if(!employee || employee.identity!== "EMPLOYEE"){
    return res.status(403).json({
        message:"cannot access",
    });
}
next();
}

export default verifyEmployee;