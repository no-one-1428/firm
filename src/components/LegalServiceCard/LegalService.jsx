import React from 'react'
import './legalCard.css'
import { useEffect } from 'react';


const LegalService = ({heading, img, para}) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className='legal_service_cont hidden' >
        <h2 className='law_name_card'>{heading}</h2>
        <img className='image_of_card' src={img} alt="" />
        <p className='para_of_card'>{para}</p>
        
    </div>
  )
}

export default LegalService