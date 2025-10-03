import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../App';

function Profile() {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    // Fetch bookings from backend
    fetch(`http://localhost:5000/api/bookings/${user.email}`)
      .then(res => res.json())
      .then(data => setBookings(data))
      .catch(err => console.error(err));

    // Fetch complaints from backend
    fetch(`http://localhost:5000/api/complaints/${user.email}`)
      .then(res => res.json())
      .then(data => setComplaints(data))
      .catch(err => console.error(err));
  }, [user.email]);

  return (
    <div className="container py-4">
      <h2 className="mb-4">👤 Profile</h2>
      <h1 className="text-center">Welcome, <span style={{ color: 'blue' }}>{user.name}</span></h1>

      <h4>📅 Your Bookings</h4>
      {bookings.length === 0 ? <p>No bookings found.</p> : (
        <ul className="list-group mb-4">
          {bookings.map((b, index) => (
            <li key={index} className="list-group-item">
              {b.date} — {b.vehicle}
            </li>
          ))}
        </ul>
      )}
      <h4>📝 Your Complaints</h4>
      {complaints.length === 0 ? <p>No complaints found.</p> : (
        <ul className="list-group">
          {complaints.map((c, index) => (
            <li key={index} className="list-group-item">
              {c.date?.slice(0, 10)} — {c.complaint}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Profile;
