# Postman Testing Guide - Event Management API

## 📋 Prerequisites

1. **Install Postman**: Download from [https://www.postman.com/downloads/](https://www.postman.com/downloads/)
2. **Start the API Server**: Run `npm start` from the `event-management-api` directory
3. **Verify Server is Running**: Open `http://localhost:5000` in your browser

---

## 🚀 Quick Start - Testing in Postman

### Base URL
```
http://localhost:5000
```

---

## 📡 Test Cases (Step by Step)

### Test 1: GET - Retrieve All Events

**Purpose**: Fetch all events from the database

1. Open Postman
2. Create a new request
3. Set method to **GET**
4. Enter URL: `http://localhost:5000/api/events`
5. Click **Send**

**Expected Result**:
- **Status**: `200 OK`
- **Response Body**:
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
      "description": "Annual technology conference featuring latest innovations",
      "capacity": 500,
      "registered": 234
    },
    {
      "id": 2,
      "name": "Web Development Workshop",
      "date": "2024-11-20",
      "location": "Online",
      "description": "Hands-on workshop for modern web development",
      "capacity": 100,
      "registered": 87
    },
    {
      "id": 3,
      "name": "AI & Machine Learning Summit",
      "date": "2024-12-01",
      "location": "Tech Hub",
      "description": "Exploring the future of AI and ML technologies",
      "capacity": 300,
      "registered": 156
    }
  ]
}
```

**Screenshot Checklist**:
- ✅ URL shows `http://localhost:5000/api/events`
- ✅ Method is GET
- ✅ Status shows `200 OK`
- ✅ Response body shows all 3 events

---

### Test 2: GET - Retrieve Event by ID

**Purpose**: Fetch a single event using its ID

1. Create a new request in Postman
2. Set method to **GET**
3. Enter URL: `http://localhost:5000/api/events/1`
4. Click **Send**

**Expected Result**:
- **Status**: `200 OK`
- **Response Body**:
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Tech Conference 2024",
    "date": "2024-12-15",
    "location": "Convention Center",
    "description": "Annual technology conference featuring latest innovations",
    "capacity": 500,
    "registered": 234
  }
}
```

**Try Different IDs**:
- `http://localhost:5000/api/events/2` - Should return event 2
- `http://localhost:5000/api/events/3` - Should return event 3

**Screenshot Checklist**:
- ✅ URL shows `http://localhost:5000/api/events/1`
- ✅ Method is GET
- ✅ Status shows `200 OK`
- ✅ Response shows single event with ID 1

---

### Test 3: POST - Create New Event

**Purpose**: Create a new event by sending data to the server

1. Create a new request in Postman
2. Set method to **POST**
3. Enter URL: `http://localhost:5000/api/events`
4. Go to **Headers** tab:
   - Add header: `Content-Type` = `application/json`
5. Go to **Body** tab:
   - Select **raw**
   - Select **JSON** from dropdown
6. Enter this JSON data:

```json
{
  "name": "Music Festival 2024",
  "date": "2024-12-20",
  "location": "City Park",
  "description": "Annual music festival with live bands",
  "capacity": 1000,
  "registered": 0
}
```

7. Click **Send**

**Expected Result**:
- **Status**: `201 Created`
- **Response Body**:
```json
{
  "success": true,
  "message": "Event created successfully",
  "data": {
    "id": 4,
    "name": "Music Festival 2024",
    "date": "2024-12-20",
    "location": "City Park",
    "description": "Annual music festival with live bands",
    "capacity": 1000,
    "registered": 0
  }
}
```

**Screenshot Checklist**:
- ✅ URL shows `http://localhost:5000/api/events`
- ✅ Method is POST
- ✅ Headers tab shows `Content-Type: application/json`
- ✅ Body tab shows raw JSON input
- ✅ Status shows `201 Created`
- ✅ Response shows newly created event with ID 4

**Verify Creation**:
- Now do a GET request to `http://localhost:5000/api/events`
- You should see 4 events now (including the new one)

---

### Test 4: PUT - Update Event

**Purpose**: Update an existing event's information

1. Create a new request in Postman
2. Set method to **PUT**
3. Enter URL: `http://localhost:5000/api/events/1`
4. Go to **Headers** tab:
   - Add header: `Content-Type` = `application/json`
5. Go to **Body** tab:
   - Select **raw**
   - Select **JSON** from dropdown
