# Experiment 4 Documentation
## Development of RESTful APIs using Node.js and Express.js and Testing using Postman

---

**Name:** [Your Name]  
**Class:** [Your Class]  
**Roll No:** [Your Roll Number]  
**Date:** October 26, 2024

---

## Aim

To develop and test RESTful APIs using Node.js and Express.js and understand HTTP methods, request and response handling, routing, status codes, and API testing using Postman.

---

## Problem Statement

Develop a RESTful API for an Event Management System using Node.js and Express.js. The API should allow users to perform CRUD (Create, Read, Update, Delete) operations on event information. The developed APIs must be tested using Postman to verify their functionality, request parameters, responses, and HTTP status codes.

---

## Theory Questions & Answers

### 1. What is an API?
**Answer:** API (Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate with each other. It defines the methods and data formats that applications can use to request and exchange information.

### 2. What is a RESTful API?
**Answer:** A RESTful API is an API that follows the principles of REST (Representational State Transfer) architecture. It uses HTTP methods to perform operations on resources identified by URLs, and typically exchanges data in JSON format.

### 3. What are the main principles of REST architecture?
**Answer:** 
- **Client-Server Architecture:** Separation of client and server concerns
- **Stateless:** Each request contains all information needed to process it
- **Cacheable:** Responses must define themselves as cacheable or not
- **Uniform Interface:** Consistent way to interact with resources
- **Layered System:** Architecture can be composed of hierarchical layers
- **Code on Demand (Optional):** Servers can extend client functionality

### 4. What are HTTP methods? Explain GET, POST, PUT, and DELETE.
**Answer:**
- **GET:** Retrieves data from the server (Read operation)
- **POST:** Sends data to create a new resource (Create operation)
- **PUT:** Updates an existing resource completely (Update operation)
- **DELETE:** Removes a resource from the server (Delete operation)

### 5. What is the purpose of Express.js in backend development?
**Answer:** Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies routing, middleware integration, HTTP request handling, and building RESTful APIs.

### 6. What is routing in Express.js?
**Answer:** Routing refers to defining how an application responds to client requests at specific endpoints (URIs) and HTTP methods. It determines which function should handle a particular URL path and HTTP method combination.

### 7. What is the purpose of req and res in Express.js?
**Answer:**
- **req (request):** Object containing information about the HTTP request (headers, parameters, body, query strings)
- **res (response):** Object used to send back the HTTP response to the client

### 8. What is the purpose of req.params and req.body?
**Answer:**
- **req.params:** Contains route parameters from the URL path (e.g., `/events/:id` → `req.params.id`)
- **req.body:** Contains data sent in the request body, typically from POST or PUT requests

### 9. What is JSON, and why is it commonly used in APIs?
**Answer:** JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It's commonly used in APIs because it's language-independent, compact, and closely resembles object structures in many programming languages.

### 10. What are HTTP status codes? Explain 200, 201, 400, 404, and 500.
**Answer:**
- **200 OK:** Request succeeded, resource returned
- **201 Created:** New resource successfully created
- **400 Bad Request:** Invalid request syntax or parameters
- **404 Not Found:** Requested resource doesn't exist
- **500 Internal Server Error:** Server encountered an error

### 11. What is Postman, and why is it used for API testing?
**Answer:** Postman is a popular API testing tool that allows developers to send HTTP requests, inspect responses, automate tests, and document APIs. It provides a user-friendly interface for testing RESTful APIs without writing code.

### 12. What is the purpose of the request body and headers in Postman?
**Answer:**
- **Request Body:** Contains data being sent to the server (used in POST, PUT requests)
- **Headers:** Provide metadata about the request (e.g., Content-Type, Authorization)

### 13. What is CRUD, and how is it implemented using RESTful APIs?
**Answer:** CRUD stands for Create, Read, Update, Delete - the four basic operations for persistent storage. In RESTful APIs:
- **Create:** POST request
- **Read:** GET request
- **Update:** PUT/PATCH request
- **Delete:** DELETE request

### 14. What is middleware in Express.js?
**Answer:** Middleware are functions that have access to the request object (req), response object (res), and the next middleware function in the application's request-response cycle. They can execute code, modify req/res objects, end the request-response cycle, or call the next middleware.

---

## Code Implementation

### 1. Creating an Express Server

```javascript
const express = require('express');
const app = express();
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

### 2. Configuring Middleware

```javascript
const cors = require('cors');

// Enable CORS for cross-origin requests
app.use(cors());

// Parse JSON request bodies
app.use(express.json());
```

### 3. Defining RESTful API Routes

```javascript
// Root route
app.get('/', (req, res) => {
  res.json({ message: "Welcome to Event Management API" });
});

// API routes
app.get('/api/events', getAllEvents);
app.get('/api/events/:id', getEventById);
app.post('/api/events', createEvent);
app.put('/api/events/:id', updateEvent);
app.delete('/api/events/:id', deleteEvent);
```

### 4. GET Operation - Retrieve All Events

```javascript
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
      message: "Server error",
      error: error.message
    });
  }
});
```

### 5. GET Operation - Retrieve Event by ID

```javascript
app.get('/api/events/:id', (req, res) => {
  try {
    const eventId = parseInt(req.params.id);
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
      message: "Server error",
      error: error.message
    });
  }
});
```

### 6. POST Operation - Create New Event

```javascript
app.post('/api/events', (req, res) => {
  try {
    const { name, date, location, description, capacity, registered } = req.body;

    // Validation
    if (!name || !date || !location) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields"
      });
    }

    const newEvent = {
      id: nextId++,
      name,
      date,
      location,
      description: description || "",
      capacity: capacity || 0,
      registered: registered || 0
    };

    events.push(newEvent);

    res.status(201).json({
      success: true,
      message: "Event created successfully",
      data: newEvent
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    });
  }
});
```

### 7. PUT Operation - Update Event

```javascript
app.put('/api/events/:id', (req, res) => {
  try {
    const eventId = parseInt(req.params.id);
    const eventIndex = events.findIndex(e => e.id === eventId);

    if (eventIndex === -1) {
      return res.status(404).json({
        success: false,
        message: `Event with ID ${eventId} not found`
      });
    }

    const updatedEvent = {
      ...events[eventIndex],
      ...req.body,
      id: eventId
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
      message: "Server error",
      error: error.message
    });
  }
});
```

### 8. DELETE Operation - Remove Event

```javascript
app.delete('/api/events/:id', (req, res) => {
  try {
    const eventId = parseInt(req.params.id);
    const eventIndex = events.findIndex(e => e.id === eventId);

    if (eventIndex === -1) {
      return res.status(404).json({
        success: false,
        message: `Event with ID ${eventId} not found`
      });
    }

    const deletedEvent = events.splice(eventIndex, 1)[0];

    res.status(200).json({
      success: true,
      message: "Event deleted successfully",
      data: deletedEvent
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    });
  }
});
```

### 9. Accessing Route Parameters

```javascript
// req.params extracts parameters from URL
const eventId = req.params.id;  // From /api/events/:id
```

### 10. Accessing Request Body

```javascript
// req.body contains data sent in POST/PUT requests
const { name, date, location } = req.body;
```

### 11. Sending JSON Responses

```javascript
// res.json() sends JSON response
res.status(200).json({
  success: true,
  data: event
});
```

### 12. Error Handling with Status Codes

```javascript
// 404 Not Found
if (!event) {
  return res.status(404).json({
    success: false,
    message: "Event not found"
  });
}

