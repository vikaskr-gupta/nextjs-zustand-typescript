# Nextjs Zustans Typescript 🚀

A learning-focused **Next.js** project built to deeply understand **state management**, **application structure**, and **scalable frontend architecture** using modern tools.

This project demonstrates how to combine:
- **Zustand** for global & async state
- **Context API** for read-only/global configuration
- **Next.js App Router**
- **TypeScript**
- **Tailwind CSS**

---

## 🧠 Goals of This Project

- Understand **Zustand flow** (store → API → UI)
- Separate **business logic**, **state**, and **UI**
- Use **Context API** only where it makes sense (read-only data)
- Follow a **modular and scalable folder structure**
- Practice **clean architecture patterns** in Next.js

---

## 🛠 Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Zustand** (with `persist` & `devtools`)
- **Context API**
- **Fetch API**


```txt

## 📁 Folder Structure


public/
 └── assets/
     └── images

src/
 ├── app/
 │   ├── (modules)/
 │   │   ├── (auth)/
 │   │   │   ├── login/
 │   │   │   │   └── page.tsx
 │   │   │   └── signup/
 │   │   │       └── page.tsx
 │   │   └── home/
 │   │       └── page.tsx
 │   ├── globals.css
 │   ├── layout.tsx
 │   ├── page.tsx
 │   └── providers.tsx
 │
 ├── components/
 │   └── (shared UI components)
 │
 ├── config/
 │   └── env.ts
 │
 ├── context/
 │   └── GlobalContext.tsx
 │
 ├── services/
 │   └── auth.service.ts
 │
 ├── store/
 │   └── useAuthStore.ts
 │
 └── middleware.ts

.env.local
.env.production



🧩 Architecture Overview

1️⃣ Zustand (State Management)

      Handles:
            Login state
            Signup state
            API loading/error/data handling

      Async API logic lives inside the store

      Uses:
            persist → store data in localStorage
            devtools → Redux DevTools support

📍 Location: src/store/useAuthStore.ts


2️⃣ Context API (Read-Only Data)

Used only for:

      Global configuration
      Static or rarely-changing values
      Avoids unnecessary re-renders

📍 Location: src/context/GlobalContext.tsx


3️⃣ Services Layer

      Handles API request logic
      Keeps store clean & readable
      Easy to replace with Axios later

📍 Location: src/services/auth.service.ts


4️⃣ App Router & Route Groups

Uses route groups for clean separation:
      (auth) → authentication-related pages
      (modules) → feature-based pages

Example:

      (auth)/login
      (auth)/signup



🔐 Protected Routes (Middleware-Based)

This project uses Next.js Middleware to protect routes at the edge, before the page loads.

✅ Rules Implemented

      Unauthenticated users
            Can access: /login, /signup
            Redirected to /login when accessing protected pages
      Authenticated users
            Can access all protected routes
            Cannot access /login or /signup
            Automatically redirected to /home

🧠 How It Works

      Auth token is stored in a cookie
      Middleware checks the token on every request
      Redirection happens before rendering

📍 Location: src/middleware.ts


🌱 Environment Variables

Create .env.local:: NEXT_PUBLIC_API_BASE_URL=http://localhost:3076/api
Used via:: src/config/env.ts

▶️ Running the Project

      npm install
      npm run dev

Open:: http://localhost:3000


📌 Key Learning Takeaways

      When to use Zustand vs Context API
      How to implement protected routes correctly
      How middleware improves security & UX
      How to avoid unnecessary API calls
      Clean separation of concerns
      Scalable folder organization
      Real-world Next.js patterns

📈 Future Improvements

      Role-based access control (RBAC)
      Token refresh handling
      Axios with interceptors
      Form validation (Formic / React Hook Form)
      Unit & integration testing
      Better error boundaries

👤 Author
Vikas Kumar Gupta

Frontend Developer
Focused on Next.js, State Management & Clean Architecture