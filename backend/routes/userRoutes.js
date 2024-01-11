import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  getUserById,
  getUserProfile,
  getUsers,
  deleteUser,
  updateUser,
  updateUserProfile,
} from "../controllers/userController.js";
const router = express.Router();

router.route("/").post(registerUser).get(getUsers);
router.post("/login", authUser);
router.post("/logout", logoutUser);
router.route("/profile").put(updateUserProfile).get(getUserProfile);

router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

export default router;