6. Enter this JSON data (we'll update the registered count):

```json
{
  "registered": 350
}
```

7. Click **Send**

**Expected Result**:
- **Status**: `200 OK`
- **Response Body**:
```json
{
  "success": true,
  "message": "Event updated successfully",
  "data": {
    "id": 1,
    "name": "Tech Conference 2024",
    "date": "2024-12-15",
    "location": "Convention Center",
    "description": "Annual technology conference featuring latest innovations",
    "capacity": 500,
    "registered": 350
  }
}
```

**Notice**: Only the `registered` field changed from 234 to 350, all other fields remained the same.

**Screenshot Checklist**:
- ✅ URL shows `http://localhost:5000/api/events/1`
- ✅ Method is PUT
- ✅ Headers tab shows `Content-Type: application/json`
- ✅ Body tab shows JSON with updated field
- ✅ Status shows `200 OK`
- ✅ Response shows updated event

**Verify Update**:
- Do a GET request to `http://localhost:5000/api/events/1`
- The `registered` field should now show 350

---

### Test 5: DELETE - Remove Event

**Purpose**: Delete an event from the database

1. Create a new request in Postman
2. Set method to **DELETE**
3. Enter URL: `http://localhost:5000/api/events/2`
4. Click **Send**

**Expected Result**:
- **Status**: `200 OK`
- **Response Body**:
```json
{
  "success": true,
  "message": "Event deleted successfully",
  "data": {
    "id": 2,
    "name": "Web Development Workshop",
    "date": "2024-11-20",
    "location": "Online",
    "description": "Hands-on workshop for modern web development",
    "capacity": 100,
    "registered": 87
  }
}
```

**Screenshot Checklist**:
- ✅ URL shows `http://localhost:5000/api/events/2`
- ✅ Method is DELETE
- ✅ Status shows `200 OK`
- ✅ Response shows deleted event data

**Verify Deletion**:
- Do a GET request to `http://localhost:5000/api/events`
- Event with ID 2 should no longer be in the list
- Do a GET request to `http://localhost:5000/api/events/2`
- Should return 404 Not Found

---

### Test 6: Error Handling - Event Not Found (404)

**Purpose**: Test error handling when requesting a non-existent event

1. Create a new request in Postman
2. Set method to **GET**
3. Enter URL: `http://localhost:5000/api/events/999`
4. Click **Send**

**Expected Result**:
- **Status**: `404 Not Found`
- **Response Body**:
```json
{
  "success": false,
  "message": "Event with ID 999 not found"
}
```

**Screenshot Checklist**:
- ✅ URL shows `http://localhost:5000/api/events/999`
- ✅ Method is GET
- ✅ Status shows `404 Not Found`
- ✅ Response shows error message

---

### Test 7: Error Handling - Missing Required Fields (400)

**Purpose**: Test validation when creating an event without required fields

1. Create a new request in Postman
2. Set method to **POST**
3. Enter URL: `http://localhost:5000/api/events`
4. Go to **Headers** tab:
   - Add header: `Content-Type` = `application/json`
5. Go to **Body** tab:
   - Select **raw**
   - Select **JSON**
6. Enter this incomplete JSON data (missing `date` and `location`):

```json
{
  "name": "Incomplete Event"
}
```

7. Click **Send**

**Expected Result**:
- **Status**: `400 Bad Request`
- **Response Body**:
```json
{
  "success": false,
  "message": "Missing required fields. Name, date, and location are required"
}
```

**Screenshot Checklist**:
- ✅ URL shows `http://localhost:5000/api/events`
- ✅ Method is POST
- ✅ Body shows incomplete JSON data
- ✅ Status shows `400 Bad Request`
- ✅ Response shows validation error message

---

### Test 8: Error Handling - Invalid ID (400)

**Purpose**: Test error handling when using invalid ID format

1. Create a new request in Postman
2. Set method to **GET**
3. Enter URL: `http://localhost:5000/api/events/abc`
4. Click **Send**

**Expected Result**:
- **Status**: `400 Bad Request`
- **Response Body**:
```json
{
  "success": false,
  "message": "Invalid event ID. ID must be a number"
}
```

**Screenshot Checklist**:
- ✅ URL shows `http://localhost:5000/api/events/abc`
- ✅ Method is GET
- ✅ Status shows `400 Bad Request`
- ✅ Response shows invalid ID error

---

## 📊 Summary of Test Results

| Test # | Method | Endpoint | Status Code | Result |
|--------|--------|----------|-------------|--------|
| 1 | GET | `/api/events` | 200 OK | ✅ Returns all events |
| 2 | GET | `/api/events/1` | 200 OK | ✅ Returns single event |
| 3 | POST | `/api/events` | 201 Created | ✅ Creates new event |
| 4 | PUT | `/api/events/1` | 200 OK | ✅ Updates event |
| 5 | DELETE | `/api/events/2` | 200 OK | ✅ Deletes event |
| 6 | GET | `/api/events/999` | 404 Not Found | ✅ Event not found error |
| 7 | POST | `/api/events` | 400 Bad Request | ✅ Validation error |
| 8 | GET | `/api/events/abc` | 400 Bad Request | ✅ Invalid ID error |

---

## 💾 Creating a Postman Collection

To save all your requests as a collection:

1. **Create Collection**:
   - Click "Collections" in left sidebar
   - Click "+" or "New Collection"
   - Name it: "Event Management API"
   - Add description: "RESTful API for Event Management System"

2. **Save Requests to Collection**:
   - After creating each request, click "Save"
   - Choose the "Event Management API" collection
   - Name the request (e.g., "GET All Events")

3. **Organize Requests**:
   - GET Requests folder
   - POST Requests folder
   - PUT Requests folder
   - DELETE Requests folder
   - Error Handling folder

4. **Export Collection**:
   - Click the three dots (...) next to your collection name
   - Click "Export"
   - Choose "Collection v2.1"
   - Save as `Event_Management_API.postman_collection.json`
   - Upload to your GitHub repository

---

## 🎯 Tips for Taking Screenshots

For your experiment submission, capture these elements in each screenshot:

1. **Top bar**: Shows the HTTP method and full URL
2. **Headers tab**: When relevant (POST/PUT requests)
3. **Body tab**: When sending data (POST/PUT requests)
4. **Status code**: Should be clearly visible (200, 201, 400, 404)
5. **Response body**: The full JSON response
6. **Response time**: Visible at the bottom

**Screenshot Organization**:
- Name files descriptively: `01_GET_all_events.png`, `02_GET_by_id.png`, etc.
- Use annotations (arrows/boxes) to highlight important parts
- Include all 8 test cases

---

## 🔄 Complete Testing Sequence

Follow this order for a complete test run:

1. ✅ Test 1: GET all events (verify initial data)
2. ✅ Test 2: GET event by ID (verify single event retrieval)
3. ✅ Test 3: POST new event (create event with ID 4)
4. ✅ Test 1 again: Verify 4 events now exist
5. ✅ Test 4: PUT update event (modify event 1)
6. ✅ Test 2: Verify event 1 was updated
7. ✅ Test 5: DELETE event (remove event 2)
8. ✅ Test 1 again: Verify only 3 events remain
9. ✅ Test 6: Error - event not found
10. ✅ Test 7: Error - missing fields
11. ✅ Test 8: Error - invalid ID

---

## 📱 Alternative: Testing with cURL (Command Line)

If you prefer command line, here are the equivalent cURL commands:

### GET All Events
```bash
curl http://localhost:5000/api/events
```

### GET Event by ID
```bash
curl http://localhost:5000/api/events/1
```

### POST Create Event
```bash
curl -X POST http://localhost:5000/api/events \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Music Festival 2024",
    "date": "2024-12-20",
    "location": "City Park",
    "description": "Annual music festival",
    "capacity": 1000,
    "registered": 0
  }'
```

### PUT Update Event
```bash
curl -X PUT http://localhost:5000/api/events/1 \
  -H "Content-Type: application/json" \
  -d '{"registered": 350}'
```

### DELETE Event
```bash
curl -X DELETE http://localhost:5000/api/events/2
```

---

## ✅ Checklist for Experiment Completion

- [ ] API server is running on port 5000
- [ ] All 8 test cases executed in Postman
- [ ] Screenshots captured for all test cases
- [ ] Postman collection created and exported
- [ ] Screenshots show correct status codes
- [ ] Error handling tests completed
- [ ] Collection uploaded to repository
- [ ] Frontend integration tested (if applicable)
- [ ] Documentation completed
- [ ] Submission document filled out

---

## 🆘 Troubleshooting

### Problem: "Could not get any response"
**Solution**: Make sure the server is running. Check terminal for server logs.

### Problem: "Cannot POST/PUT - body is empty"
**Solution**: 
1. Check Headers: `Content-Type: application/json`
2. Body tab: Select "raw" and "JSON"
3. Ensure JSON is properly formatted

### Problem: "404 Not Found on all routes"
**Solution**: Verify the base URL is `http://localhost:5000` (not 3000 or 8080)

### Problem: "CORS error"
**Solution**: The server has CORS enabled, but if you see errors, restart the server

---

## 📚 Additional Resources

- **Postman Documentation**: [https://learning.postman.com/](https://learning.postman.com/)
- **HTTP Status Codes**: [https://httpstatuses.com/](https://httpstatuses.com/)
- **REST API Best Practices**: [https://restfulapi.net/](https://restfulapi.net/)

---

**Happy Testing! 🚀**

If you encounter any issues, check the server logs in your terminal for detailed error messages.
