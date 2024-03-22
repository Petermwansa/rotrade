import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className='descriptionbox__nav'>
        <div className='descriptionbox__nav__box'>Description</div>
        <div className='descriptionbox__nav__box fade'>Reviews (122)</div>
      </div>

      <div className='descriptionbox__des'>
        <p>
            An e-commerce website is one that allows people to buy and sell physical goods, 
            services, and digital products over the internet rather than at a brick-and-mortar location. 
            Through an e-commerce website, a business can process orders, accept payments, 
            manage shipping and logistics, and provide customer service.
        </p>
        <p>
            It is the virtual space where you showcase products, 
            and online customers make selections. Your website acts as the product shelves, 
            sales staff, and cash register of your online business channel.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox;
