import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Cart from './Cart';
import "./ProductList.css"
import Favorites from './Favoriates';


const ProductList = ({isLogIn}) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [isHidden, setIsHidden] = useState(false);
  const [isHiddenFav, setIsHiddenFav] = useState(false);

  const navigate = useNavigate();


  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  const handleViewProduct = (product) => {
    navigate(`/productdetail?id=${product.id}`, { state: { product } });
  };


  const handleAddToFavorites = (product) => {
    setFavoriteItems([...favoriteItems, product]);
  };

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  console.log(cartItems);

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const handleRemoveFevItem = (itemId) => {
    const updatedFavItems = favoriteItems.filter((item) => item.id !== itemId);
    setFavoriteItems(updatedFavItems);
  };


  const handleCartClick = () => {
    console.log(cartItems);
    setIsHidden(!isHidden);
  };

  const handleFavClick = () =>{
    setIsHiddenFav(!isHiddenFav)
  }

  return (
    <div>
      <Header
        cartCount={cartItems.length}
        favoritesCount={favoriteItems.length}
        onCartClick={handleCartClick}
        onFavClick = {handleFavClick}
        isLogIn={isLogIn}
      />

      <div className= {isHidden || isHiddenFav ? 'hidden': ""} >
      <h1>Product List</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card h-100 d-flex flex-column">
              <img
                src={product.thumbnail}
                alt={product.name}
                className="card-img-top"
                style={{ height: '200px', width: '100%'}}
              />
              <div className="card-body mt-auto">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <div className="d-flex justify-content-between">
                  <p className="card-text">
                    <strong>Brand:</strong> {product.brand}
                  </p>
                  <p className="card-text">
                    <strong>Price:</strong> ${product.price}
                  </p>
                  <p className="card-text">
                    <strong>Stock:</strong> {product.stock}
                  </p>
                  <p className="card-text">
                    <strong>Rating:</strong> {product.rating}
                  </p>
                </div>
                <div className="d-flex justify-content-end justify-content-between mt-3">
                  <button className="btn btn-primary me-2" onClick={() => handleViewProduct(product)}>
                    View
                  </button>
                  <button className="btn btn-secondary" onClick={() => handleAddToFavorites(product)}>
                    Favorite
                  </button>
                  <button className="btn btn-success" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
            </div>
      <div className={isHidden ? "":"hidden"}>
        <div className='col-md-12'>
        <Cart cartItems={cartItems} onRemoveItem={handleRemoveItem}/>
        </div>
          <div className="header-icons">
            {favoriteItems.length > 0 && (
              <span className="badge badge-danger">{favoriteItems.length}</span>
              )}
            {cartItems.length > 0 && (
              <span className="badge badge-success" onClick={handleCartClick}>
                {cartItems.length}
              </span>
            )}
            </div>
        </div>
      <div className={isHiddenFav ? "":"hidden"}>
        <div className='col-md-12'>
        <Favorites favoriteItems={favoriteItems} onRemoveFevItem={handleRemoveFevItem}/>
        </div>
          <div className="header-icons">
            {favoriteItems.length > 0 && (
              <span className="badge badge-danger">{favoriteItems.length}</span>
              )}
            {favoriteItems.length > 0 && (
              <span className="badge badge-success" onClick={handleFavClick}>
                {favoriteItems.length}
              </span>
            )}
            </div>
        </div>
      <Footer />
    </div>
  );
};

export default ProductList;