// 400 Bad Request
if (!name) {
  return res.status(400).json({
    success: false,
    message: "Name is required"
  });
}

// 500 Server Error
catch (error) {
  res.status(500).json({
    success: false,
    error: error.message
  });
}
```

---

## Screenshots Section

**Note:** Take screenshots for the following operations in Postman:

### 1. GET All Events
- **Method:** GET
- **Endpoint:** `http://localhost:5000/api/events`
- **Expected Status Code:** 200 OK
- **Expected Result:** JSON array of all events

### 2. GET Event by ID
- **Method:** GET
- **Endpoint:** `http://localhost:5000/api/events/1`
- **Expected Status Code:** 200 OK
- **Expected Result:** Single event object

### 3. POST Create New Event
- **Method:** POST
- **Endpoint:** `http://localhost:5000/api/events`
- **Headers:** Content-Type: application/json
- **Body:**
```json
{
  "name": "Music Festival",
  "date": "2024-12-20",
  "location": "City Park",
  "description": "Annual music festival",
  "capacity": 1000,
  "registered": 0
}
```
- **Expected Status Code:** 201 Created
- **Expected Result:** Newly created event with assigned ID

### 4. PUT Update Event
- **Method:** PUT
- **Endpoint:** `http://localhost:5000/api/events/1`
- **Headers:** Content-Type: application/json
- **Body:**
```json
{
  "registered": 300
}
```
- **Expected Status Code:** 200 OK
- **Expected Result:** Updated event object

