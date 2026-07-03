import { Link, useNavigate  } from "react-router-dom";
import { BriefcaseBusiness } from "lucide-react";
import Button from "./Button";
function Navbar() {
  const user = JSON.parse(
  localStorage.getItem("user")
);

const role = user?.role;

const navigate = useNavigate();

const handleLogout = () => {

  localStorage.removeItem("token");
  localStorage.removeItem("user");

  navigate("/login");

};
  return (
    <header className="bg-white shadow-sm border-b">

      <div className="container-custom h-20 flex items-center justify-between">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-2"
        >
          <BriefcaseBusiness
            size={32}
            className="text-blue-600"
          />

          <h1 className="text-2xl font-bold">
            Job<span className="text-blue-600">Portal</span>
          </h1>
        </Link>

        {/* Menu */}

        <nav className="flex items-center gap-10 font-medium">

  <Link
    to="/"
    className="hover:text-blue-600"
  >
    Home
  </Link>

  {!user && (
    <Link
      to="/jobs"
      className="hover:text-blue-600"
    >
      Jobs
    </Link>
  )}

  {role === "candidate" && (
    <>
      <Link
        to="/jobs"
        className="hover:text-blue-600"
      >
        Jobs
      </Link>

      <Link
        to="/dashboard"
        className="hover:text-blue-600"
      >
        Dashboard
      </Link>

      <Link
        to="/profile"
        className="hover:text-blue-600"
      >
        Profile
      </Link>
    </>
  )}

  {role === "recruiter" && (
    <>
      <Link
        to="/my-jobs"
        className="hover:text-blue-600"
      >
        My Jobs
      </Link>

      <Link
        to="/create-job"
        className="hover:text-blue-600"
      >
        Create Job
      </Link>

      <Link
        to="/dashboard"
        className="hover:text-blue-600"
      >
        Dashboard
      </Link>
    </>
  )}

</nav>
        {/* Buttons */}

       <div className="flex gap-3">

  {!user ? (
    <>
      <Link
        to="/login">
        <Button variant="secondary">
          Login
        </Button>
      </Link>

      <Link
        to="/register">
        <Button variant="primary">
          Register
        </Button>
      </Link>

    </>
  ) : (

  //   <button
  //     onClick={handleLogout}
  //      style={{
  //       border: 'none',
  //       background: 'linear-gradient(135deg, #e81779 0%, #eb1c5a 100%)',
  //       color: '#fff',
  //       padding: '12px 26px',
  //       borderRadius: '12px',
  //       fontSize: '15px',
  //       fontWeight: 700,
  //       cursor: 'pointer',
  //       boxShadow: '0 12px 24px rgba(37, 99, 235, 0.28)',
  // }}
  //   >
  //     Logout
  //   </button>
  <Button
  variant="danger"
  onClick={handleLogout}
>
  Logout
</Button>


  )}

</div>

      </div>

    </header>
  );
}

export default Navbar;

// import { Link } from "react-router-dom";
// import { BriefcaseBusiness } from "lucide-react";

// function Navbar() {
//   return (
//     <nav className="w-full border-b border-gray-200 bg-white">
      
//       {/* Main Container */}
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

//         {/* Logo Section */}
//         <Link
//           to="/"
//           className="flex items-center gap-2"
//         >
//           <BriefcaseBusiness size={30} />

//           <h1 className="text-2xl font-bold">
//             Job<span className="text-blue-600">Portal</span>
//           </h1>
//         </Link>

//         {/* Navigation Links */}
//         <div className="hidden md:flex items-center gap-8">
//           <Link
//             to="/"
//             className="font-medium hover:text-blue-600 transition"
//           >
//             Home
//           </Link>

//           <Link
//             to="/jobs"
//             className="font-medium hover:text-blue-600 transition"
//           >
//             Jobs
//           </Link>

//           <Link
//             to="/dashboard"
//             className="font-medium hover:text-blue-600 transition"
//           >
//             Dashboard
//           </Link>
//         </div>

//         {/* Right Buttons */}
//         <div className="flex items-center gap-3">

//           <Link
//             to="/login"
//             className="px-5 py-2 border rounded-lg font-medium hover:bg-gray-100 transition"
//           >
//             Login
//           </Link>

//           <Link
//             to="/register"
//             className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
//           >
//             Register
//           </Link>

//         </div>

//       </div>
//     </nav>
//   );
// }

// export default Navbar;