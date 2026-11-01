# Experiment - 4
# Development of RESTful APIs using Node.js and Express.js and Testing using Postman

**Name:** [Your Name]  
**Class:** [Your Class]  
**Roll No:** [Your Roll Number]  
**Date:** November 1, 2024

---

## Aim

To develop and test RESTful APIs using Node.js and Express.js and understand HTTP methods, request and response handling, routing, status codes, and API testing using Postman.

---

## Problem Statement

Develop a RESTful API for an **Event Management System** using Node.js and Express.js. The API should allow users to perform CRUD (Create, Read, Update, Delete) operations on event information. The developed APIs must be tested using Postman to verify their functionality, request parameters, responses, and HTTP status codes.

The application demonstrates the following concepts:
- Understanding REST architecture and RESTful APIs
- Creating a backend server using Node.js and Express.js
- Defining API routes and handling HTTP requests
- Implementing CRUD operations on event data
- Using HTTP methods such as GET, POST, PUT, and DELETE
- Handling request bodies and route parameters
- Sending appropriate HTTP status codes and JSON responses
- Testing RESTful APIs using Postman
- Integrating the API with a frontend application

---

## Theory Questions

### 1. What is an API?

**API (Application Programming Interface)** is a set of rules and protocols that allows different software applications to communicate with each other. It defines the methods and data formats that applications can use to request and exchange information. APIs act as intermediaries between different software systems, enabling them to interact without knowing the internal implementation details of each other.

### 2. What is a RESTful API?

**RESTful API** is an API that follows the principles of REST (Representational State Transfer) architecture. It uses standard HTTP methods and is designed around resources (data entities) that are accessed via unique URLs. RESTful APIs are stateless, meaning each request contains all the information needed to process it, and they typically use JSON for data exchange.

### 3. What are the main principles of REST architecture?

The main principles of REST architecture are:

1. **Client-Server Architecture**: Separation of concerns between the client (user interface) and server (data storage)
2. **Stateless**: Each request from client to server must contain all information needed; no session state is stored on the server
3. **Cacheable**: Responses can be marked as cacheable or non-cacheable to improve performance
4. **Uniform Interface**: Consistent way of interacting with resources using standard HTTP methods
5. **Layered System**: Architecture can be composed of multiple layers, each with specific functionality
6. **Resource-Based**: Everything is a resource identified by URIs (Uniform Resource Identifiers)

### 4. What are HTTP methods? Explain GET, POST, PUT, and DELETE.

**HTTP methods** are standard operations that define the action to be performed on resources:

- **GET**: Retrieves data from the server. Used to read/fetch resources without modifying them. Example: `GET /api/events` fetches all events.

- **POST**: Sends data to the server to create a new resource. The request body contains the data for the new resource. Example: `POST /api/events` creates a new event.

- **PUT**: Updates an existing resource on the server. The request body contains the updated data. Example: `PUT /api/events/1` updates event with ID 1.

- **DELETE**: Removes a resource from the server. Example: `DELETE /api/events/1` deletes event with ID 1.

### 5. What is the purpose of Express.js in backend development?

**Express.js** is a minimal and flexible Node.js web application framework that provides:

- **Simplified routing**: Easy definition of routes and request handlers
- **Middleware support**: Functions that can process requests before they reach route handlers
- **HTTP utility methods**: Built-in methods for handling requests and responses
- **Template engine integration**: Support for rendering dynamic content
- **Robust API development**: Tools for building RESTful APIs quickly
- **Performance**: Lightweight and fast framework with minimal overhead

Express.js reduces the complexity of building web servers and APIs with Node.js by providing a clean, intuitive API.

### 6. What is routing in Express.js?

**Routing** in Express.js refers to defining how an application responds to client requests at specific endpoints (URLs) and HTTP methods. A route consists of:

- **HTTP Method**: GET, POST, PUT, DELETE, etc.
- **Path/URL**: The endpoint like `/api/events` or `/api/events/:id`
- **Handler Function**: The callback function that executes when the route is matched

Example:
```javascript
app.get('/api/events', (req, res) => {
  // Handler code
});
```

### 7. What is the purpose of req and res in Express.js?

- **req (Request object)**: Represents the HTTP request and contains information about the request such as:
  - URL parameters (`req.params`)
  - Query strings (`req.query`)
  - Request body (`req.body`)
  - HTTP headers (`req.headers`)
  - Request method (`req.method`)

- **res (Response object)**: Represents the HTTP response that Express sends back to the client. It provides methods like:
  - `res.json()`: Send JSON response
  - `res.status()`: Set HTTP status code
  - `res.send()`: Send response data
  - `res.redirect()`: Redirect to another route

### 8. What is the purpose of req.params and req.body?

