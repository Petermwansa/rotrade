import React from 'react';
import './Offers.css';
import exclusive_image from '../Assests/exclusive_image.png';

const Offers = () => {
  return (
    <div className='offers'>
      <div className='offers__left'>
        <h1>Exclusive Offers</h1>
        <h1>For You</h1>
        <p>ONLY ON BEST SELLERS</p>
        <button>Check Now</button>
      </div>
      <div className='offers__right'>
        <img src={exclusive_image} alt='' />
      </div>
    </div>
  )
}

export default Offers
