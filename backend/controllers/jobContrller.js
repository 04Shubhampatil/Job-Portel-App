
//host nost
import Job from '../models/jobModel.js'

export const postJobs = async (req, res) => {


    try {
        const { title, description, requirments, salary, location, jobType, possition, experienceLevel, companyId } = req.body
        const userId = req.id
        if (!title || !description || !requirments || !salary || !location || !jobType || !possition || !experienceLevel || !companyId) {
            return res.status(400).json({
                message: "something is missing",
                success: false
            });
        }

        const job = await Job.create({
            title,
            description,
            requirments: requirments.split(","),
            salary: Number(salary),
            experienc: experienceLevel,
            location,
            jobType,
            possition,
            experienceLevel,
            company: companyId,
            createdBy: userId
        })

        return res.status(201).json({
            message: "new job created successfully",
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


export const getAllJobs = async (req, res) => {
    try {
        const keyword = req.query.keyword || ""; //default value 

        const Query = {
            $or: [
                { title: { $regex: keyword, $options: "i" } },        // match in title search
                { description: { $regex: keyword, $options: "i" } }   // match in description search
            ]
        };



        const jobs = await Job.find(Query).populate({
            path:"company"
        }).sort({createdAt: -1})
        if (!jobs) {
            return res.status(204).json({
                message: " jobs not found",
                success: false

            })
        };

        return res.status(200).json({
            jobs,
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

// student

export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path:"applications"
        });

        if (!job) {
            return res.status(404).json({
                message: "Job not found",
                success: false
            });
        }

        return res.status(200).json({
            message: "Job found",
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
};

export const getAdminjob = async (req, res) => {
    try {
        const adminId = req.id
        const jobs = await Job.find({ createdBy: adminId })
        if (!jobs) {
            return res.status(204).json({
                message: "jobs not found",
                success: false
            })
        }
        return res.status(200).json({
            jobs,
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