- **req.params**: Contains route parameters from the URL path. Used to extract dynamic values from the URL.
  
  Example: For route `/api/events/:id` and URL `/api/events/5`
  ```javascript
  req.params.id // returns "5"
  ```

- **req.body**: Contains data sent in the request body, typically from POST or PUT requests. Used to receive data from the client.
  
  Example: For POST request with JSON body:
  ```javascript
  req.body.name // returns the name field from the request body
  ```

### 9. What is JSON, and why is it commonly used in APIs?

**JSON (JavaScript Object Notation)** is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate.

JSON is commonly used in APIs because:
- **Language-independent**: Can be used with any programming language
- **Lightweight**: Minimal syntax overhead compared to XML
- **Easy to parse**: Native support in JavaScript and libraries available for all languages
- **Human-readable**: Simple structure with key-value pairs
- **Structured data**: Supports nested objects and arrays

Example:
```json
{
  "id": 1,
  "name": "Tech Conference",
  "date": "2024-12-15"
}
```

### 10. What are HTTP status codes? Explain 200, 201, 400, 404, and 500.

**HTTP status codes** are three-digit numbers returned by the server to indicate the result of a client's request:

- **200 OK**: Request succeeded. Used for successful GET, PUT, or DELETE operations.

- **201 Created**: Request succeeded and a new resource was created. Used for successful POST operations.

- **400 Bad Request**: The request was invalid or malformed. Client sent incorrect data or missing required fields.

- **404 Not Found**: The requested resource does not exist. The URL or resource ID is not found on the server.

- **500 Internal Server Error**: The server encountered an unexpected error. Something went wrong on the server side.

### 11. What is Postman, and why is it used for API testing?

**Postman** is a popular API development and testing tool that allows developers to:

- **Send HTTP requests**: Test APIs by sending GET, POST, PUT, DELETE requests
- **Inspect responses**: View status codes, headers, and response bodies
- **Create collections**: Organize and save API requests for reuse
- **Test automation**: Write test scripts to validate API responses
- **Environment variables**: Manage different configurations (dev, staging, production)
- **Documentation**: Generate API documentation automatically
- **Collaboration**: Share API collections with team members

Postman simplifies API testing by providing a user-friendly interface instead of writing code or using command-line tools.

### 12. What is the purpose of the request body and headers in Postman?

- **Request Body**: Contains the data being sent to the server, typically for POST and PUT requests. The body can be in various formats:
  - JSON (most common for APIs)
  - Form data
  - XML
  - Raw text
  
  Example: Sending event data to create a new event

- **Request Headers**: Provide additional information about the request such as:
  - `Content-Type`: Specifies the format of the request body (e.g., `application/json`)
  - `Authorization`: Contains authentication tokens
  - `Accept`: Specifies the expected response format
  
  Headers help the server understand how to process the request.

### 13. What is CRUD, and how is it implemented using RESTful APIs?

**CRUD** stands for Create, Read, Update, Delete - the four basic operations for persistent storage:

| Operation | HTTP Method | Example Endpoint | Purpose |
|-----------|-------------|------------------|---------|
| **Create** | POST | `POST /api/events` | Create new event |
| **Read** | GET | `GET /api/events` or `GET /api/events/:id` | Retrieve events |
| **Update** | PUT | `PUT /api/events/:id` | Update existing event |
| **Delete** | DELETE | `DELETE /api/events/:id` | Delete event |

RESTful APIs map CRUD operations to HTTP methods, making it intuitive and standardized.

### 14. What is middleware in Express.js?

**Middleware** are functions that have access to the request object (`req`), response object (`res`), and the next middleware function in the application's request-response cycle. They can:

- Execute any code
- Modify the request and response objects
- End the request-response cycle
- Call the next middleware in the stack

Common middleware examples:
- `express.json()`: Parses incoming JSON request bodies
- `cors()`: Enables Cross-Origin Resource Sharing
- Custom authentication middleware
- Error handling middleware

Middleware is executed in the order it's defined:
```javascript
app.use(express.json()); // Parses JSON first
app.use(cors()); // Then enables CORS
```

---

## Code Implementation

### 1. Creating an Express Server

```javascript
// Import required modules
const express = require('express');
const cors = require('cors');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
```

### 2. Configuring Middleware using express.json()

```javascript
// Middleware Configuration
app.use(cors()); // Enable CORS for frontend communication
app.use(express.json()); // Parse JSON request bodies
```

**Purpose**: 
- `express.json()` parses incoming requests with JSON payloads
- `cors()` enables Cross-Origin Resource Sharing for frontend integration

### 3. Defining RESTful API Routes

