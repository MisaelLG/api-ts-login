import { Router } from "express";

import * as user from '../controllers/user.controller';

const router = Router();

router.post('/signUp', user.signUp);

router.post('/signIn', user.signIn);

export default router;
