PrimeTrade Full Stack Assignment
 Tech Stack:

Frontend
-> React
-> Bootstrap
-> Axios

Backend
-> Node.js
-> Express
-> Database

MongoDB Atlas

Authentication
-> JWT (JSON Web Tokens)

Project Structure
primetrade-fullstack/
│
├── backend/
├── frontend/
├── postman/
│   └── primetrade.postman_collection.json
└── README.md

 Setup Instructions
Backend:
cd backend
npm install

Create .env file:
PORT=5000
NODE_ENV=development
MONGO_URI=YOUR_MONGODB_URI
JWT_SECRET=YOUR_SECRET
JWT_EXPIRES_IN=7d


Run backend:
npm run dev


Server runs on:
http://localhost:5000

Frontend
cd frontend
npm install
npm start


Runs on:
http://localhost:3000

API Testing (Postman)

Import:
postman/primetrade.postman_collection.json

Flow:
Register User
Login → copy JWT token
Paste token in Authorization tab (Bearer Token)
Access Tasks + Profile APIs

Demo Credentials

You can register any user.

Example:
Email: ganesh@gmail.com
Password: ganesh@123

''' Mongo Atlas may fail on some networks.
Use local Mongo if needed. '''


How I Would Scale This for Production:
-> Dockerize frontend & backend

-> Nginx reverse proxy

-> Environment variables via AWS Secrets Manager

-> MongoDB indexing (email, userId)

-> Redis caching for tasks

-> JWT refresh tokens

-> AWS ALB Load Balancer

-> CI/CD with GitHub Actions

-> Strict CORS whitelist

-> Rate limiting + Helmet security middleware