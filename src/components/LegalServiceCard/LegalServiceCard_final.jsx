import React from "react";
import "./legalCard.css";
import LegalService from "./LegalService";
import one from "../../assets/card/1.jpg";
import two from "../../assets/card/2.jpg";
import three from "../../assets/card/3.jpg";
import four from "../../assets/card/4.jpg";
import five from "../../assets/card/5.jpg";
import six from "../../assets/card/6.jpg";
import seven from "../../assets/card/7.jpg";
import eight from "../../assets/card/8.jpg";
import nine from "../../assets/card/9.jpg";
import ten from "../../assets/card/10.jpg";
import eleven from "../../assets/card/11.jpg";
import twe from "../../assets/card/12.jpg";
import three_1 from "../../assets/card/13.jpg";
import four_1 from "../../assets/card/14.jpg";
import five_1 from "../../assets/card/15.jpg";
import six_1 from "../../assets/card/16.jpg";
import seven_1 from "../../assets/card/17.jpg";
import nine_1 from "../../assets/card/19.jpg";



const LegalServiceCard_final = () => {
  return (

    <div>
        <br />
        <br />
        <h1 className="legal_service_banner">Legal Servies</h1>
        <div className="legal_service_card_final">
      <LegalService
        heading={"Financial Law"}
        img={one}
        para={
          "Financial law regulates economy, prevents crises, and minimizes financial issues through legislation, oversight, and enforcement on national or global scale."
        }
      />

      <LegalService
        heading={"Arbitration Law"}
        img={two}
        para={
          "Handles disputes outside court system, often involving businesses or individuals seeking to resolve conflicts through alternative dispute resolution methods."
        }
      />

      <LegalService
        heading={"Divorce Law"}
        img={three}
        para={
          "Deals with legal matters related to dissolution of marriage, including child custody, alimony, division of assets, and child support."
        }
      />

      <LegalService
        heading={"Marriage Law"}
        img={four}
        para={
          "Covers legal aspects related to marriage contracts, marital rights, responsibilities, and legal issues surrounding marital status and obligations."
        }
      />

      <LegalService
        heading={"Criminal Law"}
        img={five}
        para={
          "Represents individuals accused of committing crimes and works to defend their rights in criminal proceedings, or prosecutes individuals accused of crimes."
        }
      />

      <LegalService
        heading={"Cheque Law"}
        img={six}
        para={
          "Deals with legal issues related to banking and finance, including regulations, transactions, disputes, and compliance matters."
        }
      />

      <LegalService
        heading={"Corporate Law"}
        img={seven}
        para={
          "Advises businesses on legal matters related to corporate governance, compliance, mergers and acquisitions, contracts, and intellectual property"
        }
      />

      <LegalService
        heading={"Employment Law"}
        img={eight}
        para={
          "Handles legal matters related to the employer-employee relationship, including employment contracts, discrimination, harassment, and wrongful termination."
        }
      />

      <LegalService
        heading={"Real Estate Law"}
        img={nine}
        para={
          "Deals with legal issues related to property transactions, including buying and selling real estate, leases, property development, zoning regulations, and landlord-tenant disputes."
        }
      />

      <LegalService
        heading={"Immigration Law"}
        img={ten}
        para={
          "Assists individuals and businesses with legal matters related to immigration, citizenship, visas, green cards, deportation defense, asylum, and refugee status."
        }
      />

      <LegalService
        heading={"Intellectual Property Law"}
        img={eleven}
        para={
          "Protects the rights of individuals and businesses in their creative and innovative works, including patents, trademarks, copyrights, and trade secrets."
        }
      />

      <LegalService
        heading={"Environmental Law"}
        img={twe}
        para={
          "Deals with legal issues related to environmental regulations, protection of natural resources, pollution control, and sustainability."
        }
      />

      <LegalService
        heading={"Health Law"}
        img={three_1}
        para={
          "Addresses legal matters related to healthcare, including medical ethics, patient rights, healthcare policies, and regulations."
        }
      />

      <LegalService
        heading={"Tax Law"}
        img={four_1}
        para={
          "Handles legal issues related to taxation, tax planning, tax disputes, and compliance with tax laws and regulations."
        }
      />

      <LegalService
        heading={"Entertainment Law"}
        img={five_1}
        para={
          "Deals with legal issues in the entertainment industry, including contracts, intellectual property rights, royalties, and licensing agreements."
        }
      />

      <LegalService
        heading={"Civil Rights Law"}
        img={six_1}
        para={
          "Focuses on protecting individual's rights against discrimination, infringement, and violations of civil liberties and freedoms."
        }
      />

      <LegalService
        heading={"Personal Injury Law"}
        img={seven_1}
        para={
          "Represents individuals injured as a result of another party's negligence or wrongdoing in seeking compensation for damages and losses."
        }
      />

      <LegalService
        heading={"Constitutional Law"}
        img={nine_1}
        para={
          "Addresses legal issues related to interpretation and application of a country's constitution, including constitutional rights and limitations."
        }
      />
    </div>
    </div>
  );
};

export default LegalServiceCard_final;
