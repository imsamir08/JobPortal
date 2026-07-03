import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  getMyProfile,
  updateProfile,
  uploadResume,
} from "../services/authService";
import toast from "react-hot-toast";

function Profile() {

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    about: "",
    resume: "",
  });
  const [resumeFile, setResumeFile] = useState(null);

  useEffect(() => {

    const fetchProfile = async () => {
      try {

        const data = await getMyProfile();

        setProfile({
          name: data.user.name || "",
          email: data.user.email || "",
          phone: data.user.phone || "",
          skills: data.user.skills || "",
          about: data.user.about || "",
          resume: data.user.resume || "",
        });

      } catch (error) {

        console.log(error);

      }
    };

    fetchProfile();

  }, []);

  const handleChange = (e) => {

    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async () => {

    try {

      const response =
        await updateProfile(profile);

      toast.success(response.message);

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Update Failed"
      );

    }

  };

  const handleResumeUpload = async () => {
  if (!resumeFile) {
    toast.error("Please select a PDF first.");
    return;
  }

  try {
    const formData = new FormData();

    // "resume" must match upload.single("resume")
    formData.append("resume", resumeFile);

    const response = await uploadResume(formData);

    toast.success(response.message);

    // Update local profile state so UI stays in sync
    setProfile((prev) => ({
      ...prev,
      resume: response.user.resume,
    }));
  } catch (error) {
    toast.error(
      error.response?.data?.message ||
      "Resume upload failed"
    );
  }
};

  return (
    <>
      <Navbar />

      <section className="container-custom min-h-[80vh] flex items-center justify-center  py-12">

        <div className="max-w-3xl w-full bg-white rounded-2xl border border-gray-200 shadow-sm p-8">

          {/* Header */}

          <div className="flex items-center gap-5 mb-8">

            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-600">

              {profile.name
                ? profile.name[0].toUpperCase()
                : "U"}

            </div>

            <div>

              <h1 className="text-3xl font-bold">
                My Profile
              </h1>

              <p className="text-gray-500 mt-1">
                Manage your account information
              </p>

            </div>

          </div>

          {/* Form */}

          <div className="space-y-5">

            <div>

              <label className="block mb-2 font-medium">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="w-full h-12 px-4 border rounded-lg"
              />

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Email
              </label>

              <input
                type="email"
                value={profile.email}
                readOnly
                className="w-full h-12 px-4 border rounded-lg bg-gray-100"
              />

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Phone
              </label>

              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                className="w-full h-12 px-4 border rounded-lg"
              />

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Skills
              </label>

              <textarea
                rows="3"
                name="skills"
                value={profile.skills}
                onChange={handleChange}
                className="w-full p-4 border rounded-lg"
              />

            </div>

            <div>

              <label className="block mb-2 font-medium">
                About
              </label>

              <textarea
                rows="4"
                name="about"
                value={profile.about}
                onChange={handleChange}
                className="w-full p-4 border rounded-lg"
              />

            </div>
<div>
  <label className="block mb-2 font-medium">
    Upload Resume (PDF)
  </label>

  <input
    type="file"
    accept=".pdf"
    onChange={(e) =>
      setResumeFile(e.target.files[0])
    }
    className="w-full border rounded-lg p-3"
  />

  <button
    type="button"
    onClick={handleResumeUpload}
    className="
      mt-3
      bg-green-600
      hover:bg-green-700
      text-white
      px-5
      py-2
      rounded-lg
    "
  >
    Upload Resume
  </button>

  {profile.resume && (
    <a
      href={`http://localhost:5000${profile.resume}`}
      target="_blank"
      rel="noreferrer"
      className="block mt-3 text-blue-600 hover:underline"
    >
      View Uploaded Resume
    </a>
  )}
</div>
            <button
              onClick={handleSubmit}
              className="
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-6
              py-3
              rounded-lg
              font-medium
              "
            >
              Save Changes
            </button>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Profile;