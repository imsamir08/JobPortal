# 💼 React Job Portal

A modern **Job Portal** built with **React.js** and **Tailwind CSS** to demonstrate core and advanced React concepts through a real-world application.

This project is designed for learning React architecture, component design, state management, routing, reusable UI, and scalable folder organization.

---

# 📌 Features

### Candidate Features

* Browse all available jobs
* Search jobs by title or company
* Filter jobs by location and job type
* View detailed job information
* Save and unsave jobs
* Apply for jobs using a modal form
* Dashboard with job statistics
* Responsive UI for desktop and mobile

### React Concepts Demonstrated

* Functional Components
* Component Reusability
* JSX
* Props
* State Management (`useState`)
* Side Effects (`useEffect`)
* Memoization (`useMemo`)
* Context API (`useContext`)
* Custom Hooks
* React Router
* Conditional Rendering
* List Rendering
* Controlled Forms
* Local Storage
* Dynamic Routing
* Global State Management

---

# 🏗️ Project Structure

```text
src/
│
├── assets/
│
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   ├── jobs/
│   │   ├── SearchBar.jsx
│   │   ├── JobFilters.jsx
│   │   ├── JobList.jsx
│   │   ├── JobCard.jsx
│   │   └── ApplyModal.jsx
│   │
│   └── dashboard/
│       └── StatsCard.jsx
│
├── context/
│   └── SavedJobsContext.jsx
│
├── hooks/
│   └── useLocalStorage.js
│
├── pages/
│   ├── Home.jsx
│   ├── Jobs.jsx
│   ├── JobDetails.jsx
│   ├── SavedJobs.jsx
│   └── Dashboard.jsx
│
├── routes/
│   └── AppRoutes.jsx
│
├── utils/
│   └── filterJobs.js
│
├── data/
│   └── jobsData.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# ⚛️ React Architecture

```text
App
│
└── BrowserRouter
     │
     └── AppRoutes
          │
          ├── Home
          ├── Jobs
          ├── Job Details
          ├── Saved Jobs
          └── Dashboard
```

---

# 📂 Component Flow

```text
Jobs Page

SearchBar
      │
      ▼
useState()

JobFilters
      │
      ▼
Filter Logic
      │
      ▼
Filtered Jobs
      │
      ▼
JobList
      │
      ▼
JobCard
```

---

# 🔄 Data Flow

```text
jobsData.js
      │
      ▼
Jobs.jsx
      │
      ▼
Filter Logic
      │
      ▼
JobList
      │
      ▼
JobCard
```

---

# 🧠 State Management

| State            | Purpose                  |
| ---------------- | ------------------------ |
| searchText       | Stores search keyword    |
| selectedLocation | Selected location filter |
| selectedType     | Selected job type        |
| savedJobs        | Stores bookmarked jobs   |
| isModalOpen      | Controls Apply modal     |
| applicantName    | Stores applicant name    |

---

# 🛠️ React Hooks Used

### useState

Used for:

* Search input
* Filters
* Modal visibility
* Form values

### useEffect

Used for:

* Synchronizing Local Storage
* Side effects
* Data loading (API-ready structure)

### useMemo

Used for:

* Optimizing filtered job calculations

### useContext

Used for:

* Global Saved Jobs state

### Custom Hook

* `useLocalStorage()`

---

# 🧩 Reusable Components

* Navbar
* Footer
* SearchBar
* JobFilters
* JobCard
* JobList
* ApplyModal
* StatsCard

Reusable components improve maintainability, reduce duplicate code, and make the UI easier to extend.

---

# 🔍 Search & Filter Workflow

```text
User Types
      │
      ▼
SearchBar
      │
      ▼
searchText State Updates
      │
      ▼
Filter Function Executes
      │
      ▼
Filtered Jobs
      │
      ▼
JobList Re-renders
```

---

# 💾 Save Job Workflow

```text
Click Save
      │
      ▼
Context Updates
      │
      ▼
Local Storage Updates
      │
      ▼
Navbar Count Updates
      │
      ▼
Saved Jobs Page Updates
      │
      ▼
Dashboard Updates
```

---

# 📄 Job Details Flow

```text
Click Job
      │
      ▼
Dynamic Route (/jobs/:id)
      │
      ▼
useParams()
      │
      ▼
Find Job
      │
      ▼
Display Details
```

---

# 🎨 UI Highlights

* Clean and modern interface
* Responsive layout
* Tailwind CSS styling
* Reusable cards
* Interactive buttons
* Filter panel
* Dashboard widgets
* Modal-based job application
* Mobile-friendly design

---

# 📚 Learning Outcomes

After exploring this project, you will understand:

* React project structure
* Component-based architecture
* Parent-child communication
* Props and state
* Global state with Context API
* Routing using React Router
* Dynamic rendering
* Form handling
* Local Storage integration
* Performance optimization using `useMemo`
* Writing reusable and maintainable React components

---

# 🚀 Future Enhancements

* Authentication (Login / Register)
* JWT integration
* Backend API integration
* Database connectivity
* Pagination
* Infinite scrolling
* Dark mode
* Company profiles
* Resume upload
* Notifications
* Admin dashboard
* Recruiter portal
* Job posting system
* Bookmark synchronization
* Email notifications
* AI-powered job recommendations

---

# 🛠️ Tech Stack

| Technology        | Purpose                 |
| ----------------- | ----------------------- |
| React.js          | Frontend Library        |
| JavaScript (ES6+) | Programming Language    |
| Tailwind CSS      | Styling                 |
| React Router DOM  | Routing                 |
| Context API       | Global State            |
| Local Storage     | Client-side Persistence |

---

# 📈 Scalability

The project follows a modular architecture that allows developers to:

* Add new pages easily
* Introduce backend APIs with minimal changes
* Reuse UI components
* Scale to larger applications
* Improve performance through memoization
* Maintain clean and organized code

---

# 👨‍💻 Author

**Samir Kumar**

AI/ML Engineer | Full Stack Developer

**Tech Stack:** React.js • JavaScript • Node.js • Express.js • MongoDB • Python • FastAPI • SQL • Machine Learning • RAG • LLM Integration

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub and sharing it with others.

Happy Coding! 🚀
