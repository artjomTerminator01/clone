import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

import classes from "./Layout.module.scss";

const Layout = ({ children }) => {
  const [backDrop, setBackDrop] = useState(false);

  return (
    <>
      <Navbar setBackDrop={setBackDrop} />
      <div
        className={backDrop && classes.backdrop}
        onMouseEnter={() => setBackDrop(false)}
      />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
