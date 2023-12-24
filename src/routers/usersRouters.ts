import express from "express";
import { registerUserController } from "../controllers/users/registerUserController";
import { loginUserController } from "../controllers/users/loginUserController";
import { verifyToken } from "../middleware/jwtVerifyToken";
import { keepLoginController } from "../controllers/users/keepLoginController";

const router = express.Router();

router.post("/register", registerUserController);
router.post("/login", loginUserController);
router.get("/keeplogin", verifyToken, keepLoginController);

export default router;
