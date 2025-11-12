# PlateShare

**Project:** PlateShare — Community Food Sharing

**Live site:** [https://b12-a10-plateshare-emonsimply.netlify.app/]

---

## About

PlateShare is a full-stack MERN single-page application that helps community members share surplus food to reduce waste. Donators can post food items with pickup details and expiry dates, and others can browse, request, and collect available items.

---

## Key Features

* User authentication with Firebase (email/password + Google Sign-In).
* Add, update, view, and delete food posts (CRUD) stored in MongoDB.
* Featured foods on the Home page (shows top 6 by quantity).
* Private routes for adding food, viewing details, managing own foods, and requests — protected with Firebase auth.
* Food Request System: users can request foods; the owner can Accept/Reject requests and mark foods as donated.
* Image hosting via imgbb for uploaded food images.
* Smooth UI with animations (framer-motion / AOS) and loading states.

---

## Why this project matters

* Reduces food waste by connecting donors with people in need.
* Simple workflow: Post Food → Request Food → Deliver.
* Focus on accessibility and responsive design for mobile and desktop.

---

## Tech Stack

* Frontend: React (Vite), Tailwind CSS + DaisyUI, Framer Motion, React Router
* Backend: Node.js, Express, MongoDB (Atlas)
* Authentication: Firebase
* Hosting: Client (Netlify), Server (Vercel)


