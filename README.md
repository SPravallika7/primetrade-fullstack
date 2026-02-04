# PrimeTrade Full Stack Assignment

## Tech Stack
Frontend: React + Bootstrap  
Backend: Node.js + Express  
Database: MongoDB Atlas  
Auth: JWT  


## Setup Instructions
### Backend
cd backend
npm install

Create .env:
PORT=5000
NODE_ENV=development
MONGO_URI=YOUR_MONGO_URI
JWT_SECRET=YOUR_SECRET
JWT_EXPIRES_IN=7d

Run:
npm run dev
Frontend
cd frontend
npm install
npm start
Runs on:
http://localhost:3000

Postman
Import:
postman/primetrade.postman_collection.json
Register user → Login → Copy token → Use for Tasks.

Demo Credentials
Create any user via Register API.

Example:
Email: ganesh@gmail.com
Password: ganesh@123

Scaling for Production
Dockerize frontend/backend

Use Nginx reverse proxy

Environment variables via secrets manager

MongoDB indexes on email + userId

Redis caching for tasks

JWT refresh tokens

Load balancer (AWS ALB)

CI/CD GitHub Actions

CORS whitelist

Rate limiting