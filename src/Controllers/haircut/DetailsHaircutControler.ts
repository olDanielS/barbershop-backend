import { DetailsHaircutService } from "../../Services/haircut/DetailsHaircutService";
import { Request, Response } from "express";

class DetailsHaircutControler{
    async handle(req: Request, res:Response){
        
        const haircut_id = req.query.haircut_id as string;

        const detailsHaircut = new DetailsHaircutService();
        const details = await detailsHaircut.execute(haircut_id)

        return res.json(details);
    }
}

export {DetailsHaircutControler}