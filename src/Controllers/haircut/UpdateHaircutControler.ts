import { Request, Response } from "express";
import { UpdateHaircutService } from "../../Services/haircut/UpdateHaircutService";

class UpdateHaircutControler{
    async handle(req: Request, res: Response){
    
        const user_id = req.user_id
        const {name, price, status, haircut_id } = req.body;

        const updateHaircut = new UpdateHaircutService();
        
        const haircut = await updateHaircut.execute({
            user_id,
            name,
            price,
            status, haircut_id
        })

        return res.json(haircut);
    }
}

export {UpdateHaircutControler};