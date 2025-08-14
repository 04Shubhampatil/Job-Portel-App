import User from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwtToken from 'jsonwebtoken'
import getDataUri from "../util/datauri.js";
import cloudinary from "../util/Cloudinary.js";

const register = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, password, role } = req.body;





        if (!fullname || !email || !phoneNumber || !password || !role) {
            return res.status(400).json(
                {
                    message: "all feild is required",
                    success: false
                }
            )

        }

        const file = req.file; // optional, for resume/profile image
        const fileUri = getDataUri(file);
        const cloudResponce = await cloudinary.uploader.upload(fileUri.content, {
            resource_type: "auto",  //  Important for PDF, video, etc.
        });

        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "User already exists with this email", success: false })

        }
        const haspassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            fullname,
            email,
            phoneNumber,
            password: haspassword,
            role,
            profile: { profilePhoto: cloudResponce.secure_url }
        })

        return res.status(201).json({
            message: "User registered successfully",
            user: newUser,
            success: true
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};

const login = async (req, res) => {

    try {
        const { email, password, role } = req.body;


        if (!email || !password || !role) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            })


        }
        let user = await User.findOne({ email })

        if (!user) {
            return res.status(400).json({
                message: "incorrect email or password",
                success: false
            })

        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({
                message: "incorrect  password",
                success: false
            })

        }
        if (role !== user.role) {
            return res.status(400).json({
                message: "Account doesn't exit with current  role",
                success: false
            });
        }

        const tokenData = {  // comes from is authenticated middleware
            user: user._id
        }


        const token = jwtToken.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });

        user = {

            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile


        }

        return res
            .status(200)  // Set HTTP status code to 200 OK
            .cookie("token", token, {   // Set a cookie named "token"
                maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day in milliseconds
                httpOnly: true  // Secure: can't be accessed from frontend JavaScript
            })
            .json({   // Send JSON response body
                message: `Welcome back ${user.fullname}`,
                user: user,
                success: true
            });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
}


const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "logged out successfully",
            success: true
        })

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
}


const updateProfile = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, bio, skills } = req.body;

        const file = req.file; // optional, for resume/profile image
        const fileUri = getDataUri(file);
        const cloudResponce = await cloudinary.uploader.upload(fileUri.content, {
            resource_type: "auto",  //  Important for PDF, video, etc.
        });
        // console.log(cloudResponce);





        const userId = req.id; // Make sure req.id is populated via middleware //this id comes from DB
        let user = await User.findById(userId);

        if (!user) {
            return res.status(400).json({
                message: "User not found",
                success: false,
            });
        }


        // Process skills string into array
        let skillsArray = skills ? skills.split(",") : [];
        //  Only update fields if they are provided
        if (fullname) user.fullname = fullname;
        if (email) user.email = email;
        if (phoneNumber) user.phoneNumber = phoneNumber;
        if (bio) user.profile.bio = bio;
        if (skillsArray.length) user.profile.skills = skillsArray;

        if (file) {
            user.profile.resume = cloudResponce.secure_url;//save the cloudinaru url
            user.profile.resumeOriginalName = file.originalname;//save the originalfile name
        }



        await user.save();




        return res.status(200).json({
            message: "Profile updated successfully",
            user,
            success: true,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,


        });


    }
};


export {
    register,
    login,
    logout,
    updateProfile

}