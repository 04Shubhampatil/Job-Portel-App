import Application from "../models/applicationModel.js";
import Job from '../models/jobModel.js';



export const applyJob = async (req, res) => {
  try {
    const userId = req.id;                //  Authenticated user
    const jobId = req.params.id;          //  Job ID from URL

    //  Check if job ID is provided
    if (!jobId) {
      return res.status(400).json({
        message: "Job ID is required",
        success: false,
      });
    }

    //  Check for existing application
    const existingApplication = await Application.findOne({
      job: jobId,
      applicant: userId,
    });

    if (existingApplication) {
      return res.status(400).json({
        message: "You have already applied for this job",
        success: false,
      });
    }

    //  Check if job exists
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }

    // Create application
    const newApplication = await Application.create({
      job: jobId,
       applicant: userId ,
    });

    //  Push application to job document if job has `applications` array
    
   job.applications.push(newApplication._id);
    await job.save();

    //  Success response
    return res.status(201).json({
      message: "Applied to job successfully",
    //   application: newApplication,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
      success: false,
    });
  }
};




export const getAppliedJobs = async (req, res) => {
    try {
        const userId = req.id;
        // Find all applications for the logged-in user and populate job details, sorted by newest first
        const applications = await Application.find({ applicant: userId })
            .sort({ createdAt: -1 })
            .populate({
                path: 'job',
                options: { sort: { createdAt: -1 } },
                populate: {
                    path: 'company',
                    options: { sort: { createdAt: -1 } }
                }
            });
        // Check if any applications found
        if (!applications || applications.length === 0) {
            return res.status(404).json({
                message: "No applications found",
                success: false
            });
        }
        // Success response
        return res.status(200).json({
            applications,
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
}

export const getApplicants = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path: "applications",
            options: { sort: { createdAt: -1 } },
            populate: {
                path: 'applicant',
                options: { sort: { createdAt: -1 } }
            }

        })

        if (!job) {
            return res.status(404).json({
                message: "job not found",
                success: false
            });
        }

        return res.status(200).json({
            job,
            success: true
        });



    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
            success: false
        });
    }
}

export const updateStatus = async (req, res) => {
    try {

        const { status } = req.body;
        const applicationId = req.params.id;

        if (!status) {
            return res.status(400).json({
                message: "status is requir",
                success: false
            });
        }

        // find the application by application id

        const application = await Application.findOne({ _id: applicationId })
        if (!application) {
            return res.status(400).json({
                message: "Application not found ",
                success: false

            })
        }
        //status update
        application.status=status.toLowerCase()
        await application.save()

        return res.status(200).json({
            message: "Application status updated",
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
            success: false
        });
    }


}