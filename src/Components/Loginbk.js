
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../Components/SignUp.css';
import Header from '../Components/Header';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://south-canara-tourism-mern-website-frontend.vercel.app/login', { email, password });
      if (response.data === "Success") {
        navigate('/');
      } else if (response.data.error === 'incorrect_email') {
        setErrorMessage('Incorrect email. Please try again.');
      } else if (response.data.error === 'incorrect_password') {
        setErrorMessage('Incorrect password. Please try again.');
      } else if (response.data.error === 'incorrect_both') {
        setErrorMessage('Incorrect email and password. Please try again.');
      } else {
        setErrorMessage('Incorrect Password');
      }
    } catch (err) {
      console.log(err);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container">
      <Header />
      <div className="overlay">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter email"
              autoComplete="off"
              name="email"
              className="from-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="from-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
        </form>
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default Login;