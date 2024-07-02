import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import '../Components/Style.css';
import r from '../Pictuers/r.jpg';
import c from '../Pictuers/c.jpg';
import t from '../Pictuers/t.jpg';
import p from '../Pictuers/p.jpg';

const ImageGallery = () => {
    return (
        <div>
            <Link to="/Mnglrtourist" className="back-button">
                <button>Back</button>
            </Link>
            <div className="image-gallery-container">
                 <div className="image-gallery-row">
                     <div className="image-gallery-item">
                    <Link to="/Mnglrtourist" target="_blank"> 
                        <img src={r} alt="restro" />
                    </Link>
                    <br></br>
                    <p className="button-like">Restaurants</p>
                </div>
                <div className="image-gallery-item">
                    <Link to="/Mnglrtourist" target="_blank"> 
                        <img src={c} alt="cafe" />
                    </Link>
                    <br></br>
                    <p className="button-like">CAFE'S</p>
                </div>
            </div>
            <div className="image-gallery-row">
                <div className="image-gallery-item">
                    <Link to="/Mnglrtourist" target="_blank"> 
                        <img src={t} alt="tourist" />
                    </Link>
                    <br></br>
                    <p className="button-like">TOURIST PLACES</p>
                </div>
                <div className="image-gallery-item">
                    <Link to="/Mnglrtourist" target="_blank"> 
                        <img src={p} alt="resort" />
                    </Link>
                    <br></br>
                    <p className="button-like">RESORTS</p>
                </div>
            </div>
        </div>
    </div> 
    );
}

export default ImageGallery;