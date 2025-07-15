# 💼 Job Portal App

A full-stack **Job Portal Application** where users can register, log in, apply for jobs, view their applications, and recruiters can post job listings.

---

## 🚀 Features

### 👤 User Features:

- Register and login (JWT-based)
- Apply for jobs
- View applied jobs
- Upload resume and manage profile
- Save jobs for later

### 🧑‍💼 Recruiter Features:

- Create recruiter profile
- Post jobs
- View applicants

### ⚙️ Admin (Optional):

- Manage users and job posts

---

## 🛠️ Tech Stack

### 🔷 Frontend:

- React.js
- React Router
- Tailwind CSS
- Axios
- Redux Toolkit (optional)
- Toast Notifications (e.g., Sonner)

### 🔶 Backend:

- Node.js
- Express.js
- MongoDB & Mongoose
- Multer (for file upload)
- JWT (Authentication)
- Cloudinary (Profile/resume upload)

---

## 📁 Project Structure

/client
└── src/
├── components/
├── pages/
├── redux/
└── App.jsx

/server
├── controllers/
├── models/
├── routes/
├── middleware/
└── index.js

---

## 📦 Installation

### 🖥️ Backend:

```bash
cd server
npm install
# Set environment variables in .env

###🌐 Frontend:
cd client
npm install
npm run dev


🔐 .env Example (Backend)
PORT=5500
MONGODB_URI=mongodb://localhost:27017/jobportal
JWT_SECRET=yourSecretKey
CLOUDINARY_CLOUD_NAME=yourCloudName
CLOUDINARY_API_KEY=yourAPIKey
CLOUDINARY_API_SECRET=yourAPISecret
```
📷 Screenshots
![alt text](<Screenshot 2025-07-15 173725.png>) ![alt text](<Screenshot 2025-07-15 173742.png>) ![alt text](<Screenshot 2025-07-15 173822.png>)


---

### ✅ Optional Enhancements to Add

- Job filters (location, salary, type)
- Pagination on job listings
- Resume preview
- Admin dashboard
- Dark mode

---

Let me know if you want me to generate this as a downloadable `.md` file or auto-fill it with your GitHub repo URL and tech choices.
