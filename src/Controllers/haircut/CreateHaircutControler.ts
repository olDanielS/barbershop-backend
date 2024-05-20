import { Request, Response } from "express";
import { CreateHaircutService } from "../../Services/haircut/CreateHaircutService";

class CreateHaircutControler{
    async handle(req:Request, res:Response){
        
        const user_id = req.user_id;
        const {name, price} = req.body;
    
        if(!name || !price){
            throw new Error("Arguments failed")
        }

        const createHaircut = new CreateHaircutService();

        const haircut = await createHaircut.execute({
            user_id, name, price
        })

        return res.json(haircut)

    }
}

export {CreateHaircutControler};