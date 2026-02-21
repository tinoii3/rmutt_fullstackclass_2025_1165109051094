สมาชิกกลุ่ม
- 116510905109-4 กฤษนัย บุญนาค
- 116510905110-2 ณภัทร พิทักษ์ธรรม 
- 116510905113-6 ปัณณวัชร สุขเกษม
- 116510905037-7 สมบูรณ์ ข้องหลิม
- 116510905004-7 พลอยวารินทร์ เพ็งอ้น
- 116510905047-6 นิตยา สายราช


# Hotel Booking System

Full-Stack Hotel Booking Application built with Angular (Frontend) and Express + Prisma (Backend) using a Monorepo architecture.

---

## 🏗 Architecture Overview

project-root/
│
├── apps/
│   ├── frontend/      # Angular
│   └── backend/       # Express
│
├── packages/
│   └── shared/        # Shared DTOs / Types
│
├── docs/              # Documentation
└── README.md

---

## 🚀 Tech Stack

### Frontend
- Angular 21
- Bootstrap 5
- SweetAlert2
- Day.js
- FontAwesome
- Lucide Icons

### Backend
- Express 5
- Prisma ORM
- PostgreSQL (Supabase)
- JSON Web Token (JWT)
- CORS
- dotenv

### Database
- Supabase PostgreSQL

---

## 🧠 Architecture Pattern

### Frontend Structure

frontend/src/app/

- core/           → Singleton services (AuthService, ApiService)
- shared/         → Shared components, pipes, utilities
- features/       → Feature-based modules (booking, auth, room, etc.)
- layouts/        → Layout components (MainLayout, AuthLayout)
- guards/         → Route Guards (AuthGuard)
- interceptors/   → HTTP interceptors (JWT, Error handler)
- app.routes.ts   → Route definitions

### Backend Structure

backend/src/

- config/         → Environment config, Prisma setup
- modules/        → Feature-based modules (auth, booking, room)
- middlewares/    → Express middlewares
- utils/          → Helper functions
- types/          → Custom TypeScript types
- app.ts          → Express app setup
- server.ts       → Entry point

---

## 🌿 Branch Strategy

- main     → Production-ready branch
- dev      → Integration branch
- feature/* → Feature development branches

Example:
feature/auth-module  
feature/booking-flow  

---

## 📦 Naming Convention

- camelCase for variables and functions
- PascalCase for classes and components
- kebab-case for file names

---

## 🛠 Installation Guide

### 1️⃣ Clone Repository

git clone <repo-url>
cd project-root

---

## 🖥 Run Frontend

cd apps/frontend
npm install
npm start

Runs on:
http://localhost:4200

Proxy is configured via:
proxy.conf.json

---

## ⚙ Run Backend

cd apps/backend
npm install
npm run dev

Runs on:
http://localhost:3000

---

## 🗄 Environment Variables (Backend)

Create .env file inside apps/backend:

DATABASE_URL=
JWT_SECRET=

---

## 📁 Shared Package

packages/shared/

Contains:
- DTOs
- Shared interfaces
- Common types

Used by both frontend and backend to ensure type safety.

---

## 📚 Documentation

Additional documentation can be found inside:
docs/
