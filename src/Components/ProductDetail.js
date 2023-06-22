import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const ProductDetailPage = () => {
  const location = useLocation();
  const { product } = location.state || {};

  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleCheckout = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setUsername('');
    setPassword('');
  };

  const handleSubmit = () => {
    handleModalClose(); 
  };

  

  const totalPrice = product?.price ? product.price * quantity : 0;

  return (
    <>
      <Header />
      <div className={` mt-3 mb-5 ${showModal ? 'blur' : ''}`}>
        <h2>Product Details</h2>
        {product ? (
          <div className="card">
            <img
              src={product.thumbnail}
              alt={product.name}
              className="card-img-top"
              style={{ height: '200px' }}
            />
            <div className="card-body ">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <div className="d-flex justify-content-between">
                <p className="card-text">
                  <strong>Brand:</strong> {product.brand}
                </p>
                <p className="card-text">
                  <strong>Price:</strong> ${product.price}
                </p>
                
                <div className="d-flex ">
                  <p className="card-text me-2">
                    <strong>Quantity:</strong>
                  </p>
                  <button className="btn btn-outline-primary btn-sm me-2" onClick={handleDecrement}>
                    -
                  </button>
                  <span>{quantity}</span>
                  <button className="btn btn-outline-primary btn-sm ms-2" onClick={handleIncrement}>
                    +
                  </button>
                </div>
                <p className="card-text">
                  <strong>Total Price:</strong> ${totalPrice}
                </p>
                <button className="btn btn-primary" onClick={handleCheckout}>
                  Checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p>No product found.</p>
        )}
        <div className="mt-5">
        <Footer />
        </div>
        
      </div>
      {showModal && (
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Checkout</h5>
                <button type="button" className="btn-close" onClick={handleModalClose}></button>
              </div>
              <div className="modal-body">
                <p>
                  <strong>Product Details:</strong>
                </p>
                <p>{product.title}</p>
                <p>{product.description}</p>
                <p>
                  <strong>Quantity:</strong> {quantity}
                </p>
                <p>
                  <strong>Total Price:</strong> ${totalPrice}
                </p>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleModalClose}>
                  Close
                </button>
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {showModal && <div className="modal-backdrop show"></div>}
      
    </>
  );
};

export default ProductDetailPage;