```javascript
// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: "Welcome to Event Management API",
    version: "1.0.0",
    endpoints: {
      "GET /api/events": "Get all events",
      "GET /api/events/:id": "Get event by ID",
      "POST /api/events": "Create new event",
      "PUT /api/events/:id": "Update event by ID",
      "DELETE /api/events/:id": "Delete event by ID"
    }
  });
});
```

### 4. Implementing GET Operations to Retrieve Events

#### Get All Events

```javascript
// GET all events
app.get('/api/events', (req, res) => {
  try {
    res.status(200).json({
      success: true,
      count: events.length,
      data: events
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error while fetching events",
      error: error.message
    });
  }
});
```

#### Get Event by ID

```javascript
// GET single event by ID
app.get('/api/events/:id', (req, res) => {
  try {
    const eventId = parseInt(req.params.id);

    // Validate ID is a number
    if (isNaN(eventId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid event ID. ID must be a number"
      });
    }

    const event = events.find(e => e.id === eventId);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: `Event with ID ${eventId} not found`
      });
    }

    res.status(200).json({
      success: true,
      data: event
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error while fetching event",
      error: error.message
    });
  }
});
```

### 5. Implementing POST Operations to Create an Event

```javascript
// POST - Create new event
app.post('/api/events', (req, res) => {
  try {
    const { name, date, location, description, capacity, registered } = req.body;

    // Validation - check required fields
    if (!name || !date || !location) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields. Name, date, and location are required"
      });
    }

    // Create new event object
    const newEvent = {
      id: nextId++,
      name,
      date,
      location,
      description: description || "",
      capacity: capacity || 0,
      registered: registered || 0
    };

    // Add to events array
    events.push(newEvent);

    // Return created event with 201 status
    res.status(201).json({
      success: true,
      message: "Event created successfully",
      data: newEvent
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error while creating event",
      error: error.message
    });
  }
});
```

### 6. Implementing PUT Operations to Update an Event

```javascript
// PUT - Update existing event
app.put('/api/events/:id', (req, res) => {
  try {
    const eventId = parseInt(req.params.id);

    // Validate ID is a number
    if (isNaN(eventId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid event ID. ID must be a number"
      });
    }

    const eventIndex = events.findIndex(e => e.id === eventId);

    if (eventIndex === -1) {
      return res.status(404).json({
        success: false,
        message: `Event with ID ${eventId} not found`
      });
    }

    // Update event with new data, keeping existing values for missing fields
    const updatedEvent = {
      ...events[eventIndex],
      ...req.body,
      id: eventId // Ensure ID doesn't change
    };

    events[eventIndex] = updatedEvent;

    res.status(200).json({
      success: true,
      message: "Event updated successfully",
      data: updatedEvent
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error while updating event",
      error: error.message
    });
  }
});
```

### 7. Implementing DELETE Operations to Remove an Event

```javascript
// DELETE - Remove event
app.delete('/api/events/:id', (req, res) => {
  try {
    const eventId = parseInt(req.params.id);

    // Validate ID is a number
    if (isNaN(eventId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid event ID. ID must be a number"
      });
    }

    const eventIndex = events.findIndex(e => e.id === eventId);

    if (eventIndex === -1) {
      return res.status(404).json({
        success: false,
        message: `Event with ID ${eventId} not found`
      });
    }

    // Remove event from array
    const deletedEvent = events.splice(eventIndex, 1)[0];

    res.status(200).json({
      success: true,
      message: "Event deleted successfully",
      data: deletedEvent
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error while deleting event",
      error: error.message
    });
  }
});
```

### 8. Accessing Route Parameters using req.params

```javascript
// Extract ID from URL parameter
const eventId = parseInt(req.params.id);

// Example: For URL /api/events/5, req.params.id will be "5"
```

### 9. Accessing Request Data using req.body

```javascript
// Extract data from request body
const { name, date, location, description, capacity, registered } = req.body;

// Used in POST and PUT requests to receive data from client
```

### 10. Sending JSON Responses using res.json()

```javascript
// Send successful response
res.status(200).json({
  success: true,
  data: event
});

// Send error response
res.status(404).json({
  success: false,
  message: "Event not found"
});
```

### 11. Handling Errors and Returning Appropriate HTTP Status Codes

```javascript
// Handle 404 - Route not found
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.originalUrl
  });
});

// Try-catch blocks in route handlers
try {
  // Route logic
} catch (error) {
  res.status(500).json({
    success: false,
    message: "Server error",
    error: error.message
  });
}
```

---

## Complete server.js Code

The complete implementation can be found in the `server.js` file in this directory.

---

## Testing with Postman

### API Base URL
```
http://localhost:5000
```

### Test Cases

#### 1. GET - Retrieve All Events

