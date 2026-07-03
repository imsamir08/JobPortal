import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import CreateJob from "./pages/CreateJob";
import EditJob from "./pages/EditJob";
import MyJobs from "./pages/MyJobs";
import Applicants from "./pages/Applicants";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/jobs" element={<Jobs />} />

      <Route path="/jobs/:id" element={<JobDetails />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>} />

      <Route path="/profile" element={<Profile />} />
      <Route
        path="/recruiter-dashboard"
        element={<ProtectedRoute>
      <RecruiterDashboard />
    </ProtectedRoute>}
      />
      <Route
  path="/create-job"
  element={<ProtectedRoute>
      <CreateJob />
    </ProtectedRoute>}
/>

<Route
  path="/edit-job/:id"
  element={<ProtectedRoute>
      <EditJob />
    </ProtectedRoute>}
/>
<Route
  path="/my-jobs"
  element={<ProtectedRoute>
      <MyJobs />
    </ProtectedRoute>}
/>
<Route
  path="/applicants/:jobId"
  element={<ProtectedRoute>
      <Applicants />
    </ProtectedRoute>}
/>
<Route
  path="*"
  element={<NotFound />}
/>
    </Routes>
  );
}

export default App;