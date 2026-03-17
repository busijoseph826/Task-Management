# 📝 Task Management Application

A full-stack Task Management Application built using Spring Boot and React. This application allows users to create, view, update, and delete tasks with real-time UI updates.

---

## 🚀 Tech Stack

### Backend

* Spring Boot
* Spring Data JPA
* H2 Database
* REST APIs

### Frontend

* React (Vite)
* JavaScript (ES6+)
* HTML & CSS

---

## ✨ Features

* Create a new task
* View all tasks
* Update task status (OPEN, IN_PROGRESS, DONE)
* Delete a task
* Priority selection (LOW, MEDIUM, HIGH)
* Real-time UI updates
* Clean and responsive UI

---

## 🏗️ Project Structure

### Backend (Spring Boot)

```
com.task_management_app
│
├── controller
├── service
├── repository
├── model
├── exception
```

### Frontend (React)

```
src
│
├── components
│     ├── TaskForm.jsx
│     ├── TaskList.jsx
│
├── services
│     ├── taskService.js
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ API Endpoints

| Method | Endpoint    | Description       |
| ------ | ----------- | ----------------- |
| POST   | /tasks      | Create a new task |
| GET    | /tasks      | Get all tasks     |
| GET    | /tasks/{id} | Get task by ID    |
| PUT    | /tasks/{id} | Update task       |
| DELETE | /tasks/{id} | Delete task       |

---

## 📦 Task Model

```
id: Long
title: String
description: String
status: OPEN / IN_PROGRESS / DONE
priority: LOW / MEDIUM / HIGH
dueDate: LocalDate
createdAt: LocalDateTime
updatedAt: LocalDateTime
```

---

## ▶️ How to Run the Project

### 1️⃣ Backend (Spring Boot)

```
mvn spring-boot:run
```

Runs on:

```
http://localhost:8080
```

---

### 2️⃣ Frontend (React)

```
npm install
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

## 🔗 Integration

The frontend communicates with the backend via REST APIs:

```
http://localhost:8080/tasks
```

---

## ⚠️ Important Notes

* Ensure backend is running before frontend
* Enable CORS in backend:

```
@CrossOrigin(origins = "http://localhost:5173")
```

---

## 📸 Screenshots

<img width="1837" height="682" alt="image" src="https://github.com/user-attachments/assets/ef68d49e-4ae5-4911-b4db-9ba3432c309a" />
<img width="1798" height="430" alt="image" src="https://github.com/user-attachments/assets/6b2ace04-7824-43e3-a922-e12f04e675f7" />



---

## 🚀 Future Enhancements

* User Authentication (JWT)
* Task filtering (by status/priority)
* Pagination
* Edit task details
* UI improvements (Material UI / Tailwind)
* Deployment (Docker / Cloud)

---

## 👨‍💻 Author

Joseph

---

## ⭐ Acknowledgements

This project was built as part of learning full-stack development using Spring Boot and React.
