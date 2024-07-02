import React from 'react';
import { Link } from 'react-router-dom';

import '../Components/Style.css';
import r from '../Pictuers/r.jpg';
import c from '../Pictuers/c.jpg';
import t from '../Pictuers/t.jpg';
import BackButton from '../Components/Backbutton';

const KarkalaOptions = () => {
    return (
        <div>
        <Link to="/next" className="back-button">
            <button>Back</button>
        </Link>
        <div className="image-gallery-container">
            <div className="image-gallery-row">
                <div className="image-gallery-item">
                    <Link to="/karestaurants" target="_blank"> 
                        <img src={r} alt="restro" />
                    </Link>
                    <br></br>
                    <p className="button-like">Restaurants</p>
                </div>
                <div className="image-gallery-item">
                    <Link to="/kacafes" target="_blank"> 
                        <img src={c} alt="cafe" />
                    </Link>
                    <br></br>
                    <p className="button-like">CAFE'S</p>
                </div>
            </div>
            <div className="image-gallery-row">
                <div className="image-gallery-item">
                    <Link to="/katouristplaces" target="_blank"> 
                        <img src={t} alt="tourist" />
                    </Link>
                    <br></br>
                    <p className="button-like">TOURIST PLACES</p>
                </div>
                
            </div>
        </div>
     </div>
    );
}

export default KarkalaOptions;






