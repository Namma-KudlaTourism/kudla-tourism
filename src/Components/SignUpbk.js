import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Components/SignUp.css';
import Header from '../Components/Header';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (name === '' || email === '' || password === '') {
      setErrorMessage('All fields are required.');
      return;
    }

    // Simulate successful signup
    setErrorMessage('');
    setSuccessMessage('Signup successful. Please login.');

    // Reset form
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container">
      <Header />
      <div className="overlay">
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
              value={name}
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
              value={email}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="next-button">
            Sign up
          </button>
        </form>
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
        {successMessage && <p className="text-success">{successMessage}</p>}
        <p>Already have an Account?</p>
        <Link to="/login" className="next-button">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;
