//coustm hook to get all jobs
import { useEffect, useState } from "react";
import axios from "axios";
import { JOB_API_END_POINT } from "@/utils/content";
import { useDispatch } from "react-redux";
import { setAllJobs } from "@/redux/jobSlice";

const useGetAllJobs = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAllJobs = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get`, {
                    withCredentials: true
                });
                if (res.data.success) {
                    dispatch(setAllJobs(res.data.jobs));
                }

            } catch (error) {
                console.log(error);
            }
        };
        fetchAllJobs();
    }, []);
}    

export default useGetAllJobs