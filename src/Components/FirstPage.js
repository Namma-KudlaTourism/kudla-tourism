import React from 'react';
import { Link } from 'react-router-dom'; 
import '../Components/FirstPage.css';

function FirstPage() {
    return (
        <div className="container">
            <div className="top-sidebar">
            {/* <Link to="/home" className="next-button">Home</Link> */}

            {/* <Link to="/contact" className="next-button">Contact Us</Link> */}
               
            </div>
            <div className="container"></div>
            <h1>Welcome to Namma Kudla</h1>
            <h1>Namma Kudla<br></br> Tourism</h1><br></br>
            <p>" Explore the cultural heritage, natural beauty, and attractions of Kudla."</p>
            <br></br>
            <br></br>
            <Link to="/Places" className="next-button">Select Place</Link> 
        </div>
    );
}

export default FirstPage;