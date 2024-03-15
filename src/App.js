import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './Components/Pages/ShopCategory';
import Products from './Components/Pages/Products';
import Cart from './Components/Pages/Cart';
import LoginSignUp from './Components/Pages/LoginSignUp';
import Shop from './Components/Pages/Shop';
import Footer from './Components/Footer/Footer';
import men_banner from "../src/Components/Assests/banner_mens.png"
import women_banner from "../src/Components/Assests/banner_women.png"
import kids from "../src/Components/Assests/banner_kids.png"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>} />
          <Route path='/women' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kids}  category="kid" />} />
          <Route path='/products' element={<Products />} >
            <Route path=':productId' element={<Products />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

