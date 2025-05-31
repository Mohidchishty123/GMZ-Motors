import React, { useState, useContext } from 'react';
import { AuthContext } from '../App';
import { Navigate } from 'react-router-dom';

function Signup() {
  const { user, setUser } = useContext(AuthContext);
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(u => u.email === form.email)) {
      alert('Email already exists. Please log in.');
      return;
    }
    const newUser = { ...form, bookings: [], complaints: [] };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
    alert('Account created successfully!');
  }

  if (user) return <Navigate to="/profile" />;

  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col text-center">
          <h1>Sign Up</h1>
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
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3 form-group" style={{ '--form-index': 1 }}>
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3 form-group" style={{ '--form-index': 2 }}>
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  value={form.phone}
                  onChange={handleChange}
                  pattern="[0-9]{11}"
                  placeholder="03001234567"
                  required
                />
                <div className="form-text">Enter 11-digit phone number (e.g., 03001234567)</div>
              </div>
              <div className="mb-3 form-group" style={{ '--form-index': 3 }}>
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-submit w-100">Sign Up</button>
              <div className="mt-3 text-center">
                <a href="/login">Already have an account? Login</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;