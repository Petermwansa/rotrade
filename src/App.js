import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './Components/Pages/ShopCategory';
import Products from './Components/Pages/Products';
import Cart from './Components/Pages/Cart';
import LoginSignUp from './Components/Pages/LoginSignUp';
import Shop from './Components/Pages/Shop';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory category="men"/>} />
          <Route path='/women' element={<ShopCategory category="women" />} />
          <Route path='/kids' element={<ShopCategory  category="kids" />} />
          <Route path='/products' element={<Products />} >
            <Route path=':productId' element={<Products />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

