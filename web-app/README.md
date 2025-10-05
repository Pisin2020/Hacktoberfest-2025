# Web App with Node.js Backend

A full-stack web application built with React (TypeScript) frontend and Node.js/Express backend with MongoDB authentication.

## 🚀 Features

### Frontend (React + TypeScript)
- Modern React application with TypeScript
- Framer Motion animations
- Tailwind CSS for styling
- User authentication (login/signup)
- Responsive design
- Protected routes

### Backend (Node.js + Express)
- RESTful API with Express.js
- MongoDB database with Mongoose ODM
- JWT-based authentication
- Password hashing with bcrypt
- Input validation and sanitization
- Rate limiting and security headers
- Error handling and logging

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** - Either local installation or MongoDB Atlas account
  - Local: [Download here](https://www.mongodb.com/try/download/community)
  - Cloud: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **npm** (comes with Node.js) or **yarn**

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd web-app
```

### 2. Backend Setup

#### Install Backend Dependencies
```bash
cd backend
npm install
```

#### Configure Environment Variables
```bash
# Copy the example environment file
cp .env.example .env

# Edit the .env file with your configuration
# Update the following variables:
# - MONGODB_URI (your MongoDB connection string)
# - JWT_SECRET (a secure secret key)
```

#### Start MongoDB (if using local installation)
```bash
# Windows
mongod

# macOS/Linux
sudo systemctl start mongod
```

#### Run Backend Development Server
```bash
npm run dev
```
The backend will be available at `http://localhost:5000`

### 3. Frontend Setup

#### Install Frontend Dependencies
```bash
# From the root directory
npm install
```

#### Configure Environment Variables
The frontend is already configured to connect to `http://localhost:5000/api`. If you need to change this, edit `.env.local`:
```bash
REACT_APP_API_URL=http://localhost:5000/api
```

#### Run Frontend Development Server
```bash
npm start
```
The frontend will be available at `http://localhost:3000`

## 🏃‍♂️ Quick Start

### Option 1: Start Both Servers Separately

**Terminal 1 (Backend):**
```bash
cd backend
npm run dev
```

**Terminal 2 (Frontend):**
```bash
npm start
```

### Option 2: Use a Process Manager (Recommended for Development)

Install concurrently to run both servers with one command:
```bash
npm install -g concurrently
```

Then create a start script or run:
```bash
concurrently \"cd backend && npm run dev\" \"npm start\"
```

## 📁 Project Structure

```
web-app/
├── backend/                 # Node.js/Express backend
│   ├── src/
│   │   ├── config/         # Database and configuration
│   │   ├── controllers/    # Route controllers
│   │   ├── middleware/     # Authentication & validation
│   │   ├── models/         # MongoDB models
│   │   ├── routes/         # API routes
│   │   └── server.js       # Express server
│   ├── .env                # Environment variables
│   ├── .env.example        # Environment template
│   └── package.json
├── src/                    # React frontend
│   ├── components/         # React components
│   ├── context/           # React Context (Auth)
│   ├── services/          # API service layer
│   ├── types/             # TypeScript types
│   └── App.tsx
├── public/                # Static assets
├── .env.local             # Frontend environment
└── package.json
```

## 🔌 API Endpoints

### Authentication Routes
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user (protected)
- `PUT /api/auth/profile` - Update user profile (protected)
- `PUT /api/auth/change-password` - Change password (protected)

### Utility Routes
- `GET /api/health` - Health check

## 🔐 Environment Variables

### Backend (.env)
```bash
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/webapp
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=7d
CLIENT_URL=http://localhost:3000
```

### Frontend (.env.local)
```bash
REACT_APP_API_URL=http://localhost:5000/api
```

## 🧪 Testing

### Test Backend API
You can test the backend API using tools like:
- **Postman** - Import the API collection
- **curl** - Command line testing
- **Thunder Client** - VS Code extension

Example test request:
```bash
# Register a new user
curl -X POST http://localhost:5000/api/auth/register \\
  -H \"Content-Type: application/json\" \\
  -d '{
    \"firstName\": \"John\",
    \"lastName\": \"Doe\",
    \"email\": \"john@example.com\",
    \"password\": \"Password123\"
  }'
```

## 🚀 Production Deployment

### Backend Deployment
1. Set environment variables for production
2. Use a process manager like PM2
3. Set up reverse proxy with Nginx
4. Configure SSL certificates
5. Use MongoDB Atlas for database

### Frontend Deployment
1. Build the React app: `npm run build`
2. Deploy to services like Vercel, Netlify, or AWS S3
3. Update API URL for production

## 🔧 Development Tips

### Hot Reloading
- Backend uses `nodemon` for automatic restarts
- Frontend uses React's built-in hot reloading

### Database Management
- Use MongoDB Compass for visual database management
- Consider using MongoDB migrations for schema changes

### Code Quality
- ESLint and Prettier are recommended for code formatting
- Consider adding Husky for git hooks
- TypeScript provides compile-time error checking

## 🐛 Troubleshooting

### Common Issues

1. **Connection Refused Error**
   - Make sure MongoDB is running
   - Check your MONGODB_URI in .env

2. **CORS Errors**
   - Verify CLIENT_URL in backend .env
   - Check if both servers are running

3. **Authentication Issues**
   - Verify JWT_SECRET is set
   - Check token expiration settings

4. **Port Conflicts**
   - Change PORT in backend .env if 5000 is in use
   - Frontend dev server uses 3000 by default

## 📖 Additional Resources

- [React Documentation](https://reactjs.org/docs)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [JWT Documentation](https://jwt.io/)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License.

---

# Original Create React App Documentation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
