# Web App Backend

This is the Node.js backend for the Web App project with MongoDB integration.

## Features

- User authentication (register/login)
- JWT-based authorization
- Password hashing with bcrypt
- Input validation
- Rate limiting
- CORS support
- Security headers with Helmet
- MongoDB integration with Mongoose

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

## Installation

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment variables:
   ```bash
   cp .env.example .env
   ```

4. Update the `.env` file with your configuration:
   - Set your MongoDB connection string
   - Change the JWT secret to a secure random string
   - Update CORS origins if needed

## Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:5000` by default.

## API Endpoints

### Authentication Routes

#### Register User
- **POST** `/api/auth/register`
- **Body:**
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "password": "Password123"
  }
  ```

#### Login User
- **POST** `/api/auth/login`
- **Body:**
  ```json
  {
    "email": "john@example.com",
    "password": "Password123"
  }
  ```

#### Get Current User
- **GET** `/api/auth/me`
- **Headers:** `Authorization: Bearer <token>`

#### Update Profile
- **PUT** `/api/auth/profile`
- **Headers:** `Authorization: Bearer <token>`
- **Body:**
  ```json
  {
    "firstName": "John",
    "lastName": "Doe"
  }
  ```

#### Change Password
- **PUT** `/api/auth/change-password`
- **Headers:** `Authorization: Bearer <token>`
- **Body:**
  ```json
  {
    "currentPassword": "oldPassword",
    "newPassword": "newPassword123"
  }
  ```

### Utility Routes

#### Health Check
- **GET** `/api/health`

## Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   └── authController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── validation.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── auth.js
│   └── server.js
├── .env
├── .env.example
├── package.json
└── README.md
```

## Security Features

- Password hashing with bcrypt (salt rounds: 12)
- JWT tokens with expiration
- Rate limiting for authentication endpoints
- Input validation and sanitization
- CORS protection
- Security headers with Helmet
- Protected routes with authentication middleware

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Server port | 5000 |
| NODE_ENV | Environment mode | development |
| MONGODB_URI | MongoDB connection string | mongodb://localhost:27017/webapp |
| JWT_SECRET | JWT signing secret | (required) |
| JWT_EXPIRE | JWT expiration time | 7d |
| CLIENT_URL | Frontend URL for CORS | http://localhost:3000 |

## Testing

The project includes basic error handling and validation. For production deployment, consider adding:

- Unit tests with Jest
- Integration tests with Supertest
- API documentation with Swagger
- Logging with Winston
- Email verification
- Password reset functionality
- Database backup strategies

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request