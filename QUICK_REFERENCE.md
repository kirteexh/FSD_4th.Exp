# Quick Reference Guide - Event Management API

## 🚀 Server Commands

### Start the Server
```bash
cd event-management-api
npm start
```

### Start with Auto-Reload (Development)
```bash
npm run dev
```

### Server Running At
```
http://localhost:5000
```

---

## 📡 API Endpoints Summary

| Method | Endpoint | Purpose | Status Codes |
|--------|----------|---------|--------------|
| GET | `/api/events` | Get all events | 200, 500 |
| GET | `/api/events/:id` | Get event by ID | 200, 400, 404, 500 |
| POST | `/api/events` | Create new event | 201, 400, 500 |
| PUT | `/api/events/:id` | Update event | 200, 400, 404, 500 |
| DELETE | `/api/events/:id` | Delete event | 200, 400, 404, 500 |

---

## 📝 Quick Test Commands (cURL)

### 1. Get All Events
```bash
curl http://localhost:5000/api/events
```

### 2. Get Event by ID
```bash
curl http://localhost:5000/api/events/1
```

### 3. Create Event
```bash
curl -X POST http://localhost:5000/api/events \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Event",
    "date": "2024-12-25",
    "location": "Test Location",
    "description": "Test Description",
    "capacity": 100,
    "registered": 0
  }'
```

### 4. Update Event
```bash
curl -X PUT http://localhost:5000/api/events/1 \
  -H "Content-Type: application/json" \
  -d '{"registered": 250}'
```

### 5. Delete Event
```bash
curl -X DELETE http://localhost:5000/api/events/2
```

---

## 🎯 Postman Quick Setup

### Import Collection
1. Open Postman
2. Click "Import"
3. Select `Event_Management_API.postman_collection.json`
4. All 15+ requests are ready to use!

### Manual Request Setup
- **Base URL**: `http://localhost:5000`
- **Headers** (for POST/PUT): 
  - `Content-Type: application/json`
- **Body** (for POST/PUT): Select "raw" + "JSON"

---

## 📊 HTTP Status Codes

| Code | Meaning | When Used |
|------|---------|-----------|
| 200 | OK | Successful GET, PUT, DELETE |
| 201 | Created | Successful POST (new resource) |
| 400 | Bad Request | Invalid data or missing fields |
| 404 | Not Found | Resource doesn't exist |
| 500 | Server Error | Internal server error |

---

## 💡 Common Request Bodies

### Create Event (POST)
```json
{
  "name": "Event Name",
  "date": "2024-12-20",
  "location": "Event Location",
  "description": "Event Description",
  "capacity": 100,
  "registered": 0
}
```

### Update Event (PUT) - Partial
```json
{
  "registered": 50
}
```

### Update Event (PUT) - Full
```json
{
  "name": "Updated Name",
  "date": "2024-12-25",
  "location": "New Location",
  "description": "Updated Description",
  "capacity": 150,
  "registered": 75
}
```

---

## 🔧 Troubleshooting

### Server won't start
```bash
# Check if port 5000 is already in use
netstat -ano | findstr :5000

# Kill the process using port 5000
taskkill /PID <process_id> /F

# Or change the port in server.js
const PORT = process.env.PORT || 5001;
```

### "Cannot GET /api/events"
- Make sure server is running
- Check URL: `http://localhost:5000/api/events` (not 3000)
- Verify in terminal: server should show "Server is running..."

### Postman shows no response
- Server must be running first
- Check firewall settings
- Verify URL and port number

### CORS Error
- Server has CORS enabled by default
- If error persists, restart server
- Check `app.use(cors())` is present in server.js

---

## 📁 Project Structure

```
event-management-api/
├── server.js                          # Main API server
├── package.json                       # Dependencies
├── README.md                          # API Documentation
├── EXPERIMENT_4_SUBMISSION.md         # Submission Document
├── POSTMAN_TESTING_GUIDE.md          # Testing Guide
├── QUICK_REFERENCE.md                # This File
└── Event_Management_API.postman_collection.json  # Postman Collection
```

---

## ✅ Experiment Completion Checklist

### Code
- [x] Express server setup
- [x] Middleware configuration
- [x] GET routes implemented
- [x] POST route implemented
- [x] PUT route implemented
- [x] DELETE route implemented
- [x] Error handling added
- [x] Status codes implemented

### Testing
- [ ] Server started successfully
- [ ] Postman collection imported
- [ ] All 8 test cases executed
- [ ] Screenshots captured
- [ ] Error cases tested
- [ ] Frontend integration tested

### Documentation
- [x] Theory questions answered
- [x] Code snippets documented
- [ ] Screenshots added to submission
- [ ] Repository link updated
- [ ] Postman collection link added

### Submission
- [ ] Fill in Name, Class, Roll No.
- [ ] Add all screenshots
- [ ] Test frontend integration
- [ ] Upload to GitHub
- [ ] Export Postman collection
- [ ] Final review

---

## 🎓 Key Concepts Demonstrated

✅ RESTful API Architecture  
✅ Express.js Server Setup  
✅ HTTP Methods (GET, POST, PUT, DELETE)  
✅ Request Handling (req.params, req.body)  
✅ Response Handling (res.json(), res.status())  
✅ CRUD Operations  
✅ Error Handling  
✅ Status Codes  
✅ JSON Data Format  
✅ API Testing with Postman  
✅ Frontend-Backend Integration  

---

## 📞 Need Help?

### Check Server Logs
Look at your terminal where server is running - it shows all requests and errors

### Test Server is Running
Open browser: `http://localhost:5000`  
Should show API welcome message

### Verify Node.js Installation
```bash
node --version
npm --version
```

---

## 🔗 Important Links

- **GitHub Repository**: https://github.com/kirteexh/FSD_3rd.Exp
- **API Documentation**: See README.md
- **Testing Guide**: See POSTMAN_TESTING_GUIDE.md
- **Submission Document**: See EXPERIMENT_4_SUBMISSION.md

---

## 📝 Notes

- Server uses **in-memory storage** - data resets when server restarts
- Default port is **5000** (can be changed via environment variable)
- **CORS enabled** for frontend communication
- IDs auto-increment starting from 4
- All responses in **JSON format**

---

**Created**: November 1, 2024  
**For**: FSD Lab Experiment 4  
**Topic**: RESTful APIs with Node.js and Express.js
