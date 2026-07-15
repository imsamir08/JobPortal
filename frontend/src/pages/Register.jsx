import { useState } from "react";
import Navbar from "../components/Navbar";
import { registerUser } from "../services/authService";
import toast from "react-hot-toast";
import Button from "../components/Button";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] =
    useState("candidate");

  const handleRegister = async () => {
    try {
      const data = await registerUser({
        name,
        email,
        password,
        role,
      });

      toast.success(data.message);

    } catch (error) {
      toast.error(
        error.response?.data?.message || "Registration Failed"
      );
    }
  };
  return (
    <>
      <Navbar />

      <section className="min-h-[80vh] flex items-center justify-center px-6">

        <div className="w-full max-w-md bg-white border rounded-2xl shadow-sm p-8">

          <h1 className="text-3xl font-bold text-center">
            Create Account
          </h1>

          <p className="text-center text-gray-500 mt-2">
            Start your job journey today
          </p>

          <div className="mt-8 space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-12 border rounded-lg px-4"
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 border rounded-lg px-4"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 border rounded-lg px-4"
            />

            <div>

              <label className="block mb-2 font-medium">
                Account Type
              </label>

              <select
                value={role}
                onChange={(e) =>
                  setRole(e.target.value)
                }
                className="
      w-full
      h-12
      border
      rounded-lg
      px-4
    "
              >

                <option value="candidate">
                  Candidate
                </option>

                <option value="recruiter">
                  Recruiter
                </option>

              </select>

            </div>

            {/* <button
              onClick={handleRegister}
              className="
              w-full
              h-12
              bg-blue-600
              text-white
              rounded-lg
              hover:bg-blue-700
              "
            >
              Register
            </button> */}

            <Button variant="primary">
              onClick={handleRegister}
          Register
        </Button>

          </div>

        </div>

      </section>
    </>
  );
}

export default Register;