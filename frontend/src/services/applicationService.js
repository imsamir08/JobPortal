import api from "./api";

// Apply for a Job
export const applyForJob = async (jobId) => {
  const response = await api.post(
    `/applications/apply/${jobId}`
  );

  return response.data;
};

// Get Logged-in User Applications
export const getMyApplications = async () => {
  const response = await api.get(
    "/applications/my-applications"
  );

  return response.data;
};

export const getApplicants = async (
  jobId
) => {

  const response =
    await api.get(
      `/applications/job/${jobId}`
    );

  return response.data;

};
export const updateApplicationStatus =
async (id, status) => {

  const response =
    await api.put(
      `/applications/status/${id}`,
      {
        status,
      }
    );

  return response.data;

};