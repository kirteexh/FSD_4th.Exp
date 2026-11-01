# Quick Start Guide - Event Management API

## 🚀 Getting Started in 5 Minutes

### Step 1: Server is Already Running!
Your server is currently running on:
```
http://localhost:5000
```

### Step 2: Test the API

Open your browser or use curl to test:
- **Root:** http://localhost:5000/
- **All Events:** http://localhost:5000/api/events

### Step 3: Test with Postman

#### Import the Collection (Recommended)
1. Open Postman
2. Click "Import" button
3. Select `postman_collection.json` from this folder
4. All 8 test requests will be imported automatically!

#### Or Create Requests Manually:

**1. GET All Events**
```
Method: GET
URL: http://localhost:5000/api/events
```

**2. GET Event by ID**
```
Method: GET
URL: http://localhost:5000/api/events/1
```

**3. POST Create Event**
```
Method: POST
URL: http://localhost:5000/api/events
Headers: Content-Type: application/json
Body (raw JSON):
{
  "name": "Music Festival 2024",
  "date": "2024-12-20",
  "location": "City Park",
  "description": "Annual music festival",
  "capacity": 1000,
  "registered": 0
}
```

**4. PUT Update Event**
```
Method: PUT
URL: http://localhost:5000/api/events/1
Headers: Content-Type: application/json
Body (raw JSON):
{
  "registered": 300
}
```

**5. DELETE Event**
```
Method: DELETE
URL: http://localhost:5000/api/events/3
```

### Step 4: Take Screenshots for Your Report

Take screenshots of each request showing:
- ✅ Request method and URL
- ✅ Request body (for POST/PUT)
- ✅ Response status code
- ✅ Response body

### Step 5: Stop the Server

When done testing:
```bash
# Press Ctrl+C in the terminal where server is running
```

Or find and kill the process:
```bash
# Windows
taskkill /F /IM node.exe

# Or use Task Manager to end Node.js process
```

---

## 📋 Checklist for Experiment Submission

- [ ] Server runs without errors
- [ ] All 5 CRUD operations tested in Postman
- [ ] Screenshots taken for each operation
- [ ] Error handling tested (invalid ID, missing fields)
- [ ] Documentation filled with your details (name, roll no, class)
- [ ] Code comments understood
- [ ] Theory questions answered
- [ ] Repository uploaded (optional)

---

## 🔧 Commands Reference

```bash
# Start server (production mode)
npm start

# Start server (development mode with auto-reload)
npm run dev

# Install dependencies (if needed)
npm install

# Check if server is running
curl http://localhost:5000/
```

---

## 📁 Project Structure

```
event-management-api/
├── server.js                      # Main server file (all code here)
├── package.json                   # Dependencies and scripts
├── README.md                      # Full documentation
├── EXPERIMENT_4_DOCUMENTATION.md  # Complete experiment report
├── QUICK_START.md                 # This file
├── postman_collection.json        # Import this into Postman
└── .gitignore                     # Git ignore file
```

---

## ⚡ Current Server Status

✅ **Server Status:** RUNNING  
🌐 **URL:** http://localhost:5000  
📊 **Events in Database:** 3  
🔌 **Port:** 5000

---

## 🆘 Troubleshooting

**Problem:** Port 5000 already in use
```bash
# Change PORT in server.js or set environment variable
set PORT=3000
npm start
```

**Problem:** Dependencies not installed
```bash
npm install
```

**Problem:** Cannot connect from Postman
- Check if server is running
- Verify URL is http://localhost:5000 (not https)
- Check firewall settings

---

## 📚 Next Steps

1. ✅ Complete all Postman tests
2. ✅ Take required screenshots
3. ✅ Fill in your personal details in EXPERIMENT_4_DOCUMENTATION.md
4. ✅ Answer theory questions in your own words
5. ✅ (Optional) Connect your React frontend to this API
6. ✅ Submit your work

---

**Good luck with your experiment! 🎉**
