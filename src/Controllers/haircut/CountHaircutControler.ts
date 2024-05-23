import { Request, Response } from "express";
import { CountHaircutService } from "../../Services/haircut/CountHaircutService";


class CountHaircutControler{
    async handle(req:Request, res:Response){
        const user_id = req.user_id;

        const countHaircut = new CountHaircutService();
        const ammoutHaitCuts = await countHaircut.execute(user_id);

        return res.json(ammoutHaitCuts);
        
    }
}

export {CountHaircutControler}