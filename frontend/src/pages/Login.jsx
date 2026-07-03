import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import toast from "react-hot-toast";
import Button from "../components/Button";
function Login() {
  const navigate = useNavigate();
    const [email, setEmail] =
  useState("");

const [password, setPassword] =
  useState("");

  const handleLogin = async () => {
  try {

    const data =
      await loginUser({
        email,
        password,
      });

    localStorage.setItem(
      "token",
      data.token
    );

    localStorage.setItem(
  "user",
  JSON.stringify(data.user)
);

    toast.success("Login Successful");
 navigate("/dashboard");
  } catch (error) {

    toast.error(
       error.response?.data?.message ||
      "Login Failed"
    );

  }
};
  return (
    <>
      <Navbar />

      <section className="min-h-[80vh] flex items-center justify-center px-6">

        <div className="w-full max-w-md bg-white border rounded-2xl shadow-sm p-8">

          <h1 className="text-3xl font-bold text-center">
            Welcome Back
          </h1>

          <p className="text-center text-gray-500 mt-2">
            Login to your account
          </p>

          <div className="mt-8 space-y-4">

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full h-12 border rounded-lg px-4"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full h-12 border rounded-lg px-4"
            />

            <button
                onClick={handleLogin}
              className="
              w-full
              h-12
              bg-blue-600
              text-white
              rounded-lg
              hover:bg-blue-700
              "
            >
              Login
            </button>

          </div>

        </div>

      </section>
    </>
  );
}

export default Login;