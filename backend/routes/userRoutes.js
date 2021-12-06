import express from "express";
import { protect } from "../middleware/authMiddleware";
import {
  registerUser,
  loginUser,
  logoutUser,
  currentUser,
} from "../controllers/userController";
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);
router.route("/isvalid").get(protect, currentUser);

export default router;
