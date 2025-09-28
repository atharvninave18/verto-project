 🛒 ShopVerto

A minimal full-stack e-commerce web application built with **React (Vite)**, **Redux Toolkit**, **Node.js**, and **Express**.
It allows users to browse products, add them to a cart, and simulate checkout.
Includes toast notifications, skeleton loading, and error boundaries.

---
 🚀 Features

* **Frontend (React + Redux Toolkit)**

  * Product listing grid with skeleton loaders
  * Square product cards with hover animations
  * Add to cart with toast notifications
  * Cart modal with quantity updates & product deletion
  * Checkout with toast confirmation
  * Persistent cart using `localStorage`
  * Error boundary for graceful error handling

* **Backend (Node.js + Express)**

  * `/api/products` → returns product list from `data.js`
  * `/api/checkout` → accepts cart data and logs the order
  * Hardcoded product list (no database required)

---

 📂 Project Structure

shop-vertu/
│
├── backend/
│   ├── index.js        # Express server
│   └── data.js         # Dummy product list
│
└── frontend/
    ├── src/
    │   ├── components/   # Header, Footer, CartModal, ProductCard, Spinner, etc.
    │   ├── redux/        # Redux store + slices (cart, products)
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    └── vite.config.js

---

 🛠️ Setup & Run Locally

1. Clone the repository

git clone git@github.com:atharvninave18/verto-project.git
cd verto-project

2. Backend Setup

cd backend
npm install
npm start

Backend runs on 👉 `http://localhost:5001`

3. Frontend Setup

cd frontend
npm install
npm run dev


Frontend runs on 👉 `http://localhost:5173`

---

## 📌 Assumptions & Design Choices

* Cart state is managed fully in **Redux Toolkit** and persisted in `localStorage`.
* No database — products are **hardcoded** inside `data.js`.
* Skeleton loaders and error boundary improve UX during API failures or slow responses.
* Checkout is simulated → logs cart data to backend console.

---

 👨‍💻 Tech Stack

Frontend**: React (Vite), Redux Toolkit, React-Toastify
Backend**: Node.js, Express



