import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Header = ({ cartCount,cartItems, favoritesCount, onCartClick,onFavClick, isLogIn }) => {
    const navigate = useNavigate()

 
 

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img src="logo1.png" alt="logo" width="60" height="30" />
      </a>
      <div className="collapse navbar-collapse d-flex justify-content-end">
        <ul className="navbar-nav">
          <li className="nav-item" onClick={onFavClick} style={{cursor:"pointer"}}>
              {favoritesCount > 0 && (
                <span
                  className="badge rounded-circle bg-danger text-dark"
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "100px",
                    zIndex: "1",
                  }}
                >
                  {favoritesCount}
                </span>
              )}
          </li>
          <li className="nav-item"  onClick={onCartClick} style={{cursor:"pointer"}}>
              {cartCount > 0 && (
                <span
                  className="badge rounded-circle bg-success text-dark"
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "150px",
                    zIndex: "1",
                  }}
                >
                  {cartCount}
                </span>
              )}
          </li>
          <li className="nav-item">
            
           <button className="btn btn-primary mx-2" onClick={()=>navigate("/login")}> Login</button>
            
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
