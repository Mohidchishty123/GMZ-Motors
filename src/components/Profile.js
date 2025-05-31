import React, { useContext } from 'react';
import { AuthContext } from '../App';

function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col text-center">
          <h1>Welcome, {user.name}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Your Bookings</h2>
          {user.bookings && user.bookings.length > 0 ? (
            <table className="table table-striped table-bordered">
              <thead style={{ animationDelay: '0.2s' }}>
                <tr>
                  <th>Vehicle</th>
                  <th>Date</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {user.bookings.map((booking, index) => (
                  <tr key={index} style={{ '--row-index': index }}>
                    <td>{booking.vehicle}</td>
                    <td>{booking.date}</td>
                    <td>{booking.email}</td>
                    <td>{booking.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No bookings yet.</p>
          )}
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <h2>Your Complaints</h2>
          {user.complaints && user.complaints.length > 0 ? (
            <table className="table table-striped table-bordered">
              <thead style={{ animationDelay: '0.2s' }}>
                <tr>
                  <th>Complaint</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {user.complaints.map((complaint, index) => (
                  <tr key={index} style={{ '--row-index': index }}>
                    <td>{complaint.complaint}</td>
                    <td>{complaint.email}</td>
                    <td>{complaint.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No complaints yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;