@echo off
echo Starting Web App with Backend...
echo.
echo Starting MongoDB (make sure MongoDB is installed)...
start "MongoDB" mongod
timeout /t 3 >nul

echo.
echo Starting Backend Server...
start "Backend" cmd /k "cd backend && npm run dev"
timeout /t 2 >nul

echo.
echo Starting Frontend Server...
start "Frontend" cmd /k "npm start"

echo.
echo All servers are starting up!
echo - Frontend: http://localhost:3000
echo - Backend: http://localhost:5000
echo - API: http://localhost:5000/api
echo.
echo Press any key to close this window...
pause >nul