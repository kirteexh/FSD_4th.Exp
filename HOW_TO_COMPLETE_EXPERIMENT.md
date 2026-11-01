# How to Complete Experiment 4 - Step by Step Guide

## 📋 Overview

This guide will walk you through completing and submitting your FSD Lab Experiment 4 on RESTful API Development.

**Estimated Time**: 1-2 hours

---

## ✅ Step 1: Verify Your Setup (5 minutes)

### Check Node.js Installation
```bash
node --version
npm --version
```
Both should show version numbers. If not, install Node.js from https://nodejs.org/

### Install Dependencies
```bash
cd event-management-api
npm install
```

### Start the Server
```bash
npm start
```

**Expected Output**:
```
🚀 Server is running on http://localhost:5000
📊 API endpoints available at http://localhost:5000/api/events
📝 Total events in database: 3
```

✅ **Checkpoint**: Open browser and go to `http://localhost:5000` - you should see the API welcome message.

---

## ✅ Step 2: Install and Setup Postman (10 minutes)

### Download Postman
1. Go to https://www.postman.com/downloads/
2. Download and install Postman for Windows
3. Create a free account (optional but recommended)

### Import the Collection
1. Open Postman
2. Click **"Import"** button (top left)
3. Click **"Upload Files"**
4. Navigate to your project folder: `event-management-api`
5. Select **`Event_Management_API.postman_collection.json`**
6. Click **"Import"**

✅ **Checkpoint**: You should see "Event Management API" collection in the left sidebar with 15+ requests organized in folders.

---

## ✅ Step 3: Test All API Endpoints (30 minutes)

### Testing Sequence

Make sure your server is running, then follow this order:

#### Test 1: GET All Events
1. Click on: **GET Requests → GET All Events**
2. Click **Send**
3. Verify: Status shows **200 OK**
4. Verify: Response shows 3 events
5. **Take Screenshot** (name it: `01_GET_all_events.png`)

#### Test 2: GET Event by ID
1. Click on: **GET Requests → GET Event by ID**
2. Click **Send**
3. Verify: Status shows **200 OK**
4. Verify: Response shows event with ID 1
5. **Take Screenshot** (name it: `02_GET_event_by_id.png`)

#### Test 3: POST Create New Event
1. Click on: **POST Requests → POST Create Event**
2. Check **Headers** tab: Should have `Content-Type: application/json`
3. Check **Body** tab: Should show JSON data for new event
4. Click **Send**
5. Verify: Status shows **201 Created**
6. Verify: Response shows newly created event with ID 4
7. **Take Screenshot** (name it: `03_POST_create_event.png`)

#### Test 4: Verify Event Was Created
1. Go back to **GET All Events**
2. Click **Send**
3. Verify: Should now show 4 events (including the new one)
4. **Optional Screenshot**

#### Test 5: PUT Update Event
1. Click on: **PUT Requests → PUT Update Event - Registered Count**
2. Check **Headers** tab: Should have `Content-Type: application/json`
3. Check **Body** tab: Should show `{"registered": 350}`
4. Click **Send**
5. Verify: Status shows **200 OK**
6. Verify: Response shows updated event with registered = 350
7. **Take Screenshot** (name it: `04_PUT_update_event.png`)

#### Test 6: DELETE Event
1. Click on: **DELETE Requests → DELETE Event by ID**
2. Click **Send**
3. Verify: Status shows **200 OK**
4. Verify: Response shows deleted event (ID 2)
5. **Take Screenshot** (name it: `05_DELETE_event.png`)

#### Test 7: Error - Event Not Found (404)
1. Click on: **Error Handling Tests → GET Event Not Found (404)**
2. Click **Send**
3. Verify: Status shows **404 Not Found**
4. Verify: Response shows error message
5. **Take Screenshot** (name it: `06_ERROR_404_not_found.png`)

#### Test 8: Error - Missing Required Fields (400)
1. Click on: **Error Handling Tests → POST Missing Required Fields (400)**
2. Check **Body** tab: Should show incomplete event data
3. Click **Send**
4. Verify: Status shows **400 Bad Request**
5. Verify: Response shows validation error
6. **Take Screenshot** (name it: `07_ERROR_400_validation.png`)

#### Test 9: Error - Invalid ID Format (400)
1. Click on: **Error Handling Tests → GET Invalid ID Format (400)**
2. Click **Send**
3. Verify: Status shows **400 Bad Request**
4. **Optional Screenshot**

✅ **Checkpoint**: You should have at least 7 screenshots showing all CRUD operations and error handling.

---

## ✅ Step 4: Test Frontend Integration (15 minutes)

### Start the Frontend Application

Open a **NEW terminal** (keep the API server running in the first terminal):

```bash
# Navigate to the frontend directory
cd event-page-app

# Install dependencies if not already done
npm install

# Start the development server
npm run dev
```

**Expected Output**:
```
  VITE v... ready in ... ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### Test the Integration

1. Open browser: `http://localhost:5173`
2. Verify: Events from API are displayed on the page
3. Test: Try interacting with events (if interactive features exist)
4. **Take Screenshot** (name it: `08_FRONTEND_integration.png`)

