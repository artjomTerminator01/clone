import React, { useState } from "react";
import classNames from "classnames";

import Layout from "../Layout";
import Welcome from "./Welcome";
import Payment from "./Payment";
import Calculator from "./Calculator";

import classes from "./EverydayBanking.module.scss";

const EverydayBanking = () => {
  const [selectedTab, setSelectedTab] = useState("payment");

  return (
    <Layout>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <h3 className={classes.title}>Igapäevapangandus</h3>
          <div className={classes.tabsWrapper}>
            <p
              onClick={() => setSelectedTab("payment")}
              className={classNames(
                classes.tab,
                selectedTab === "payment" && classes.tab__selected
              )}
            >
              Payment
            </p>
            <p
              onClick={() => setSelectedTab("calculator")}
              className={classNames(
                classes.tab,
                selectedTab === "calculator" && classes.tab__selected
              )}
            >
              Calculator
            </p>
          </div>
          <div className={classes.card}>
            {selectedTab === "payment" ? <Payment /> : <Calculator />}
          </div>
          <div className={classes.card}>
            <Welcome />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EverydayBanking;
