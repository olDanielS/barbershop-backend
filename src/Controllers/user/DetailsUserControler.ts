import { Request, Response } from "express";
import { DetailsUserService } from "../../Services/user/DetailsUserService";


class DetailsUserControler{
    async handle(req:Request, res:Response){
        
    const detailsUser = new DetailsUserService();

    const user_id = req.user_id;
  
    const user = await detailsUser.execute(user_id)

    return res.status(200).json(user)
    }
}

export {DetailsUserControler}