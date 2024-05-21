import { Request, Response } from "express";
import { CheckSubscriptionService } from "../../Services/haircut/CheckSubscriptionService";

class CheckSubscriptionControler{
    async handle(req: Request, res:Response){
        const user_id = req.user_id;

        const checkSubscription = new CheckSubscriptionService();
    
        const status = await checkSubscription.execute(user_id);

        res.json(status)
    }
}
export {CheckSubscriptionControler};