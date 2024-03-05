import React from 'react'

function Card({ image, title, subtitle, link }) {
  return (
    <div className='card'>
      <img src={image} alt='card image' className='card-image'/>
        <div className='card-content'>
          <h2 className='card-title'>{title}</h2>
          <h4 className='card-subtitle'>{subtitle}</h4>
        </div>
        <a href={link} className='more-btn'>
          Read More
        </a>
    </div>
  )
}

export default Card