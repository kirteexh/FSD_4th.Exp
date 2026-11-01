# ✅ Experiment 4 Completion Checklist

**Student Name**: ________________________  
**Roll Number**: ________________________  
**Date**: November 1, 2024

Print this page and check off each item as you complete it!

---

## 🎯 TODAY'S TASKS

### PHASE 1: SETUP (10 minutes)

- [ ] **Install Postman**
  - Download from: https://www.postman.com/downloads/
  - Install and open application
  - Create account (optional)

- [ ] **Verify Server is Running**
  - Open terminal
  - Navigate to: `event-management-api`
  - Run: `npm start`
  - Check: Should show "Server is running on http://localhost:5000"
  - Test in browser: Open `http://localhost:5000`

- [ ] **Import Postman Collection**
  - Click "Import" in Postman
  - Select file: `Event_Management_API.postman_collection.json`
  - Verify: Collection appears in left sidebar with 15+ requests

---

### PHASE 2: TESTING & SCREENSHOTS (40 minutes)

**Important**: Keep server running in terminal while testing!

#### Test 1: GET All Events
- [ ] Open: GET Requests → GET All Events
- [ ] Click: Send button
- [ ] Verify: Status shows **200 OK**
- [ ] Verify: Response shows 3 events with IDs 1, 2, 3
- [ ] **SCREENSHOT**: Save as `01_GET_all_events.png`
  - Include: URL bar, method, status code, full response

#### Test 2: GET Event by ID
- [ ] Open: GET Requests → GET Event by ID
- [ ] Click: Send button
- [ ] Verify: Status shows **200 OK**
- [ ] Verify: Response shows single event (ID 1: Tech Conference)
- [ ] **SCREENSHOT**: Save as `02_GET_event_by_id.png`

#### Test 3: POST Create New Event
- [ ] Open: POST Requests → POST Create Event
- [ ] Check: Headers tab shows `Content-Type: application/json`
- [ ] Check: Body tab shows JSON data for Music Festival
- [ ] Click: Send button
- [ ] Verify: Status shows **201 Created**
- [ ] Verify: Response shows new event with ID 4
- [ ] **SCREENSHOT**: Save as `03_POST_create_event.png`
  - Include: Headers tab, Body tab, Status, Response

#### Test 4: PUT Update Event
- [ ] Open: PUT Requests → PUT Update Event - Registered Count
- [ ] Check: Headers tab shows `Content-Type: application/json`
- [ ] Check: Body tab shows `{"registered": 350}`
- [ ] Click: Send button
- [ ] Verify: Status shows **200 OK**
- [ ] Verify: Response shows registered changed to 350
- [ ] **SCREENSHOT**: Save as `04_PUT_update_event.png`
  - Include: Headers tab, Body tab, Status, Response

#### Test 5: DELETE Event
- [ ] Open: DELETE Requests → DELETE Event by ID
- [ ] URL should show: `/api/events/2`
- [ ] Click: Send button
- [ ] Verify: Status shows **200 OK**
- [ ] Verify: Response shows deleted event (ID 2: Web Development Workshop)
- [ ] **SCREENSHOT**: Save as `05_DELETE_event.png`

#### Test 6: Error Handling - 404 Not Found
- [ ] Open: Error Handling Tests → GET Event Not Found (404)
- [ ] URL should show: `/api/events/999`
- [ ] Click: Send button
- [ ] Verify: Status shows **404 Not Found**
- [ ] Verify: Error message says "Event with ID 999 not found"
- [ ] **SCREENSHOT**: Save as `06_ERROR_404.png`

#### Test 7: Error Handling - 400 Validation
- [ ] Open: Error Handling Tests → POST Missing Required Fields
- [ ] Check: Body shows incomplete event (only name field)
- [ ] Click: Send button
- [ ] Verify: Status shows **400 Bad Request**
- [ ] Verify: Error message about missing required fields
- [ ] **SCREENSHOT**: Save as `07_ERROR_400.png`
  - Include: Body tab showing incomplete data

#### Test 8: Frontend Integration
- [ ] Open NEW terminal (keep API server running)
- [ ] Navigate to: `event-page-app`
- [ ] Run: `npm run dev`
- [ ] Open browser: `http://localhost:5173`
- [ ] Verify: Events from API are displayed
- [ ] **SCREENSHOT**: Save as `08_FRONTEND.png`
  - Include: Browser address bar, Events displayed

---

### PHASE 3: ORGANIZE FILES (10 minutes)

- [ ] **Create Screenshots Folder**
  ```bash
  cd event-management-api
  mkdir screenshots
  ```

