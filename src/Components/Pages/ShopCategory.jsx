import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../../Context/Context';
import dropdown_icon from '../Assests/dropdown_icon.png'
import Item from '../Item/Item';

const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext)


  return (
    <div className='shop__category'>
      <img className='shopCategory__banner' src={props.banner} alt='' />
      <div className='shopcategory__indexSort'>
        <p>
            <span>Showing 1-12</span> out of <span>36</span> products
        </p>
        <div className='shopcategory__sort'>
            Sort by <img src={dropdown_icon} alt='' />
        </div>
      </div>
      <div className='shopcategory__products'>
        {all_product.map((item, index) => {
            if(props.category === item.category) {
                return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            } else {
                return null;
            }
        })}
      </div>
      <div className='shopcategory__loadmore'>
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
