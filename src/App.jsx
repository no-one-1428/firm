import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import logo from "./assets/logo.png";
import ContactForm from "./ContactForm"; 
import Advocates from './components/advocates/Advocates'
import LegalServiceCard_final from "./components/LegalServiceCard/LegalServiceCard_final.jsx";
import Fotter from "./components/fotter/Fotter.jsx";

function App() {
  return (
    <>

      <Navbar markup={1} />
      <br />

      <div className="main_heading_cont">
        <section className="heading_after_nav">
          <img className="logo_in_heading" src={logo} alt="" />
          <section className="section_heading_with_logo">
            <br />
            <h1 className="heading_1_main">
              Empowering Your Rights, Guiding Your Justice
            </h1>
            <h2 className="heading_1_main">WE ARE Advocate Associations</h2>
            <h1 className="heading_1_main bond">Advocates & Legal Consultants</h1>
            <button className="button_consult">Consult</button>
          </section>
        </section>

        {/* Render ContactForm component */}
        <ContactForm />
      </div>

      <Advocates/>
      <LegalServiceCard_final/>
      <Fotter/>
      
    </>
  );
}

export default App;
