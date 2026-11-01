# Event Management API

RESTful API built with Node.js and Express.js for managing events.

## Experiment 4 - FSD Lab

**Name:** [Your Name]  
**Class:** [Your Class]  
**Roll No:** [Your Roll Number]  
**Date:** October 26, 2024

---

## 📋 Features

- Complete CRUD operations for event management
- RESTful architecture following HTTP standards
- JSON request/response handling
- Proper HTTP status codes
- CORS enabled for frontend integration
- Error handling and validation

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)
- Postman (for API testing)

### Installation Steps

1. **Navigate to the project directory:**
   ```bash
   cd event-management-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   npm start
   ```
   
   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

4. **Server will start on:**
   ```
   http://localhost:5000
   ```

---

## 📡 API Endpoints

### Base URL
```
http://localhost:5000
```

### Endpoints Overview

| Method | Endpoint | Description | Status Code |
|--------|----------|-------------|-------------|
| GET | `/api/events` | Get all events | 200 |
| GET | `/api/events/:id` | Get event by ID | 200, 404 |
| POST | `/api/events` | Create new event | 201, 400 |
| PUT | `/api/events/:id` | Update event | 200, 404 |
| DELETE | `/api/events/:id` | Delete event | 200, 404 |

---

## 🔍 Detailed API Documentation

### 1. GET All Events
**Endpoint:** `GET /api/events`

**Response Example:**
```json
{
  "success": true,
  "count": 3,
  "data": [
    {
      "id": 1,
      "name": "Tech Conference 2024",
      "date": "2024-12-15",
      "location": "Convention Center",
      "description": "Annual technology conference",
      "capacity": 500,
      "registered": 234
    }
  ]
}
```

### 2. GET Event by ID
**Endpoint:** `GET /api/events/:id`

**Example:** `GET /api/events/1`

**Response (Success - 200):**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Tech Conference 2024",
    "date": "2024-12-15",
    "location": "Convention Center",
    "description": "Annual technology conference",
    "capacity": 500,
    "registered": 234
  }
}
```

**Response (Not Found - 404):**
```json
{
  "success": false,
  "message": "Event with ID 999 not found"
}
```

### 3. POST Create Event
**Endpoint:** `POST /api/events`

**Request Body:**
```json
{
  "name": "Music Festival 2024",
  "date": "2024-12-20",
  "location": "City Park",
  "description": "Annual music festival",
  "capacity": 1000,
  "registered": 0
}
```

**Response (Success - 201):**
```json
{
  "success": true,
  "message": "Event created successfully",
  "data": {
    "id": 4,
    "name": "Music Festival 2024",
    "date": "2024-12-20",
    "location": "City Park",
    "description": "Annual music festival",
    "capacity": 1000,
    "registered": 0
  }
}
```

**Response (Validation Error - 400):**
```json
{
  "success": false,
  "message": "Missing required fields. Name, date, and location are required"
}
```

### 4. PUT Update Event
**Endpoint:** `PUT /api/events/:id`

**Example:** `PUT /api/events/1`

**Request Body:**
```json
{
  "registered": 250
}
```

**Response (Success - 200):**
```json
{
  "success": true,
  "message": "Event updated successfully",
  "data": {
    "id": 1,
    "name": "Tech Conference 2024",
    "date": "2024-12-15",
    "location": "Convention Center",
    "description": "Annual technology conference",
    "capacity": 500,
    "registered": 250
  }
}
```

### 5. DELETE Event
**Endpoint:** `DELETE /api/events/:id`

**Example:** `DELETE /api/events/1`

**Response (Success - 200):**
```json
{
  "success": true,
  "message": "Event deleted successfully",
  "data": {
    "id": 1,
    "name": "Tech Conference 2024",
    ...
  }
}
```

---

## 🧪 Testing with Postman

### Step 1: Import Collection (Optional)
You can create a Postman collection with all the endpoints for easier testing.

### Step 2: Test Each Endpoint

1. **GET All Events**
   - Method: GET
   - URL: `http://localhost:5000/api/events`
   - Expected Status: 200 OK

2. **GET Event by ID**
   - Method: GET
   - URL: `http://localhost:5000/api/events/1`
   - Expected Status: 200 OK

3. **POST Create Event**
   - Method: POST
   - URL: `http://localhost:5000/api/events`
   - Headers: `Content-Type: application/json`
   - Body (raw JSON):
     ```json
     {
       "name": "New Event",
       "date": "2024-12-25",
       "location": "Venue Name",
       "description": "Event description",
       "capacity": 200,
       "registered": 0
     }
     ```
   - Expected Status: 201 Created

4. **PUT Update Event**
   - Method: PUT
   - URL: `http://localhost:5000/api/events/1`
   - Headers: `Content-Type: application/json`
   - Body (raw JSON):
     ```json
     {
       "registered": 300
     }
     ```
   - Expected Status: 200 OK

5. **DELETE Event**
   - Method: DELETE
   - URL: `http://localhost:5000/api/events/1`
   - Expected Status: 200 OK

6. **Test Error Handling**
   - Try GET with invalid ID: `http://localhost:5000/api/events/999`
   - Expected Status: 404 Not Found

---

## 📊 HTTP Status Codes Used

- **200 OK** - Successful GET, PUT, DELETE
- **201 Created** - Successful POST (new resource created)
- **400 Bad Request** - Invalid request data or missing required fields
- **404 Not Found** - Resource not found
- **500 Internal Server Error** - Server-side error

---

## 🔗 Integration with Frontend

To connect this API with your React frontend:

1. Update the API base URL in your frontend's `api.js` or service file:
   ```javascript
   const API_BASE_URL = 'http://localhost:5000/api';
   ```

2. Make sure the server is running before starting the frontend

3. The CORS middleware is already configured to accept requests from any origin

---

## 📝 Key Concepts Demonstrated

- ✅ RESTful API architecture
- ✅ Express.js server setup
- ✅ Middleware configuration (CORS, JSON parsing)
- ✅ HTTP methods (GET, POST, PUT, DELETE)
- ✅ Route parameters (`req.params`)
- ✅ Request body handling (`req.body`)
- ✅ JSON responses (`res.json()`)
- ✅ HTTP status codes
- ✅ Error handling and validation
- ✅ CRUD operations

---

## 🛠️ Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **CORS** - Cross-Origin Resource Sharing
- **Nodemon** - Development auto-reload

---

## 📚 Theory Questions Covered

1. **What is an API?** - Application Programming Interface for communication between systems
2. **What is REST?** - Representational State Transfer architectural style
3. **HTTP Methods** - GET (retrieve), POST (create), PUT (update), DELETE (remove)
4. **Express.js** - Minimalist web framework for Node.js
5. **Routing** - Mapping URLs to handler functions
6. **Middleware** - Functions that process requests before reaching routes
7. **Status Codes** - Numeric codes indicating request outcome

---

## 👨‍💻 Author

[Your Name]  
[Your Roll Number]

---

## 📄 License

This project is created for educational purposes as part of FSD Lab Experiment 4.
