import React from 'react'
import './Item.css';

const Item = (props) => {
  return (
    <div className='item'>
      <img src={props.image} alt='' />
      <p>{props.name}</p>
      <div className='item__prices'>
        <div className='item__price__new'>
            {props.new_price}
        </div>
        <div className='item__price__old'>
            {props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item
