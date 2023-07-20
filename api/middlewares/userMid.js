import express from 'express';
import { registerUser,Login,Logout, deleteUser} from '../controllers/usersController.js';
import { verifyToken } from '../utility/verifytoken.js';

const router=express.Router();

router.post("/create",registerUser);
router.post("/login",Login);
router.delete("/deleteuser/:id",verifyToken,deleteUser);

router.get("/logout",verifyToken,Logout);

export default router; 