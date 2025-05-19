import { Router } from "express";
import {
  getAllUsers,
  loginUser,
  registerUser,
} from "../controllers/userController.js";

const router = Router();

router.get("/users", getAllUsers);
router.post("/login", loginUser);
router.post("/register", registerUser);
// router.post("/send-otp", sendOTP);
// router.post("/verify-otp", verifyOTP);

export default router;
