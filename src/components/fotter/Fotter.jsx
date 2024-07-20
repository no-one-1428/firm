import React from "react";
import "./fotter.css";

const Fotter = () => {
  return (
    <footer className="fotter">
      <div className="fotter_1_box">
        <h2 className="w h2_in_foot">
          Advocate
          <br />
          Association's
        </h2>
        <div>
            <span className="material-symbols-outlined call_foot">
                call
            </span>

            <h3 className="w">+91-7428476457</h3>
        </div>
        <div>
            <span class="material-symbols-outlined call_foot">
                mail
            </span>
            <h3 className="w">info@advocatesassociations.com</h3>
        </div>
      </div>
    </footer>
  );
};

export default Fotter;
