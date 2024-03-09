import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from "../Assests/logo.png";
import cart_icon from "../Assests/cart_icon.png";


const Navbar = () => {

    const [menu, setMenu] = useState("shop")

  return (
    <div className='navbar'>
      <div className='nav__log'>
        <img src={logo} alt='' />
        <p>ROTRADE</p>
      </div>
      <ul className='nav__menu'>
        <li onClick={() => {setMenu("shop")}}>Shop{menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => {setMenu("men")}}>Men{menu === "men" ? <hr /> : <></>}</li>
        <li onClick={() => {setMenu("women")}}>Women{menu === "women" ? <hr /> : <></>}</li>
        <li onClick={() => {setMenu("kids")}}>Kids{menu === "kids" ? <hr /> : <></>}</li>
      </ul>
      <div className='nav__login__cart'>
        <button>Login</button>
        <img src={cart_icon} alt='' />
        <div className='nav__cart__count'>0</div>
      </div>
    </div>
  )
}

export default Navbar
