import React, { useState, useContext } from 'react';
import { AuthContext } from '../App';

function Complaint() {
  const { user, setUser } = useContext(AuthContext);
  const [form, setForm] = useState({
    name: user.name || '',
    email: user.email || '',
    phone: user.phone || '',
    complaint: ''
  });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.map(u => 
      u.email === user.email ? { ...u, complaints: [...(u.complaints || []), form] } : u
    );
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUser({ ...user, complaints: [...(user.complaints || []), form] });
    alert('Complaint submitted! Check your Profile for details.');
    setForm({ ...form, complaint: '' });
  }

  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col text-center">
          <h1>Submit a Complaint</h1>
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
                <label className="form-label">Complaint Details</label>
                <textarea
                  name="complaint"
                  className="form-control"
                  value={form.complaint}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-submit w-100">Submit Complaint</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Complaint;