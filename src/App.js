import React from 'react'
import Header from './Components/Header'
import "./App.css";
import Hero from './Components/Hero';
import ProductList from './Components/ProductList';
import ProductDetail from './Components/ProductDetail';
import LogIn from './LogIn';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart';
import Favorites from './Components/Favoriates';
import Footer from './Components/Footer';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/header' element={<Header/>} />
        <Route path='/products' element={<ProductList/>} />
          <Route path="/productdetail" element={<ProductDetail />} />
          <Route path="/" element={<Hero />} />
        <Route path='/cart' element={<Cart />}/>
        <Route path='/favorites' element={<Favorites />}/>
        <Route path='/login' element={<LogIn />} />
        <Route path='/footer' element={<Footer />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App