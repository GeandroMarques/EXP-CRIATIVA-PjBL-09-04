import express from "express";
import { getUsers, addUser, updateUser, deleteUser } from "../controllers/user.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/", addUser);
router.get("/", updateUser);
router.get("/", deleteUser);

export default router;