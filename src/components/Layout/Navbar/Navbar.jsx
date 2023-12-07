import classNames from "classnames";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { ReactSVG } from "react-svg";

import classes from "./Navbar.module.scss";

const Navbar = ({ setBackDrop }) => {
  const location = useLocation();
  const [showTabs, setShowTabs] = useState(false);

  return (
    <div
      onMouseEnter={() => setBackDrop(true)}
      onMouseLeave={() => setBackDrop(false)}
    >
      <div className={classes.borderTop} />
      <div className={classes.header}>
        <a href="/">
          <img
            src="assets/swedbank_logo.png"
            className={classes.logo}
            alt="logo"
          />
        </a>
        <img
          onClick={() => setShowTabs(!showTabs)}
          className={classes.burger}
          src="assets/burger-menu.svg"
          alt="burger-menu"
        />
      </div>
      <div
        className={classNames(
          classes.tabsWrapper,
          !showTabs && classes.tabsWrapper__hide
        )}
      >
        <a
          href="/"
          className={classNames(
            classes.tab,
            location.pathname === "/" && classes.activeTab
          )}
        >
          <ReactSVG src="assets/home.svg" />
          <p>Home</p>
        </a>
        <a
          href="/everyday-banking"
          className={classNames(
            classes.tab,
            location.pathname === "/everyday-banking" && classes.activeTab
          )}
        >
          <ReactSVG src="assets/wallet.svg" />
          <p>Everyday banking</p>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
