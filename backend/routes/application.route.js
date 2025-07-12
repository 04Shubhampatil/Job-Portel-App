import { Router } from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
  applyJob,
  getAppliedJobs,
  updateStatus,
  getApplicants,
} from "../controllers/applicatin.controller.js";

const router = Router();

// Apply to a job by ID
router.route("/apply/:id").get(isAuthenticated, applyJob);

// Get all jobs the logged-in user applied to
router.route("/get").get(isAuthenticated, getAppliedJobs);

//  Get all applicants for a specific job
router.route("/:id/applicants").get(isAuthenticated, getApplicants);

//  Update the status of an application (by ID)
router.route("/status/:id/update").post(isAuthenticated, updateStatus);

export default router;
