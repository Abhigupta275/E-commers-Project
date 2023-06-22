import React from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './img/backimg.jpg'

function Hero() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div
        className="hero-section d-flex align-items-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '100vh',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1>Welcome to Our Store</h1>
                <p>Discover amazing products for all your needs.</p>
                {/* <button className="btn btn-primary" onClick={() => navigate("/products")}>
                  Shop Now
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