### 5. DELETE Event
- **Method:** DELETE
- **Endpoint:** `http://localhost:5000/api/events/1`
- **Expected Status Code:** 200 OK
- **Expected Result:** Success message with deleted event data

### 6. Error Handling - Invalid ID
- **Method:** GET
- **Endpoint:** `http://localhost:5000/api/events/999`
- **Expected Status Code:** 404 Not Found
- **Expected Result:** Error message stating event not found

### 7. Error Handling - Missing Required Fields
- **Method:** POST
- **Endpoint:** `http://localhost:5000/api/events`
- **Body:** `{}` (empty)
- **Expected Status Code:** 400 Bad Request
- **Expected Result:** Validation error message

### 8. Frontend Integration Screenshot
- Show the React frontend fetching and displaying events from the API

---

## Testing Procedure in Postman

### Step-by-Step Guide:

1. **Open Postman** and create a new request

2. **Test GET All Events:**
   - Select GET method
   - Enter URL: `http://localhost:5000/api/events`
   - Click Send
   - Verify 200 status code and response data

3. **Test GET Event by ID:**
   - Select GET method
   - Enter URL: `http://localhost:5000/api/events/1`
   - Click Send
   - Take screenshot

4. **Test POST Create Event:**
   - Select POST method
   - Enter URL: `http://localhost:5000/api/events`
   - Go to Headers tab, add: `Content-Type: application/json`
   - Go to Body tab, select raw and JSON
   - Enter the event data
   - Click Send
   - Verify 201 status code

5. **Test PUT Update Event:**
   - Select PUT method
   - Enter URL: `http://localhost:5000/api/events/1`
   - Add headers and body as above
   - Click Send
   - Verify 200 status code

6. **Test DELETE Event:**
   - Select DELETE method
   - Enter URL: `http://localhost:5000/api/events/1`
   - Click Send
   - Verify 200 status code

7. **Test Error Cases:**
   - Try invalid ID (999)
   - Try POST with missing fields
   - Document the error responses

---

## Result

The RESTful APIs for the Event Management System were successfully developed using Node.js and Express.js. All CRUD operations were implemented and tested using Postman. The API correctly handles:

- ✅ GET requests to retrieve all events and individual events
- ✅ POST requests to create new events with validation
- ✅ PUT requests to update existing events
- ✅ DELETE requests to remove events
- ✅ Proper HTTP status codes (200, 201, 400, 404, 500)
- ✅ JSON request and response handling
- ✅ Error handling and validation
- ✅ CORS configuration for frontend integration

The API has been verified to work correctly with both Postman and can be integrated with a React frontend application.

---

## Repository Information

**Repository Link:** [Add your GitHub repository URL]

**Postman Collection Link:** [Add Postman collection share link if created]

---

## Conclusion

This experiment successfully demonstrated the development of RESTful APIs using Node.js and Express.js. All learning objectives were achieved including understanding REST principles, HTTP methods, routing, middleware, request/response handling, and API testing with Postman.

---

**Date of Completion:** October 26, 2024  
**Signature:** _______________
