import {Request, Response, Router} from 'express';
const router = Router()

import { CreateUserControler } from './Controllers/user/createUserControler';
import { AuthUserControler } from './Controllers/user/AuthUserControler';

router.get("/", (req,res) => {
    return res.json({ok:"true"})
})

router.post("/users", new CreateUserControler().handle)
router.post("/session", new AuthUserControler().handle)

export {router};