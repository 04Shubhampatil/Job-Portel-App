import Company from '../models/companyModel.js'

const companyRegister = async (req, res) => {
    try {
        const { companyName } = req.body;

        if (!companyName) {
            return res.status(400).json({
                message: "Company name is required.",
                success: false
            });
        }

        let company = await Company.findOne({ name: companyName }); //company name user interfcae par dikhega our name databse me 
        //!eg name:companyName

        if (company) {
            return res.status(400).json({
                message: "You can't register the same company twice.",
                success: false
            });
        }

        company = await Company.create({
            name: companyName,
            userId: req.id  //  comes from isAuthenticated middleware
        });

        return res.status(201).json({
            message: "Company registered successfully.",
            company,
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

const getCompany = async (req, res) => {
    try {
        const userId = req.id; //logged in user id 
        const companies = await Company.find({ userId })

        if (!companies) {
            return res.status(404).json({
                message: "companies not found.",
                suceess: false
            })
        }

        return res.status(200).json({
            companies,
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

//get company by id 


const getCompanyById = async (req, res) => {

    try {

        const companyId = req.params.id
        const company = await Company.findById(companyId)

        if (!company) {
            return res.status(404).json({
                message: "compay  not found.",
                suceess: false
            })
        }

        return res.status(200).json({
            company,
            suceess: true
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
            success: false
        });
    }

}


const updateCompany = async (req, res) => {
    try {
        const { name, description, website, location } = req.body
        const file = req.file

        //cloudinary is here

        const updateData = { name, description, website, location }
        const company = await Company.findByIdAndUpdate(req.params.id, updateData, { new: true })

        if (!company) {
            return res.status(404).json({
                message: "company  not found",
                suceess: false
            })
        }
        return res.status(400).json({
            message: "company information updated.",
            suceess: true
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
            success: false
        });

    }
}

export {
    companyRegister,
    getCompany,
    getCompanyById,
    updateCompany
}