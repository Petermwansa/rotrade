import React from 'react';
import './ProductDisplay.css';
import star_icon from '../Assests/star_icon.png';
import star_dull_icon from '../Assests/star_dull_icon.png';

const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='product__display'>
      <div className='product__display__left'>
        <div className='product__display__img__list'>
            <img src={product.image} alt='' />        
            <img src={product.image} alt='' />        
            <img src={product.image} alt='' />        
            <img src={product.image} alt='' />        
        </div>
        <div className='product__display__img'>
            <img src={product.image} className='product__display__main__img' alt='' />
        </div>
      </div>
      <div className='product__display__right'>
        <h1>{product.name}</h1>
        <div className='product__display__right__star'>
            <img src={star_icon} alt='' />
            <img src={star_icon} alt='' />
            <img src={star_icon} alt='' />
            <img src={star_icon} alt='' />
            <img src={star_dull_icon} alt='' />
            <p>(122)</p>
        </div>
        <div className='product__display__right__prices'>
            <div className='product__display__right__oldprice'>${product.old_price}</div>
            <div className='product__display__right__newprice'>${product.new_price}</div>
        </div>
        <div className='product__display__right__description'>
            Customers like the color and style of the sweatshirt. 
            They mention it has actual color choices rather than grey. 
            However, some customers have reported issues with the sleeve, 
            quality and fit. They say the cuffs have become unwoven 
        </div>
        <div className='product__display__right__size'>
            <h1>Select Size</h1>
            <div className='product__display__right__sizes'>
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button>ADD TO CART</button>
        <p className='product__display__right__category'><span>Category : </span> Women , T-Shirt, Crop Top</p>
        <p className='product__display__right__category'><span>Tags : </span> Modern , Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
