//coustm hook to get all jobs
import { useEffect, useState } from "react";
import axios from "axios";
import { JOB_API_END_POINT } from "@/utils/content";
import { useDispatch } from "react-redux";
import { setAllJobs,setSingleJob } from "@/redux/jobSlice";



export default useGetSinglejob