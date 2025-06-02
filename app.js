import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './components/Sidebar';
import MeetingsList from './components/MeetingsList';
import MeetingForm from './components/MeetingForm';
import Login from './components/Login';

function App() {
  const [meetings, setMeetings] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [currentMeeting, setCurrentMeeting] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      fetchMeetings();
    }
  }, [isAuthenticated]);

  const fetchMeetings = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/meetings/');
      setMeetings(response.data);
    } catch (error) {
      console.error('Error fetching meetings:', error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/" element={
          isAuthenticated ? (
            <div className="flex h-screen bg-gray-50">
              <Sidebar onLogout={() => setIsAuthenticated(false)} />
              <div className="flex-1 p-8 overflow-auto">
                {/* Main content */}
              </div>
            </div>
          ) : <Navigate to="/login" />
        } />
      </Routes>
    </Router>
  );
}

export default App;