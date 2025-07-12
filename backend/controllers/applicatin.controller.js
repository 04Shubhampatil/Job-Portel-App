import Application from "../models/applicationModel.js";
import Job from '../models/jobModel.js';

export const applyJob = async (req, res) => {
    try {
        const userId = req.id; // Logged-in user ID (from authentication middleware)
        const jobId = req.params.id; // Job ID from URL

        //  Check if job ID is provided
        if (!jobId) {
            return res.status(400).json({
                message: "Job ID is required",
                success: false
            });
        }

        // Check if user already applied for this job
        const existingApplication = await Application.findOne({ userId, jobId });
        if (existingApplication) {
            return res.status(400).json({
                message: "You have already applied for this job",
                success: false
            });
        }

        // Check if job actually exists
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({
                message: "Job not found",
                success: false
            });
        }

        //  Create a new application record
        const newApplication = await Application.create({
            job: userId,
            appllicant: jobId
        });

        // Push application ID to job model if it has application list
        job.application.push(newApplication._id)
        await job.save()

        //  Return success response
        return res.status(201).json({
            message: "Applied to job successfully",
            success: true
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
            success: false
        });
    }
};


export const getAppliedJobs = async (req, res) => {
    try {
        const userId = req.id;
        //?Find all applications for the logged-in user and populate job details, sorted by newest first
        const applicaton = await Application.find({ applicant: userId })
            .sort({ createdAt: -1 })
            .populate({
                path: 'job',
                options: { sort: { createdAt: -1 } },


            })
    } catch (error) {

    }
}

