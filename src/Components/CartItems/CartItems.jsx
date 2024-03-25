import React, {useContext} from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/Context';
import remove__icon from '../Assests/cart_cross_icon.png';
import cartitem__product from '../Assests/cart_product_icon.png';
 
const CartItems = () => {

    const {all_product, cartItems, removeFromCart} = useContext(ShopContext);

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
                            <div className='cartitems__format'>
                                <img src={e.image} className='cartitem__product__icon' alt=''/>
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems__quantity'>{cartItems[e.id]}</button>
                                <p>{e.new_price * cartItems[e.id]}</p>
                                <img onClick={() => {removeFromCart(e.id)}} src={remove__icon} alt='' className='' />
                            </div>
                            <hr />
                        </div>
            }
        })}
      </div>
    </div>
  )
}

export default CartItems
