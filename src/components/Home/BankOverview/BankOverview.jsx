import React from "react";
import classes from "./BankOverview.module.scss";

const BankOverview = () => {
  const accounts = [
    {
      name: "Siim Tamm",
      iban: "EE572200221057734534",
      balance: "3,342.00",
      credit: "20.00",
      reserved: "725.00",
      available: "900.56 EUR",
    },
    {
      name: "Mari Lepik",
      iban: "EE572200221057734534",
      balance: "50.90",
      credit: "2,000.00",
      reserved: "0.00",
      available: "3,000.00 EUR",
    },
    {
      name: "Liina Roosipõld",
      iban: "EE572200221057734534",
      balance: "12,041.00",
      credit: "20.00",
      reserved: "0.00",
      available: "1,300.12 EUR",
    },
  ];

  const totals = accounts.reduce(
    (acc, account) => {
      return {
        balance: acc.balance + parseFloat(account.balance.replace(/,/g, "")),
        credit: acc.credit + parseFloat(account.credit.replace(/,/g, "")),
        reserved: acc.reserved + parseFloat(account.reserved.replace(/,/g, "")),
        available:
          acc.available +
          parseFloat(account.available.split(" ")[0].replace(/,/g, "")),
      };
    },
    { balance: 0, credit: 0, reserved: 0, available: 0 }
  );

  return (
    <div className={classes.bankOverview}>
      <div className={classes.headerWrapper}>
        <h4 className={classes.header}>Your Swedbank overview</h4>
        <div className={classes.downloadBar}>
          <div className={classes.downloadItem}>
            <img src="assets/pdf.svg" alt="download pdf" />
            <p>PDF</p>
          </div>
          <div className={classes.downloadItem}>
            <img src="assets/pdf.svg" alt="download xsl" />
            <p>XSL</p>
          </div>
        </div>
      </div>
      <table className={classes.table}>
        <thead className={classes.tableHeaders}>
          <tr>
            <th>Account</th>
            <th className={classes.hideOnMobile}>Balance</th>
            <th className={classes.hideOnMobile}>Credit</th>
            <th className={classes.hideOnMobile}>Reserved</th>
            <th>Available</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account, index) => (
            <tr key={index} className={classes.border}>
              <td className={classes.accountWrapper}>
                <a className={classes.name} href="/">
                  {account.name}
                </a>
                {account.iban}
              </td>
              <td className={classes.hideOnMobile}>{account.balance}</td>
              <td className={classes.hideOnMobile}>{account.credit}</td>
              <td className={classes.hideOnMobile}>{account.reserved}</td>
              <td>{account.available}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Total:</th>
            <th className={classes.hideOnMobile}>
              {totals.balance.toFixed(2)}
            </th>
            <th className={classes.hideOnMobile}>{totals.credit.toFixed(2)}</th>
            <th className={classes.hideOnMobile}>
              {totals.reserved.toFixed(2)}
            </th>
            <th>
              <span className={classes.totalAvailable}>
                {totals.available.toFixed(2)}
              </span>
              EUR
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default BankOverview;
