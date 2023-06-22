import React from 'react';

const ModalPopUp = ({ product, username, email, onClose }) => {
  // Implement the modal component based on your preferred styling and libraries
  // You can use CSS, Bootstrap, or any other UI framework to create the modal

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Selected Product</h3>
        <p>Name: {product.name}</p>
        <p>Description: {product.description}</p>
        <p>Price: {product.price}</p>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ModalPopUp;
