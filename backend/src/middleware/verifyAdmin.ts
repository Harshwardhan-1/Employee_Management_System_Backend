import {Request,Response,NextFunction} from 'express';

const verifyAdmin=async(req:Request,res:Response,next:NextFunction)=>{
    const user=(req as any).user;
    if(!user || user.identity!== 'ADMIN'){
        return res.status(403).json({
            message:"not a valid user",
        });
    }
    next();
}

export default verifyAdmin;