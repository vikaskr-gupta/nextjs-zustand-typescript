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

---

## 📁 Folder Structure

```txt
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
 │   └── page.tsx
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
 └── store/
     └── useAuthStore.ts

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


4️⃣ App Router & Modules

      Uses route groups (modules) and (auth)
      Clean separation of features
      Easy to scale with more modules

Example:

      (auth)/login
      (auth)/signup


🌱 Environment Variables

Create .env.local:: NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api
Used via:: src/config/env.ts

▶️ Running the Project

      npm install
      npm run dev

Open:: http://localhost:3000


📌 Key Learning Takeaways

      When to use Zustand vs Context
      How to avoid unnecessary API calls
      Clean separation of concerns
      Scalable folder organization
      Real-world Next.js patterns

📈 Future Improvements

      Protected routes
      Middleware-based auth
      Role-based access
      Axios + interceptors
      Form validation (Zod / React Hook Form)
      Unit testing

👤 Author
Vikas Kumar Gupta

Frontend Developer
Focused on Next.js, State Management & Clean Architecture