// src/components/NavigationBar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const NavigationBar = () => {
  return (
    <Navbar fixed="top" expand="lg" className="navbar">
      <Navbar.Brand href="#home" className="navbar-brand">Namma-Kudla</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
          <NavLink to="/about" className="nav-link" activeClassName="active">About Us</NavLink>
          <NavLink to="/services" className="nav-link" activeClassName="active">Services</NavLink>
          <NavLink to="/Places" className="nav-link" activeClassName="active">Destinations</NavLink>
          <NavLink to="/Contact" className="nav-link" activeClassName="active">Contact Us</NavLink>
          <NavLink to="/login" className="nav-link" activeClassName="active">Login</NavLink>
          <NavLink to="/signup" className="nav-link" activeClassName="active">Register</NavLink>
          <NavLink to="/dashboard" className="nav-link" activeClassName="active">Dashboard</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