- **Method**: GET
- **Endpoint**: `http://localhost:5000/api/events`
- **Expected Status**: 200 OK
- **Expected Response**:
```json
{
  "success": true,
  "count": 3,
  "data": [...]
}
```

#### 2. GET - Retrieve Event by ID

- **Method**: GET
- **Endpoint**: `http://localhost:5000/api/events/1`
- **Expected Status**: 200 OK
- **Expected Response**:
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

#### 3. POST - Create New Event

- **Method**: POST
- **Endpoint**: `http://localhost:5000/api/events`
- **Headers**: `Content-Type: application/json`
- **Request Body**:
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
- **Expected Status**: 201 Created
- **Expected Response**:
```json
{
  "success": true,
  "message": "Event created successfully",
  "data": {
    "id": 4,
    "name": "Music Festival 2024",
    ...
  }
}
```

#### 4. PUT - Update Event

- **Method**: PUT
- **Endpoint**: `http://localhost:5000/api/events/1`
- **Headers**: `Content-Type: application/json`
- **Request Body**:
```json
{
  "registered": 300
}
```
- **Expected Status**: 200 OK
- **Expected Response**:
```json
{
  "success": true,
  "message": "Event updated successfully",
  "data": {
    "id": 1,
    "registered": 300,
    ...
  }
}
```

#### 5. DELETE - Remove Event

- **Method**: DELETE
- **Endpoint**: `http://localhost:5000/api/events/1`
- **Expected Status**: 200 OK
- **Expected Response**:
```json
{
  "success": true,
  "message": "Event deleted successfully",
  "data": {
    "id": 1,
    ...
  }
}
```

#### 6. Error Handling - Invalid ID

- **Method**: GET
- **Endpoint**: `http://localhost:5000/api/events/999`
- **Expected Status**: 404 Not Found
- **Expected Response**:
```json
{
  "success": false,
  "message": "Event with ID 999 not found"
}
```

#### 7. Error Handling - Missing Required Fields

- **Method**: POST
- **Endpoint**: `http://localhost:5000/api/events`
- **Request Body**:
```json
{
  "name": "Incomplete Event"
}
```
- **Expected Status**: 400 Bad Request
- **Expected Response**:
```json
{
  "success": false,
  "message": "Missing required fields. Name, date, and location are required"
}
```

---

## Screenshots

*[Attach screenshots here demonstrating each test case mentioned above]*

### Required Screenshots:

1. ✅ GET request to retrieve all events (Status: 200)
2. ✅ GET request to retrieve an event by ID (Status: 200)
3. ✅ POST request to create a new event (Status: 201)
4. ✅ PUT request to update an event (Status: 200)
5. ✅ DELETE request to remove an event (Status: 200)
6. ✅ Invalid request demonstrating error handling (Status: 404)
7. ✅ Frontend integration showing data from server

---

## Frontend Integration

The API has been integrated with a React frontend application located in the `../event-page-app` directory. The frontend:

- Fetches events from the API using `fetch()` or `axios`
- Displays events in a user-friendly interface
- Allows users to interact with CRUD operations through UI components
- Handles API responses and errors gracefully

To test the integration:
1. Start the API server: `npm start` (from event-management-api directory)
2. Start the frontend: `npm run dev` (from event-page-app directory)
3. Access the application at `http://localhost:5173`

---

## Result

The RESTful APIs for the Event Management System were successfully developed using Node.js and Express.js and tested using Postman. All CRUD operations (Create, Read, Update, Delete) were implemented and verified with appropriate:

- ✅ HTTP methods (GET, POST, PUT, DELETE)
- ✅ Request handling (req.params, req.body)
- ✅ Response formatting (res.json())
- ✅ Status codes (200, 201, 400, 404, 500)
- ✅ Error handling and validation
- ✅ RESTful architecture principles
- ✅ Frontend integration

The API is fully functional and ready for production use or further enhancement with database integration.

---

## Repository Link

**GitHub Repository**: https://github.com/kirteexh/FSD_3rd.Exp

---

## Postman Collection Link

*[Upload your Postman collection and add link here]*

To export Postman collection:
1. Open Postman
2. Click on your collection
3. Click the three dots (...) → Export
4. Choose Collection v2.1
5. Save the JSON file
6. Upload to Google Drive or GitHub
7. Add the link above

---

## Conclusion

This experiment successfully demonstrated the development and testing of RESTful APIs using modern web technologies. The Event Management API showcases best practices in:

- API design and architecture
- Error handling and validation
- HTTP protocol implementation
- Backend-frontend integration
- API testing and documentation

The skills learned in this experiment are fundamental to full-stack web development and can be applied to build scalable, production-ready applications.

---

**Signature**: ___________________  
**Date**: November 1, 2024
