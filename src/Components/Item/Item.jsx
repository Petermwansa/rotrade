import React from 'react'
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/products/${props.id}`}><img src={props.image} alt='' /></Link>
      <p>{props.name}</p>
      <div className='item__prices'>
        <div className='item__price__new'>
            ${props.new_price}
        </div>
        <div className='item__price__old'>
            ${props.old_price}
        </div>
      </div>
    </div>
  )
}



export default Item
