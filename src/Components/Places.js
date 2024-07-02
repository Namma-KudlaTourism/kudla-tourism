import React from 'react';
import { Link } from 'react-router-dom';

import '../Components/Style.css';
import a from '../Pictuers/Udupi.jpg';
import b from '../Pictuers/mangalore.jpg';
import c from '../Pictuers/Kundapura.jpg';
import d from '../Pictuers/Karkala.jpg';

const ImageGallery = () => {
    return (
        <div className="gallery-wrapper">
            <div className="back-button-container">
                <Link to="/" className="back-button">
                    <button>Back</button>
                </Link>
            </div>
            <div className="image-gallery-container">
                <div className="image-gallery-item">
                    <Link to="/UdupiOptions" target="_blank">
                        <img src={a} alt="Udupi" />
                    </Link>
                    <br />
                    <p className="button-like">UDUPI</p>
                </div>
                <div className="image-gallery-item">
                    <Link to="/Options2" target="_blank">
                        <img src={b} alt="Mangalore" />
                    </Link>
                    <br />
                    <p className="button-like">MANGALURU</p>
                </div>
                <div className="image-gallery-item">
                    <Link to="/Options3" target="_blank">
                        <img src={c} alt="Kundapura" />
                    </Link>
                    <br />
                    <p className="button-like">KUNDAPURA</p>
                </div>
                <div className="image-gallery-item">
                    <Link to="/Options4" target="_blank">
                        <img src={d} alt="Karkala" />
                    </Link>
                    <br />
                    <p className="button-like">KARKALA</p>
                </div>
            </div>
        </div>
    );
};

export default ImageGallery;