**Screenshot should show**:
- Browser address bar with `http://localhost:5173`
- Events displayed from the API
- Any interactive features working

✅ **Checkpoint**: Frontend should display the 3 events from your API (remember we deleted one and created one, so you should have 3-4 events depending on your tests).

---

## ✅ Step 5: Export Postman Collection (5 minutes)

### Export the Collection

1. In Postman, find your **"Event Management API"** collection
2. Click the three dots **(...)**  next to the collection name
3. Click **"Export"**
4. Choose **"Collection v2.1"** (recommended)
5. Click **"Export"**
6. Save as: `Event_Management_API.postman_collection.json`
7. Save to: Your project folder (it's already there, but you can update it)

### Optional: Share Collection Online

1. In Postman, click the **"Share"** button on your collection
2. Click **"Get public link"**
3. Copy the link
4. You can add this link to your submission document

---

## ✅ Step 6: Organize Your Screenshots (5 minutes)

### Create a Screenshots Folder

```bash
# In your event-management-api folder
mkdir screenshots
```

### Move/Copy All Screenshots

Place all your screenshots in the `screenshots` folder with these names:

```
screenshots/
├── 01_GET_all_events.png
├── 02_GET_event_by_id.png
├── 03_POST_create_event.png
├── 04_PUT_update_event.png
├── 05_DELETE_event.png
├── 06_ERROR_404_not_found.png
├── 07_ERROR_400_validation.png
└── 08_FRONTEND_integration.png
```

---

## ✅ Step 7: Complete Submission Document (15 minutes)

### Open the Submission Document

Open: `EXPERIMENT_4_SUBMISSION.md`

### Fill in Your Details

Find these lines at the top and fill them in:

```markdown
**Name:** [Your Name]  
**Class:** [Your Class]  
**Roll No:** [Your Roll Number]  
**Date:** November 1, 2024
```

Replace with your actual information:

```markdown
**Name:** Kirteesh Drakshe  
**Class:** [Your Class]  
**Roll No:** [Your Roll Number]  
**Date:** November 1, 2024
```

### Add Screenshots Section

In the document, find the **Screenshots** section and add references to your images:

```markdown
## Screenshots

### 1. GET All Events
![GET All Events](screenshots/01_GET_all_events.png)
- **Method**: GET
- **Endpoint**: `/api/events`
- **Status**: 200 OK
- **Result**: Successfully retrieved 3 events

### 2. GET Event by ID
![GET Event by ID](screenshots/02_GET_event_by_id.png)
- **Method**: GET
- **Endpoint**: `/api/events/1`
- **Status**: 200 OK
- **Result**: Successfully retrieved event with ID 1

... (continue for all screenshots)
```

### Add Repository Link

Find this line:
```markdown
**GitHub Repository**: https://github.com/kirteexh/FSD_3rd.Exp
```

Make sure it's your actual repository URL.

### Add Postman Collection Link (Optional)

If you shared your collection publicly:
```markdown
**Postman Collection Link**: [Your public link here]
```

---

## ✅ Step 8: Commit and Push to GitHub (10 minutes)

### Check Current Status

```bash
cd ..  # Go back to main project folder
git status
```

### Add New Files

```bash
git add event-management-api/
git add .
```

### Create Commit

```bash
git commit -m "Complete Experiment 4: RESTful API Development

- Add comprehensive submission documentation
- Include Postman collection for testing
- Add testing guides and quick reference
- Complete theory questions and code examples

Co-Authored-By: Claude Code <noreply@anthropic.com>"
```

### Push to GitHub

```bash
git push origin main
```

✅ **Checkpoint**: Visit your GitHub repository - all files should be visible online.

---

## ✅ Step 9: Create Final Submission Package (10 minutes)

### Option A: Submit via GitHub Link

Simply provide your repository link:
```
https://github.com/kirteexh/FSD_3rd.Exp
```

### Option B: Create a ZIP File

```bash
# Create a submission folder
mkdir FSD_Experiment_4_Submission

# Copy necessary files
cp event-management-api/EXPERIMENT_4_SUBMISSION.md FSD_Experiment_4_Submission/
cp -r event-management-api/screenshots FSD_Experiment_4_Submission/
cp event-management-api/server.js FSD_Experiment_4_Submission/
cp event-management-api/Event_Management_API.postman_collection.json FSD_Experiment_4_Submission/

# Create ZIP (or right-click and compress in Windows)
```

### Option C: Create PDF (For Physical Submission)

1. Open `EXPERIMENT_4_SUBMISSION.md` in VS Code
2. Install "Markdown PDF" extension
3. Right-click in the file → "Markdown PDF: Export (pdf)"
4. Manually insert screenshots in the appropriate sections

---

## ✅ Step 10: Final Verification Checklist

Before submitting, verify everything:

### Code & Implementation
- [ ] Server runs without errors (`npm start`)
- [ ] All 5 CRUD endpoints work correctly
- [ ] Error handling is implemented
- [ ] Proper status codes are returned
- [ ] Code is well-commented

### Testing
- [ ] All 8+ test cases completed in Postman
- [ ] Screenshots captured for all required tests
- [ ] Frontend integration tested and working
- [ ] Error cases tested and documented

### Documentation
- [ ] Personal details filled in (Name, Class, Roll No.)
- [ ] All theory questions answered
- [ ] Code snippets included in submission
- [ ] Screenshots added with descriptions
- [ ] Repository link updated
- [ ] Postman collection exported

### Submission Files
- [ ] EXPERIMENT_4_SUBMISSION.md completed
- [ ] Screenshots folder with all images
- [ ] Postman collection JSON file included
- [ ] Code pushed to GitHub
- [ ] README files present

### GitHub Repository
- [ ] Repository is public (or accessible to instructor)
- [ ] All files are pushed and visible
- [ ] README.md is informative
- [ ] No sensitive information committed

---

## 📊 What You Should Have

After completing all steps, you should have:

### In Your Repository
```
event-management-api/
├── server.js
├── package.json
├── README.md
├── EXPERIMENT_4_SUBMISSION.md          ← Main submission document
├── POSTMAN_TESTING_GUIDE.md
├── QUICK_REFERENCE.md
├── HOW_TO_COMPLETE_EXPERIMENT.md       ← This file
├── Event_Management_API.postman_collection.json
└── screenshots/
    ├── 01_GET_all_events.png
    ├── 02_GET_event_by_id.png
    ├── 03_POST_create_event.png
    ├── 04_PUT_update_event.png
    ├── 05_DELETE_event.png
    ├── 06_ERROR_404_not_found.png
    ├── 07_ERROR_400_validation.png
    └── 08_FRONTEND_integration.png
```

### On GitHub
- Complete repository with all code
- Documentation files
- Screenshots folder
- Postman collection

### To Submit
- GitHub repository link: `https://github.com/kirteexh/FSD_3rd.Exp`
- OR PDF/DOCX document with all content
- OR ZIP file with all materials

---

## 🎯 Submission Checklist

Print this and check off as you complete:

```
PREPARATION
[ ] Node.js installed and working
[ ] Postman installed
[ ] Server runs successfully
[ ] Dependencies installed

TESTING
[ ] Test 1: GET all events ✓
[ ] Test 2: GET event by ID ✓
[ ] Test 3: POST create event ✓
[ ] Test 4: PUT update event ✓
[ ] Test 5: DELETE event ✓
[ ] Test 6: 404 error handling ✓
[ ] Test 7: 400 validation error ✓
[ ] Test 8: Frontend integration ✓

SCREENSHOTS
[ ] All 8 screenshots captured
[ ] Screenshots clearly show method, URL, status, response
[ ] Screenshots organized in folder
[ ] Screenshots named correctly

DOCUMENTATION
[ ] Name, Class, Roll No. filled in
[ ] All theory questions answered
[ ] Code snippets included
[ ] Screenshots added to document
[ ] Repository link added
[ ] Postman collection link added (optional)

GITHUB
[ ] All files committed
[ ] Changes pushed to GitHub
[ ] Repository is accessible
[ ] README is updated

FINAL
[ ] Everything verified and working
[ ] Submission document complete
[ ] Ready to submit
```

---

## 🆘 Common Issues & Solutions

### Issue 1: Port 5000 Already in Use
```bash
# Solution: Use a different port
# Edit server.js: const PORT = 5001;
# Then update Postman URLs to use port 5001
```

### Issue 2: Cannot Find Module 'express'
```bash
# Solution: Install dependencies
cd event-management-api
npm install
```

### Issue 3: Postman Shows "Could not get any response"
```bash
# Solution: Make sure server is running
# Check terminal for error messages
# Verify URL is http://localhost:5000 (not https)
```

### Issue 4: Frontend Not Showing Data
```bash
# Solution: Make sure both servers are running
# Terminal 1: npm start (API server)
# Terminal 2: npm run dev (Frontend)
```

### Issue 5: Git Push Failed
```bash
# Solution: Pull first, then push
git pull origin main
git push origin main
```

---

## 📞 Need Help?

### Check These Resources First
1. **Quick Reference**: `QUICK_REFERENCE.md`
2. **Postman Guide**: `POSTMAN_TESTING_GUIDE.md`
3. **API Documentation**: `README.md`

### Server Logs
Always check your terminal where the server is running - it shows all requests and any errors.

### Test Server is Working
Open browser: `http://localhost:5000`
Should show: API welcome message with available endpoints

---

## 🎉 Completion

Once you've checked everything off, you're done! 

**Estimated Total Time**: 1-2 hours

**What You've Accomplished**:
- ✅ Built a complete RESTful API
- ✅ Implemented all CRUD operations
- ✅ Added proper error handling
- ✅ Tested with Postman
- ✅ Integrated with frontend
- ✅ Documented everything
- ✅ Pushed to GitHub
- ✅ Created professional submission

**Good luck with your submission! 🚀**

---

**Last Updated**: November 1, 2024  
**Version**: 1.0
