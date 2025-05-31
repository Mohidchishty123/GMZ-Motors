import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Services from './components/Services';
import Booking from './components/Booking';
import FAQ from './components/FAQ';
import Complaint from './components/Complaint';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import keychainImage from './images/keychain.png';

export const AuthContext = createContext();

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <div className="d-flex flex-column min-vh-100">
          <img src={keychainImage} alt="Car Keychain" className="keychain" />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/booking"
              element={user ? <Booking /> : <Navigate to="/login" />}
            />
            <Route
              path="/complaint"
              element={user ? <Complaint /> : <Navigate to="/login" />}
            />
            <Route
              path="/profile"
              element={user ? <Profile /> : <Navigate to="/login" />}
            />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;