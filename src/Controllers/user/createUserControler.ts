import { Request, Response } from "express";
import { CreateUserService } from "../../Services/user/CreateUserService";

class CreateUserControler{
    async handle(req: Request, res:Response){
        const {name, email, password} = req.body;
        const createUserService = new CreateUserService();
        const user = await createUserService.execute({
            name, 
            email, 
            password
        })

        return res.json(user)
    }
}
export {CreateUserControler};