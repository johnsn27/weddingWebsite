// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import Accommodation from './pages/accommodation';  // Import the new OurStory component
import GuestInformation from './pages/guestInformation';  // Import the new OurStory component
import Parking from './pages/parking';  // Import the new OurStory component
import RSVPForm from './pages/rsvp';  // Import the new OurStory component
import FindingTheVenue from './pages/findingTheVenue';  // Import the new OurStory component
import Taxis from './pages/taxis.js';  // Import the new OurStory component

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<GuestInformation />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/parking" element={<Parking />} />
          <Route path="/taxis" element={<Taxis />} />
          <Route path="/rsvp" element={<RSVPForm />} />
          <Route path="/findingTheVenue" element={<FindingTheVenue />} />
          {/* Add more routes for other pages as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
