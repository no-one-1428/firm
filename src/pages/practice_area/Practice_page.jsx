import React from 'react'
import './practice.css'
import Navbar from '../../components/navbar/Navbar'
import Fotter from '../../components/fotter/Fotter'
import LegalServiceCard_final from '../../components/LegalServiceCard/LegalServiceCard_final'

const Practice_page = () => {
  return (
    <div>
        <Navbar markup={4}/>


        <div className='Practice_area'>
          <h1 className='main_office'>Main Office</h1>
          <br />
          <br />
          <div className='part_2'>
            <div>
              <img className='district_court'  src="https://www.mappls.com/place/OUN7EZ_1678362364063_0.png" alt="" />
            <h2>Surajpur Court / Distict Court, UP</h2>
            </div>

            <div>
              <img className='district_court' src="https://www.livelaw.in/h-upload/2019/11/21/750x450_366885-allahabad-high-court-1.jpg" alt="" />
            <h2>prayagraj Court / High Court, UP</h2>
            </div>
           
            
          </div>

        </div>
        <LegalServiceCard_final/>
        <Fotter/>
    </div>
  )
}

export default Practice_page