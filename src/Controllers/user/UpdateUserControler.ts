import { Request, Response } from "express";
import { UpdateUserService } from "../../Services/user/UpdateUserService";


class UpdateUserControler{
    async handle(req: Request, res:Response){
        const {name, endereco} = req.body;
        const user_id = req.user_id;

        if(name || endereco){
            
            const updateService = new UpdateUserService();
            
            const user = await updateService.execute({
                user_id,
                name,
                endereco
            })
            
            return res.json(user);
        }else{
            throw new Error("At least 1 argument is required")
        }
    }
}

export {UpdateUserControler};