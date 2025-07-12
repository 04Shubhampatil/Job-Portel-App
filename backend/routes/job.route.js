
import Router from "express";

import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getAdminjob, getAllJobs, getJobById, postJobs } from "../controllers/jobContrller.js";

const router = Router();

router.route("/post").post(isAuthenticated, postJobs);
router.route("/get").get(isAuthenticated, getAllJobs);
router.route("/get/:id").get(isAuthenticated, getJobById);
router.route("/getadminjobs").get(isAuthenticated, getAdminjob);

export default router;