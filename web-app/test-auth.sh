#!/bin/bash

echo "🚀 Testing Full-Stack Authentication System"
echo "==========================================="
echo

# Test backend health
echo "1. Testing Backend Health Endpoint..."
response=$(curl -s -w "\n%{http_code}" http://localhost:5000/api/health)
if [[ $response == *"200"* ]]; then
    echo "✅ Backend is running successfully!"
else
    echo "❌ Backend health check failed"
    echo "Response: $response"
fi

echo

# Test user registration
echo "2. Testing User Registration..."
register_response=$(curl -s -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User", 
    "email": "test@example.com",
    "password": "TestPassword123"
  }' \
  -w "\n%{http_code}")

if [[ $register_response == *"201"* ]] || [[ $register_response == *"400"* ]]; then
    echo "✅ Registration endpoint is working!"
    if [[ $register_response == *"400"* ]]; then
        echo "ℹ️  User might already exist (this is expected on second run)"
    fi
else
    echo "❌ Registration failed"
    echo "Response: $register_response"
fi

echo

# Test user login
echo "3. Testing User Login..."
login_response=$(curl -s -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "TestPassword123"
  }' \
  -w "\n%{http_code}")

if [[ $login_response == *"200"* ]]; then
    echo "✅ Login endpoint is working!"
    # Extract token for further testing
    token=$(echo "$login_response" | grep -o '"token":"[^"]*"' | cut -d'"' -f4)
    if [[ -n "$token" ]]; then
        echo "✅ JWT token generated successfully!"
        
        # Test protected endpoint
        echo
        echo "4. Testing Protected Endpoint..."
        profile_response=$(curl -s -X GET http://localhost:5000/api/auth/me \
          -H "Authorization: Bearer $token" \
          -w "\n%{http_code}")
        
        if [[ $profile_response == *"200"* ]]; then
            echo "✅ Protected endpoint working with JWT!"
        else
            echo "❌ Protected endpoint failed"
            echo "Response: $profile_response"
        fi
    fi
elif [[ $login_response == *"401"* ]]; then
    echo "⚠️  Login failed - check if user exists or credentials are correct"
    echo "Response: $login_response"
else
    echo "❌ Login endpoint failed"
    echo "Response: $login_response"
fi

echo
echo "==========================================="
echo "🏁 Test Summary:"
echo "- Backend Server: http://localhost:5000"
echo "- Frontend App: http://localhost:3001"
echo "- MongoDB: Check connection in server logs"
echo
echo "📝 Manual Testing:"
echo "1. Open http://localhost:3001 in your browser"
echo "2. Try registering a new user"
echo "3. Try logging in with the registered user"
echo "4. Check if authentication state persists"
echo
echo "🛠️  If tests fail:"
echo "- Ensure MongoDB is running"
echo "- Check backend server is running on port 5000"
echo "- Verify environment variables in backend/.env"
echo "==========================================="