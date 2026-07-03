import api from "./api";

export const registerUser = async (userData) => {
  const response = await api.post(
    "/auth/register",
    userData
  );

  return response.data;
};

export const loginUser = async (userData) => {
  const response = await api.post(
    "/auth/login",
    userData
  );
  return response.data;
};

export const getMyProfile = async () => {
  const response = await api.get("/auth/me");
  return response.data;
};
export const updateProfile = async (profileData) => {
  const response = await api.put(
    "/auth/update-profile",
    profileData
  );

  return response.data;
};
export const uploadResume = async (formData) => {
  const response = await api.put(
    "/auth/upload-resume",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};