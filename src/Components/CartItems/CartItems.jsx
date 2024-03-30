import React, {useContext} from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/Context';
import remove__icon from '../Assests/cart_cross_icon.png';
 
const CartItems = () => {

    const {getTotalCartAmount, all_product, cartItems, removeFromCart} = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className='caertitems__format__main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <div>
        <hr />
        {all_product.map((e) => {
            if(cartItems[e.id] > 0) {
                return  <div>
                            <div className='cartitems__format caertitems__format__main'>
                                <img src={e.image} className='cartitem__product__icon' alt=''/>
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems__quantity'>{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img className="cartitems__remove__icon" onClick={() => {removeFromCart(e.id)}} src={remove__icon} alt=''/>
                            </div>
                            <hr />
                        </div>
            }
            return null;
        })}
        <div className='cartitems__down'>
          <div className='cartitems__total'>
            <h1>Cart Total</h1>
            <div className='cartitems__totalitems'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cartitems__totalitems'>
              <p>Shippingf Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className='cartitems__totalitems'>
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
            <button>PROCEED TO CHECHOUT</button>
          </div>
          <div className='cartitems__promocode'>
          <p>if you have a promocode, Enter it here</p>
          <div className='cartitems__promobox'>
            <input type='text' placeholder='promo code' /> 
            <button>Submit</button>
          </div>
        </div>
        </div>

      </div>
    </div>
  )
}

export default CartItems
