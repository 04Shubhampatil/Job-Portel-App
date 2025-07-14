import { Router } from "express";
import { login, register, updateProfile,logout } from "../controllers/userController.js";
import isAuthenticated from '../middlewares/isAuthenticated.js'
import {singleUpload} from '../middlewares/multter.js'
const router = Router()

router.route("/register").post(singleUpload, register)
router.route("/login").post(login)
router.route("/logout").get(logout)
router.route("/profile/update").post(isAuthenticated,updateProfile)

export default router

