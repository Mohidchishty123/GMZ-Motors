import React, { useState, useContext } from 'react';
import { AuthContext } from '../App';
import { Navigate } from 'react-router-dom';

function Login() {
  const { user, setUser } = useContext(AuthContext);
  const [form, setForm] = useState({ email: '', password: '' });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const foundUser = users.find(u => u.email === form.email && u.password === form.password);
    if (foundUser) {
      localStorage.setItem('user', JSON.stringify(foundUser));
      setUser(foundUser);
      alert('Login successful!');
    } else {
      alert('Invalid email or password.');
    }
  }

  if (user) return <Navigate to="/profile" />;

  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col text-center">
          <h1>Login</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="mb-3 form-group" style={{ '--form-index': 0 }}>
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
              <div className="mb-3 form-group" style={{ '--form-index': 1 }}>
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
              <button type="submit" className="btn btn-primary btn-submit w-100">Login</button>
              <div className="mt-3 text-center">
                <a href="/signup">Don't have an account? Sign Up</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;