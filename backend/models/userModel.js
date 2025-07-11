import mongoose,{Schema} from 'mongoose';


const userSchema = new Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
     phoneNumber: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    role:{
        type: String,
        enum:['student','recruiter'],
        default: 'student',
        required: true
    },
   profile:{
    bio:{type:String},
    skils:[{type:String}],
    resume:{type:String},
    resumeOriginalName:{type:String},
    company:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Company'
    },
    profilePhoto:{
      type:String,
      default:""
    }
   }
},{timestamps:true});

const User = mongoose.model('User', userSchema);
export default User;