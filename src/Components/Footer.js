import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>Contact Us</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5>Categories</h5>
            <ul className="list-unstyled">
              <li>Electronics</li>
              <li>Clothing</li>
              <li>Books</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li>Shipping &amp; Returns</li>
              <li>Track Order</li>
              <li>Customer Service</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5>Connect with Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#facebook">Facebook</a>
              </li>
              <li>
                <a href="#twitter">Twitter</a>
              </li>
              <li>
                <a href="#linkedin">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container text-center mt-3">
        <p>&copy; {new Date().getFullYear()} Your E-commerce Store. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
