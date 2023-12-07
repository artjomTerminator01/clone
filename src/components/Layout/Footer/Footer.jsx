import React, { useState } from "react";
import { ReactSVG } from "react-svg";

import classes from "./Footer.module.scss";

const Footer = () => {
  const linkColumns = [
    {
      title: "Quicklinks",
      links: [
        { title: "Calculators", dropdown: ["Item1", "Item2"] },
        { title: "Prices", dropdown: ["Item1", "Item2"] },
        { title: "Terms of service", dropdown: ["Item1", "Item2"] },
        { title: "Privacy and security", dropdown: ["Item1", "Item2"] },
      ],
    },
    {
      title: "Join Swedbank",
      links: [
        { title: "Client programs", dropdown: ["Item1", "Item2"] },
        { title: "Business customers", dropdown: ["Item1", "Item2"] },
        { title: "Jobs", dropdown: ["Item1", "Item2"] },
        { title: "Internships", dropdown: ["Item1", "Item2"] },
      ],
    },
    {
      title: "Tooted",
      links: [
        { title: "Everyday banking", dropdown: ["Item1", "Item2"] },
        { title: "Loans", dropdown: ["Item1", "Item2"] },
        { title: "Insurance", dropdown: ["Item1", "Item2"] },
        { title: "Cards", dropdown: ["Item1", "Item2"] },
        { title: "Stocks", dropdown: ["Item1", "Item2"] },
      ],
    },
  ];
  const [toggledTitles, setToggledTitles] = useState({});

  const media = ["facebook", "instagram", "youtube", "twitter", "skype"];
  const cridentials = [
    "SWEDBANK AS",
    "Liivalaia 8, 15040 Tallinn",
    "Swift kood/BIC HABAEE2X",
    "Reg number: 10060701",
  ];

  const toggleTitle = (index) => {
    setToggledTitles((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div>
      <div className={classes.borderTop} />
      <div className={classes.contactsWrapper}>
        <div className={classes.contactsContainer}>
          <div className={classes.column}>
            <h4 className={classes.title}>Contact</h4>
            <h3 className={classes.phone}>6 310 310</h3>
            <a href="/" className={classes.email}>
              info@swedbank.ee
            </a>
            {cridentials.map((cridential, index) => (
              <p key={index} className={classes.cridential}>
                {cridential}
              </p>
            ))}
            <div className={classes.mediaContainer}>
              {media.map((icon, index) => (
                <img
                  src={`assets/social-media/${icon}.svg`}
                  alt={icon}
                  key={index}
                />
              ))}
            </div>
          </div>

          {linkColumns.map((column, index) => (
            <div key={index} className={classes.column}>
              <div
                className={classes.titleToggleWrapper}
                onClick={() => toggleTitle(index)}
              >
                <h4 className={classes.title}>{column.title}</h4>
                <ReactSVG
                  src="assets/arrow.svg"
                  beforeInjection={(svg) => {
                    svg.classList.add(classes.arrow);
                    !toggledTitles[index] &&
                      svg.classList.add(classes.arrow__active);
                  }}
                />
              </div>

              {column.links.map((link, indexC) => (
                <div
                  key={indexC}
                  className={!toggledTitles[index] && classes.hideLinks}
                >
                  <p className={classes.link}>▸ {link.title}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <p className={classes.text}>
        This is a website of companies offering financial services – Swedbank
        AS, Swedbank Liising AS, Swedbank P&C Insurance AS, Swedbank Life
        Insurance SE, and Swedbank Investeerimisfondid AS. Before entering into
        any agreement read the terms and conditions of the respective service.
        Consult a specialist, where necessary. Swedbank AS does not provide a
        credit advisory service for the purposes of the Creditors and Credit
        Intermediaries Act. The borrower makes the decision of taking out a
        loan, who assesses the suitability of the loan product and contractual
        terms to his/her personal loan interest, need and financial situation on
        the basis of the information and warnings presented by the bank and is
        responsible for the consequences related to concluding the agreement.
      </p>
    </div>
  );
};

export default Footer;
