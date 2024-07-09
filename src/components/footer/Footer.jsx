import React from 'react'
import footerImg from '../../assets/footerImage.png'

import './Footer.css'

const Footer = () => {
  return (
    <div className='container'>
        <img className='footer-img' src={footerImg} alt="image" />
    </div>
  )
}

export default Footer