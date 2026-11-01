// Import required modules
const express = require('express');
const cors = require('cors');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware Configuration
app.use(cors()); // Enable CORS for frontend communication
app.use(express.json()); // Parse JSON request bodies

// In-memory data storage (acts as a database for this demo)
let events = [
  {
    id: 1,
    name: "Tech Conference 2024",
    date: "2024-12-15",
    location: "Convention Center",
    description: "Annual technology conference featuring latest innovations",
    capacity: 500,
    registered: 234
  },
  {
    id: 2,
    name: "Web Development Workshop",
    date: "2024-11-20",
    location: "Online",
    description: "Hands-on workshop for modern web development",
    capacity: 100,
    registered: 87
  },
  {
    id: 3,
    name: "AI & Machine Learning Summit",
    date: "2024-12-01",
    location: "Tech Hub",
    description: "Exploring the future of AI and ML technologies",
    capacity: 300,
    registered: 156
  }
];

// Counter for generating unique IDs
let nextId = 4;

// ==================== API ROUTES ====================

// Root endpoint - API welcome message
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

// ==================== GET ROUTES ====================

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

// ==================== POST ROUTE ====================

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

// ==================== PUT ROUTE ====================

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

// ==================== DELETE ROUTE ====================

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

// ==================== ERROR HANDLING ====================

// Handle 404 - Route not found
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.originalUrl
  });
});

// ==================== START SERVER ====================

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📊 API endpoints available at http://localhost:${PORT}/api/events`);
  console.log(`📝 Total events in database: ${events.length}`);
});
