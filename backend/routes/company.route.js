import { Router } from "express";
import {getCompany,getCompanyById,companyRegister,updateCompany} from '../controllers/companyController.js'
import isAuthenticated from '../middlewares/isAuthenticated.js'
const router = Router()

router.route("/register").post(isAuthenticated,companyRegister)
router.route("/get").get(isAuthenticated,getCompany)
router.route("/get/:id").get(isAuthenticated,getCompanyById)
router.route("/update/:id").put(isAuthenticated,updateCompany)

export default router

