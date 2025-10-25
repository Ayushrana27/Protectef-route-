🔐 JWT Protected Routes with Node.js & Express.js

🚀 Project Overview

This project demonstrates how to implement secure protected routes in a Node.js and Express.js backend using JWT (JSON Web Token) authentication.

Features include:

User authentication via JWT

Middleware for JWT verification

Protected API routes that require valid tokens

Clear error messages for unauthorized requests

⚙️ Features

🛡️ JWT-based Authentication

🔐 Protected Routes accessible only with a valid token

❌ Proper error handling for missing, invalid, or expired tokens

⚡ Lightweight, fast, and easy to extend

📁 Project Structure
jwt-protected-routes/
│
├── server.js                 # Main entry point
├── middleware/
│   └── authMiddleware.js     # JWT verification middleware
├── routes/
│   └── protectedRoutes.js    # Example protected route
├── package.json
└── .env                      # JWT secret key

🛠️ Tech Stack

Node.js – Runtime environment

Express.js – Web framework

jsonwebtoken – JWT creation & verification

dotenv – Environment variable management

⚡ Getting Started
1️⃣ Clone the repository
git clone https://github.com/your-username/jwt-protected-routes.git
cd jwt-protected-routes

2️⃣ Install dependencies
npm install

3️⃣ Create .env file
JWT_SECRET=your_super_secret_key

4️⃣ Run the server
node server.js


Server runs on http://localhost:5000

🧪 Testing the API
🔑 Login to get a JWT

POST /login
Request Body:

{
  "username": "testuser",
  "password": "password123"
}


Response:

{
  "message": "Login successful",
  "token": "<JWT_TOKEN>"
}

🔐 Access Protected Route

GET /api/dashboard
Add header:

Authorization: Bearer <JWT_TOKEN>


✅ Response:

{
  "message": "Welcome testuser! You have accessed a protected route."
}


❌ Unauthorized Response:

{
  "message": "No token provided"
}


or

{
  "message": "Invalid or expired token"
}

🌱 Example User
Username	Password
testuser	password123
📌 Future Enhancements

Integrate database (MongoDB/MySQL) for real users

Add user registration & logout functionality

Include role-based access control (Admin/User/Moderator)

Refresh tokens for extended sessions

👨‍💻 Author

Ayush Rana – Building secure and modern backend applications with Node.js.
