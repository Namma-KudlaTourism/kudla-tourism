import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../Components/SignUp.css';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock signup validation
    if (email === 'test@example.com') {
      alert('User already exists');
    } else {
      navigate('/login');
    }
  }

  return (
    <div className="container1">
      <Header />
      <div className="overlay1">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              className="form-control rounded-0"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="next-button1">
            Sign up
          </button>
        </form>
        <p>Already have an Account?</p>
        <Link to="/login" className="next-button">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;
