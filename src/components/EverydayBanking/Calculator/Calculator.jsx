import classNames from "classnames";
import React, { useState, useEffect } from "react";
import { Select } from "../../../ui";
import classes from "./Calculator.module.scss";

const Calculator = () => {
  const [formData, setFormData] = useState({
    loan: 32000,
    year: 30,
    intress: 4.5,
  });
  const [payment, setPayment] = useState();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const monthlyRate = formData.intress / 100 / 12;
    const numberOfPayments = formData.year * 12;

    if (monthlyRate === 0) return formData.loan / numberOfPayments;

    const monthlyPayment =
      (formData.loan * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -numberOfPayments));

    setPayment(monthlyPayment.toFixed(1));
  }, [formData]);

  return (
    <div className={classes.container}>
      <div className={classes.formWrapper}>
        <div className={classes.form}>
          <div className={classes.row}>
            <p className={classNames(classes.label, classes.label__form)}>
              Loan size
            </p>
            <div className={classes.slider}>
              <input
                className="range"
                type="range"
                name="loan"
                min="32000"
                max="320000"
                step="1000"
                value={formData.loan}
                onChange={handleInputChange}
              />
              <p className={classes.minPrice}>32000 €</p>
              <p className={classes.maxPrice}>320000 €</p>
              <p
                className={classes.sliderValue}
                style={{ left: `calc(${formData.loan / 3200}% - 50px)` }}
              >
                {formData.loan + " €"}
              </p>
            </div>
          </div>
          <div className={classes.row}>
            <p className={classNames(classes.label, classes.label__form)}>
              Period
            </p>
            <Select
              value={formData.year}
              name="year"
              onChange={handleInputChange}
              options={[
                { value: 20, text: "20 years" },
                { value: 30, text: "30 years" },
                { value: 40, text: "40 years" },
              ]}
            />
          </div>
          <div className={classes.row}>
            <p className={classNames(classes.label, classes.label__form)}>
              Intress
            </p>
            <Select
              value={formData.intress}
              name="intress"
              onChange={handleInputChange}
              options={[
                { value: 3.5, text: "3.5 %" },
                { value: 4.5, text: "4.5 %" },
                { value: 5, text: "5 %" },
              ]}
            />
          </div>
        </div>
      </div>
      <div className={classes.resultWrapper}>
        <div className={classes.header}>
          <p className={classes.label}>Monthly payment</p>
          <p className={classes.label}>
            <span className={classes.result}>{payment}</span>EUR
          </p>
        </div>
        <div className={classes.buttonWrapper}>
          <button className="btn btn-primary">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
