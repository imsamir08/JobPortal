# JobPortal 

A full-stack MERN Job Portal application with separate **Candidate** and **Recruiter** workflows.  
Users can browse jobs, apply for jobs, manage profiles, and track applications, while recruiters can create jobs, manage postings, and view applicants.

---

## Live Demo

- **Frontend:** [JobPortal Live](https://your-vercel-link.vercel.app)
- **Backend API:** [Render API](https://your-render-link.onrender.com)

---

## Features

### Candidate Features
- Register / Login
- Browse all jobs
- Search and filter jobs
- View job details
- Apply to jobs
- Upload resume
- Manage profile
- Dashboard with application stats and recent applications

### Recruiter Features
- Register / Login as recruiter
- Create new jobs
- Update / delete jobs
- View posted jobs
- View applicants for each job
- Recruiter dashboard with total jobs, total applications, and selected candidates

### General Features
- JWT authentication
- Role-based access control
- Protected routes
- REST API integration
- Responsive UI with reusable React components
- Resume upload support
- Deployment with Render + Vercel

---

## Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Tailwind CSS
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Multer

### Deployment
- Vercel (Frontend)
- Render (Backend)

---

## Project Structure


JobPortal/
│── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
