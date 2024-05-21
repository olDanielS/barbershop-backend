import {Request, Response} from 'express';
import { ListHaircutService } from '../../Services/haircut/ListHaircutService';

class ListHaircutControler {
    async handle(req:Request, res:Response){

    const user_id = req.user_id ;
    const status = req.query.status as string;

    const listHaircut = new ListHaircutService();

    const haitcuts = await listHaircut.execute({
        user_id,
        status
    });

    res.json(haitcuts);

    }
}

export {ListHaircutControler};