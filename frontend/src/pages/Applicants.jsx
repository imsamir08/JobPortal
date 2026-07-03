import {
    useEffect,
    useState,
} from "react";

import {
    useParams,
} from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import toast from "react-hot-toast";

import {
    getApplicants,
    updateApplicationStatus,
} from "../services/applicationService";

function Applicants() {

    const { jobId } =
        useParams();

    const [applications,
        setApplications] =
        useState([]);

    useEffect(() => {

        const fetchApplicants =
            async () => {

                try {

                    const data =
                        await getApplicants(jobId);

                    setApplications(
                        data.applications
                    );

                } catch (error) {

                    console.log(error);

                }

            };

        fetchApplicants();

    }, [jobId]);

    const handleStatusChange =
        async (id, status) => {

            try {

                const response =
                    await updateApplicationStatus(
                        id,
                        status
                    );

                toast.success(response.message);

                setApplications((prev) =>
                    prev.map((app) =>
                        app._id === id
                            ? {
                                ...app,
                                status,
                            }
                            : app
                    )
                );

            } catch (error) {

                toast.error(
                    error.response?.data?.message ||
                    "Status Update Failed"
                );

            }

        };

    return (

        <>
            <Navbar />

            <section className="max-w-6xl mx-auto px-6 py-10">

                <h1 className="text-3xl font-bold mb-8">

                    Applicants

                </h1>

                <div className="space-y-5">

                    {applications.map((item) => (

                        <div
                            key={item._id}
                            className="
              border
              rounded-2xl
              p-6
              bg-white
              shadow-sm
              "
                        >

                            <h2 className="text-xl font-bold">

                                {item.applicant?.name}

                            </h2>

                            <p className="text-gray-500">

                                {item.applicant?.email}

                            </p>

                            <p className="mt-2">

                                {item.applicant?.phone}

                            </p>

                            <p className="mt-2">

                                {item.applicant?.skills}

                            </p>

                            {item.applicant?.resume && (

                                <a
                                    href={`http://localhost:5000${item.applicant.resume}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="
                  text-blue-600
                  underline
                  "
                                >

                                    View Resume

                                </a>

                            )}

                            <div className="mt-4">

                                <label className="font-semibold">

                                    Status

                                </label>

                                <select
                                    value={item.status}
                                    onChange={(e) =>
                                        handleStatusChange(
                                            item._id,
                                            e.target.value
                                        )
                                    }
                                    className="
      mt-2
      block
      border
      rounded-lg
      px-4
      py-2
    "
                                >

                                    <option>
                                        Applied
                                    </option>

                                    <option>
                                        Reviewing
                                    </option>

                                    <option>
                                        Interview
                                    </option>

                                    <option>
                                        Selected
                                    </option>

                                    <option>
                                        Rejected
                                    </option>

                                </select>

                            </div>

                        </div>

                    ))}

                </div>

            </section>

            <Footer />

        </>

    );

}

export default Applicants;