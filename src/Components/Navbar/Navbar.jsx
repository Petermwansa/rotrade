import React, { useState } from 'react';
import './Navbar.css';
import logo from "../Assests/logo.png";
import cart_icon from "../Assests/cart_icon.png";
import { Link } from 'react-router-dom';


const Navbar = () => {

    const [menu, setMenu] = useState("shop")

  return (
    <div className='navbar'>
      <div className='nav__log'>
        <img src={logo} alt='' />
        <p>ROTRADE</p>
      </div>
      <ul className='nav__menu'>
        <li onClick={() => {setMenu("shop")}}><Link style={{textDecoration: 'none'}} to={'/'}>Shop</Link> {menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => {setMenu("men")}}><Link style={{textDecoration: 'none'}} to={'/men'}>Men</Link> {menu === "men" ? <hr /> : <></>}</li>
        <li onClick={() => {setMenu("women")}}><Link style={{textDecoration: 'none'}} to={'/women'}>Women</Link> {menu === "women" ? <hr /> : <></>}</li>
        <li onClick={() => {setMenu("kids")}}><Link style={{textDecoration: 'none'}} to={'/kids'}>Kids</Link> {menu === "kids" ? <hr /> : <></>}</li>
      </ul>
      <div className='nav__login__cart'>
        <Link style={{textDecoration: 'none'}} to={'/login'}><button>Login</button></Link> 
        <Link style={{textDecoration: 'none'}} to={'/cart'}><img src={cart_icon} alt=''/></Link>
        <div className='nav__cart__count'>0</div>
      </div>
    </div>
  )
}

export default Navbar
