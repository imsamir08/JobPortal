import api from "./api";

export const getAllJobs = async (
  keyword = "",
  location = "",
  jobType = ""
) => {

  const response =
    await api.get(
      `/jobs?keyword=${keyword}&location=${location}&jobType=${jobType}`
    );

  return response.data;

};

// Get Single Job

export const getJobById = async (id) => {

  const response =
    await api.get(`/jobs/${id}`);

  return response.data;

};
export const getMyJobs = async () => {

  const response =
    await api.get("/jobs/my-jobs");

  return response.data;

};

// Create Job
export const createJob = async (jobData) => {
  const response = await api.post("/jobs/create", jobData);

  return response.data;
};

export const updateJob = async (id, jobData) => {
  const response =
    await api.put(`/jobs/${id}`,jobData);

  return response.data;

};

export const deleteJob = async (id) => {
  const response =
    await api.delete(`/jobs/${id}`);

  return response.data;

};

export const getRecruiterDashboard = async () => {
  const response = await api.get(
    "/jobs/recruiter-dashboard"
  );

  return response.data;
};