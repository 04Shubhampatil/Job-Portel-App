import mongoose, { Schema } from 'mongoose';

const applicationSchema = new Schema({
    job: {
       type: mongoose.Schema.Types.ObjectId,
       ref:"Job",
       required: true
    },
    applicant: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true,
    },
     status: {
        type: String,
        enum: ['pending',  'rejected', 'accepted'],
        default: 'pending',
       
    },
   
   
},
    { timestamps: true });

const Application = mongoose.model('Application', applicationSchema);
export default Application;