import React, { useEffect } from "react";
import "./Adovocate.css";
import advocate_manju_prajapati from "../../assets/advocate/advocate_manju_prajapati.jpeg";
import anshul from "../../assets/advocate/anshul.jpeg";
import sanjev_goyal from "../../assets/advocate/sanjev_goyal.jpeg";
import visas from "../../assets/advocate/vikas.jpeg";

function Advocates() {
  return (
    <div className="ourteam">
      <h1 className="our_team_banner">Our Team</h1>

      <div className="our_team_cont">
        <section className=" adovates_cont">
          <img src={advocate_manju_prajapati} alt="Advocate Manju Prajapati" />
          <section className="other_details">
            <h1 className="heading_advocate_card">Advocate Manju Prajapati</h1>
            <p className="para_advocate_card">
              Introducing Advocate Manju Prajapati, the esteemed founder of our
              firm. Embarking on her legal journey, Advocate Manju brings vision
              and leadership, guiding our team towards excellence with passion
              and dedication.
            </p>
            <button className="button_call_now">
              <a className="hmm-hv" href="tel:91-7428476457">
                <section className="section_idk_whyisthis">
                  <h3 className="h3_useless">Call Me</h3>
                  <span className="material-symbols-outlined text_call">call</span>
                </section>
              </a>
            </button>
          </section>
        </section>

        <section className="adovates_cont ">
          <img src={sanjev_goyal} alt="Advocate Sanjeev Goyal" />
          <section className="other_details">
            <h1 className="heading_advocate_card">Adv. Sanjeev Goyal</h1>
            <p className="para_advocate_card">
              Meet Adv. Sanjeev Goyal, an esteemed member of our legal team.
              Commencing practice in 2013, Sanjeev brings years of experience and
              expertise to our firm, enriching our commitment to excellence.
            </p>
            <button className="button_call_now">
              <a className="hmm-hv" href="tel:91-7428476457">
                <section className="section_idk_whyisthis">
                  <h3 className="h3_useless">Call Me</h3>
                  <span className="material-symbols-outlined text_call">call</span>
                </section>
              </a>
            </button>
          </section>
        </section>


        <section className="adovates_cont ">
          <img src={visas} alt="Advocate Vikas Bhadoria" />
          <section className="other_details">
            <h1 className="heading_advocate_card">Adv. Vikas Bhadoria</h1>
            <p className="para_advocate_card">
              Meet Vikas Bhadoria, a distinguished member of our legal team.
              Working in Sadar Tehsil Ghaziabad, Vikas brings expertise and
              dedication to our firm's mission.
            </p>
            <button className="button_call_now">
              <a className="hmm-hv" href="tel:91-7428476457">
                <section className="section_idk_whyisthis">
                  <h3 className="h3_useless">Call Me</h3>
                  <span className="material-symbols-outlined text_call">call</span>
                </section>
              </a>
            </button>
          </section>
        </section>

        <section className="adovates_cont ">
          <img src={anshul} alt="Advocate Anshul Kumar" />
          <section className="other_details">
            <h1 className="heading_advocate_card">Adv. Anshul Kumar</h1>
            <p className="para_advocate_card">
              Introducing Anshul Kumar, an integral part of our legal team. With a
              practice commencement in low term's, Anshul adds seasoned experience
              and professionalism to our firm's ethos.
            </p>
            <button className="button_call_now">
              <a className="hmm-hv" href="tel:91-7428476457">
                <section className="section_idk_whyisthis">
                  <h3 className="h3_useless">Call Me</h3>
                  <span className="material-symbols-outlined text_call">call</span>
                </section>
              </a>
            </button>
          </section>
        </section>
      </div>
    </div>
  );
}

export default Advocates;
