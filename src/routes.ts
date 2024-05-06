import {Request, Response, Router} from 'express';
const router = Router()

import { CreateUserControler } from './Controllers/user/createUserControler';

router.get("/", (req,res) => {
    return res.json({ok:"true"})
})

router.post("/users", new CreateUserControler().handle)

export {router};