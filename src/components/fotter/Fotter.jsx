import React from "react";
import "./fotter.css";

import { Link } from "react-router-dom";
const Fotter = () => {
  return (
    <>
<div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14023.62867085884!2d77.46703850781249!3d28.512440599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceb739f652ea3%3A0x312878a116d22484!2sAdvocate%20Association!5e0!3m2!1sen!2sin!4v1721499484696!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Advocate Association Location"
      ></iframe>
    </div>
        <footer className="fotter">
      <div className="fotter_1_box">

        <Link className="noline" to={`/`}>
        <h2 className="w bf h2_in_foot">
          Advocate
          <br />
          Association's
        </h2>
        </Link>

        <a href="tel:+91-7428476457" className="herf_phone">
        <div className="bf" herf='google.com'>
            
            <span className="material-symbols-outlined call_foot">
                call
            </span>

            <h3 className="w">+91-7428476457</h3>
        </div>
        </a>

        <a href="mailto: info@advocateassociation.com" className="herf_phone">
            <div className="bf">

            <span class="material-symbols-outlined call_foot">
                mail
            </span>
            <h3 className="w">info@advocatesassociations.com</h3>
            </div>
        </a>

        <div className="social_handles bf">
        <i class="fa-brands fa-instagram fa_socials"></i>
        <i class="fa-brands fa-square-facebook fa_socials"></i>
        <i class="fa-brands fa-linkedin-in fa_socials"></i>
        </div>

      </div>

      <br />


      <div className="second_half_foot">
        <ul className="second_half_list">
          <Link className="noline" to={`/`}><li className="pointers">Home</li></Link>
          <Link className="noline" to={`/about`}> <li className="pointers" >About Us</li></Link>
          <Link className="noline" to={`/contact`}> <li className="pointers" >Contact Us</li></Link>
          <Link className="noline" to={`/`}><li className="pointers" >Privacy Policy</li></Link>
          <Link className="noline" to={`/`}><li className="pointers" >Questions</li></Link>
        </ul>
      </div>
      <br />
      <div className="braker_f"></div>

      <div className="last_foot">
      © 1998-2024 Advocate Associations. All rights reserved.
      </div>
    </footer></>
  );
};

export default Fotter;
