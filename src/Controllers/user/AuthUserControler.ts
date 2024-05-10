import e, { Request, Response } from "express";
import { AuthUserService } from "../../Services/user/AuthUserService";

class AuthUserControler{
    async handle(req:Request, res:Response){
    
    const {email, password} = req.body;
        
    const authService = new AuthUserService();
    const user = await authService.execute({
        email, 
        password
    })
    return res.status(200).json(user)
    }
}

export {AuthUserControler}