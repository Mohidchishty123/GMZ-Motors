import React, { useState, useContext } from 'react';
import { AuthContext } from '../App';

function Booking() {
  const { user, setUser } = useContext(AuthContext);
  const [form, setForm] = useState({
    name: user.name || '',
    email: user.email || '',
    phone: user.phone || '',
    vehicle: '',
    date: ''
  });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.map(u => 
      u.email === user.email ? { ...u, bookings: [...(u.bookings || []), form] } : u
    );
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUser({ ...user, bookings: [...(user.bookings || []), form] });
    alert('Booking submitted! Check your Profile for details.');
    setForm({ ...form, vehicle: '', date: '' });
  }

  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col text-center">
          <h1>Book Your Vehicle</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="mb-3 form-group" style={{ '--form-index': 0 }}>
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={form.name}
                  readOnly
                />
              </div>
              <div className="mb-3 form-group" style={{ '--form-index': 1 }}>
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={form.email}
                  readOnly
                />
              </div>
              <div className="mb-3 form-group" style={{ '--form-index': 2 }}>
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  value={form.phone}
                  readOnly
                />
              </div>
              <div className="mb-3 form-group" style={{ '--form-index': 3 }}>
                <label className="form-label">Vehicle</label>
                <select name="vehicle" className="form-select" value={form.vehicle} onChange={handleChange} required>
                  <option value="">Select a vehicle</option>
                  <option>Toyota Corolla</option>
                  <option>Honda Civic</option>
                  <option>Toyota Fortuner</option>
                  <option>Audi A6</option>
                  <option>BMW X7</option>
                  <option>Toyota Crown</option>
                  <option>Mercedes Benz A Class A200</option>
                </select>
              </div>
              <div className="mb-3 form-group" style={{ '--form-index': 4 }}>
                <label className="form-label">Date</label>
                <input
                  type="date"
                  name="date"
                  className="form-control"
                  value={form.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-submit w-100">Submit Booking</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;