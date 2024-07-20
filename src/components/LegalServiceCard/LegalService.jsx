import React from 'react'
import './legalCard.css'


const LegalService = ({heading, img, para}) => {
  return (
    <div className='legal_service_cont'>
        <h2 className='law_name_card'>{heading}</h2>
        <img className='image_of_card' src={img} alt="" />
        <p className='para_of_card'>{para}</p>
        
    </div>
  )
}

export default LegalService