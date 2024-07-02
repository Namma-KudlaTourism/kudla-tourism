import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import FirstPage from './Components/FirstPage';
import BookingForm from './Components/BookingForm';
import Places from './Components/Places';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import AuthState from './context/AuthContext';
import Dashboard from './Components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
       <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/Contact" component={Contact} />
        </Routes>
      <Routes>
        
        <Route path="/" element={<FirstPage />} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/Places" element={<Places />} />
      </Routes>
      <div>
       
      </div>
    </div>
  );
}


export default App;
