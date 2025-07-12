import mongoose, { Schema } from 'mongoose';

const jobSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        
    },
     requirments: {
        type: [String],
        required: true,
    },
    salary:{
        type: Number,
        required: true,
    },
    experienceLevel:{
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    jobType:{
        type: String,
        required: true
    },
    possition: {
        type: Number,
        required: true
    },
    company: {
         type: Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
  },
  application: [{
    type: Schema.Types.ObjectId,
    ref: 'Application',
  }],

},
    { timestamps: true });

const Job = mongoose.model('Job', jobSchema);
export default Job;