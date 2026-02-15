# Leave Management System

A full-stack Leave Management System built using:

- Frontend: React (Vite) + TailwindCSS
- Backend: Node.js + Express
- Database: MongoDB
- Authentication: JWT (HttpOnly Cookies)

---

## Overview

This system enables employees to apply for leave and allows admins to manage and approve requests with role-based access control.

---

## Employee Features

- Apply for leave
- View leave history
- View leave statistics (Approved / Pending / Rejected)

---

## Admin Features

- View all registered users
- Approve / Reject leave requests
- Filter leaves by status & department
- View dashboard statistics
- View department-wise analytics

---

## Setup Instructions

### Clone Repository

```bash

git clone https://github.com/rupeshkumargupta5532/Penthara-Assignment-1-LMS-Leave-Mgmt.-System-
```

### Backend Setup

```bash
cd backend
npm install
```

### Create a .env file and Copy paste the below details
```bash
MONGO_URI = mongodb://localhost:27017/LMS
PORT = 8000
JWT_SECRET = somesecretkey-penthara-technologies
JWT_REFRESH_SECRET = somerefreshtokenkeys-penthara-technologies

npm run dev
```

### Frontend Setup

```bash

cd frontend
npm install
npm run dev


```

## Screenshots

### Register Page

<img src="https://github.com/rupeshkumargupta5532/Penthara-Assignment-1-LMS-Leave-Mgmt.-System-/blob/main/frontend/src/assets/Register.png" width="700" />

### Employee Dashboard

<img src="https://github.com/rupeshkumargupta5532/Penthara-Assignment-1-LMS-Leave-Mgmt.-System-/blob/main/frontend/src/assets/ApplyLeave.png" width="700" />

### Admin Dashboard

<img src="https://github.com/rupeshkumargupta5532/Penthara-Assignment-1-LMS-Leave-Mgmt.-System-/blob/main/frontend/src/assets/AdminDashboard-1.png" width="700" />

<img src="https://github.com/rupeshkumargupta5532/Penthara-Assignment-1-LMS-Leave-Mgmt.-System-/blob/main/frontend/src/assets/AdminDashboard-2.png" width="700" />