- [ ] **Move All Screenshots**
  - Move all 8 PNG files to `screenshots/` folder
  - Verify file names match exactly:
    - 01_GET_all_events.png
    - 02_GET_event_by_id.png
    - 03_POST_create_event.png
    - 04_PUT_update_event.png
    - 05_DELETE_event.png
    - 06_ERROR_404.png
    - 07_ERROR_400.png
    - 08_FRONTEND.png

---

### PHASE 4: UPDATE DOCUMENTS (15 minutes)

- [ ] **Edit EXPERIMENT_4_SUBMISSION.md**
  - Open file in text editor
  - Find line: `**Name:** [Your Name]`
  - Replace with your actual name
  - Find line: `**Class:** [Your Class]`
  - Replace with your class
  - Find line: `**Roll No:** [Your Roll Number]`
  - Replace with your roll number
  - Save file

- [ ] **Add Screenshots to Document**
  - In `EXPERIMENT_4_SUBMISSION.md`
  - Find section: `## Screenshots`
  - Add screenshot references (see template in file)
  - Save file

- [ ] **Verify All Information**
  - Read through submission document
  - Check: Name, Class, Roll No. are correct
  - Check: All theory questions are answered
  - Check: Code snippets are included
  - Check: Screenshot section is complete

---

### PHASE 5: PUSH TO GITHUB (10 minutes)

- [ ] **Check Git Status**
  ```bash
  cd ..  # Back to main project folder
  git status
  ```

- [ ] **Add All Files**
  ```bash
  git add .
  ```

- [ ] **Commit Changes**
  ```bash
  git commit -m "Complete Experiment 4 with testing and documentation

  - Add all 8 required screenshots
  - Complete submission document with personal details
  - Include Postman collection for testing
  - Add comprehensive testing guides
  
  Co-Authored-By: Claude Code <noreply@anthropic.com>"
  ```

- [ ] **Push to GitHub**
  ```bash
  git push origin main
  ```

- [ ] **Verify on GitHub**
  - Open: https://github.com/kirteexh/FSD_3rd.Exp
  - Check: All files are visible
  - Check: Screenshots folder exists
  - Check: Documentation is readable

---

### PHASE 6: FINAL VERIFICATION (5 minutes)

- [ ] **Check Repository Online**
  - Visit your GitHub repository
  - Navigate to `event-management-api/` folder
  - Confirm these files exist:
    - [ ] server.js
    - [ ] package.json
    - [ ] EXPERIMENT_4_SUBMISSION.md
    - [ ] Event_Management_API.postman_collection.json
    - [ ] screenshots/ folder with 8 images

- [ ] **Test Locally One More Time**
  - [ ] Server starts: `npm start`
  - [ ] No errors in terminal
  - [ ] API responds at http://localhost:5000

- [ ] **Review Submission Document**
  - [ ] Personal details filled in
  - [ ] All theory questions answered
  - [ ] Code snippets present
  - [ ] Screenshots section complete
  - [ ] Repository link correct

---

## 📊 COMPLETION STATUS

**Total Tasks**: 50+  
**Estimated Time**: 1.5 hours  

**Completed**: _____ / 50+  
**Time Taken**: ______  

---

## 📝 FINAL SUBMISSION

### What to Submit:

**Option 1: GitHub Link** (Recommended)
```
Repository URL: https://github.com/kirteexh/FSD_3rd.Exp
Folder: event-management-api/
```

**Option 2: Files to Export**
If instructor requires files:
- [ ] EXPERIMENT_4_SUBMISSION.md (or convert to PDF)
- [ ] screenshots/ folder (all 8 images)
- [ ] Event_Management_API.postman_collection.json
- [ ] server.js

---

## ✅ SIGN-OFF

I have completed all tasks and verified:
- [x] All code is working correctly
- [ ] All 8 tests completed successfully
- [ ] All 8 screenshots captured and organized
- [ ] Personal details filled in submission document
- [ ] All files committed and pushed to GitHub
- [ ] Repository is accessible and complete

**Student Signature**: ________________________  

**Date Completed**: ________________________  

**Time Spent**: ________________________  

---

## 🎉 CONGRATULATIONS!

Once all boxes are checked, you have successfully completed:
- ✅ RESTful API Development
- ✅ CRUD Operations Implementation
- ✅ API Testing with Postman
- ✅ Frontend Integration
- ✅ Professional Documentation
- ✅ Version Control with Git/GitHub

**You're ready to submit! 🚀**

---

## 🆘 TROUBLESHOOTING QUICK REFERENCE

**Server won't start:**
```bash
cd event-management-api
npm install
npm start
```

**Port 5000 busy:**
Edit server.js, change: `const PORT = 5001;`

**Postman shows no response:**
- Check server is running
- Verify URL: http://localhost:5000 (not https)

**Git push failed:**
```bash
git pull origin main
git push origin main
```

**Can't find screenshots:**
Check Downloads folder or Desktop

---

**Keep this checklist for your records!**  
**Good luck! 🌟**
