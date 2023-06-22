import React from 'react';

const Favorites = ({ favoriteItems , onRemoveFevItem }) => {

  const handleRemoveItem = (itemId) => {
    onRemoveFevItem(itemId);
  };
  
  return (
    <div>
      <h2>Favorites</h2>
      <div className="cart-container overflow-auto" style={{ maxHeight: '400px' }}>
        {favoriteItems && favoriteItems.length > 0 ? (
          <div className="cart-items">
            {favoriteItems.map((item) => (
              <div key={item.id} className="card mb-3">
                <div className="card-body">
                <img
                src={item.thumbnail}
                alt={item.name}
                className="card-img-top"
                style={{ height: '100px', width: '100%'}}
              />
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">Description: {item.description}</p>
                  <p className="card-text">Price: {item.price}</p>
                  <button className="btn btn-danger" onClick={() => handleRemoveItem(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;




