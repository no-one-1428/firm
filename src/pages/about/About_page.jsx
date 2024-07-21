import React from 'react'
import './about.css'
import Navbar from '../../components/navbar/Navbar'
import About from '../../components/about_us/About'
import Fotter from '../../components/fotter/Fotter'

const About_page = () => {
  return (
    <div>
        <Navbar markup={2}/>
        <div className='About_image '>
          About Us
        </div>
        <About/>
        <Fotter/>
    </div>
  )
}

export default About_page