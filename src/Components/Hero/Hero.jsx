import React from 'react'
import './Hero.css';
import hand_icon from '../Assests/hand_icon.png'
import arrow_icon from '../Assests/arrow.png'
import hero_image from '../Assests/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__left'>
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className='hero__hand__icon'>
                <p>New</p>
                <img src={hand_icon} alt='' />
            </div>
            <p>Collection</p>
            <p>For Everyone</p>
        </div>
        <div className='hero__latest__button'>
            <div>Latest Collectgion</div>
            <img src={arrow_icon} alt='' />
        </div>
      </div>
      <div className='hero__right'>
        <img src={hero_image} alt=''/>
      </div>
    </div>
  )
}

export default Hero
