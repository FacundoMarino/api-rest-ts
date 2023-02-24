/*

http://localhost:3002/auth

*/

import { Router } from "express";

import { registerControl, loginControl } from "../controllers/auth";

const router = Router();

router.post("/register", registerControl);
router.post("/login", loginControl);

export { router };
