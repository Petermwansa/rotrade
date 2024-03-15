import React from 'react';
import './Footer.css';
import footer_logo from '../Assests/logo_big.png';
import instagram_icon from '../Assests/instagram_icon.png'
import pinterest_icon from '../Assests/pintester_icon.png'
import whatsapp_icon from '../Assests/whatsapp_icon.png'


const Footer = () => {

    const year = new Date().getFullYear();

  return (
    <div className='footer'>
      <div className='footer__logo'>
        <img src={footer_logo} alt='' />
        <p>ROTRADE</p>
      </div>
      <ul className='footer__links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contacts</li>
      </ul>
      <div className='footer__social__icon'>
        <div className='footer__icons__container'>
            <img src={instagram_icon} alt='' />
        </div>
        <div className='footer__icons__container'>
            <img src={pinterest_icon} alt='' />
        </div>
        <div className='footer__icons__container'>
            <img src={whatsapp_icon} alt='' />
        </div>
      </div>
      <div className='footer__copyright'>
        <hr />
        <p>Copyright © {year} - All Right Reserved. Rotrade</p>
      </div>
    </div>
  )
}

export default Footer
