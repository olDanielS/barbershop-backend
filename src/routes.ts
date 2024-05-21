import {Request, Response, Router} from 'express';
const router = Router()

import { CreateUserControler } from './Controllers/user/createUserControler';
import { AuthUserControler } from './Controllers/user/AuthUserControler';
import { DetailsUserControler } from './Controllers/user/DetailsUserControler';
import { UpdateUserControler } from './Controllers/user/UpdateUserControler';

import { CreateHaircutControler } from './Controllers/haircut/CreateHaircutControler';
import { ListHaircutControler } from './Controllers/haircut/ListHaircutControler';
import { UpdateHaircutControler } from './Controllers/haircut/UpdateHaircutControler';

import { isAuthenticated } from './middlewares/isAuthenticated';

router.get("/", (req,res) => {
    return res.json({ok:"true"})
})

// ======= Auth
router.post("/users", new CreateUserControler().handle);
router.post("/session", new AuthUserControler().handle);
router.put("/users", isAuthenticated, new UpdateUserControler().handle);

router.get("/me", isAuthenticated, new DetailsUserControler().handle);

// ======= Haircut
router.post("/haircut", isAuthenticated, new CreateHaircutControler().handle);
router.put("/haircut", isAuthenticated, new UpdateHaircutControler().handle);
router.get("/haircuts", isAuthenticated, new ListHaircutControler().handle);

export {router};