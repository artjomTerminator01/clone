import classNames from "classnames";
import React, { useState } from "react";
import { Select } from "../../../ui";
import classes from "./Payment.module.scss";

const Payment = () => {
  const [formData, setFormData] = useState({
    account: "",
    savedPayment: "",
    amount: "",
    currency: "EUR",
    description: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.account) newErrors.account = "Account selection is required.";
    if (!formData.savedPayment)
      newErrors.savedPayment = "Saved payment selection is required.";
    if (!formData.amount) {
      newErrors.amount = "Amount is required.";
    } else if (isNaN(formData.amount)) {
      newErrors.amount = "Amount must be a number.";
    }
    if (!formData.description)
      newErrors.description = "Description is required.";
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className={classes.container}>
      <form className={classes.formWrapper}>
        <div className={classes.row}>
          <label className="label">Account</label>
          <div className={classes.inputsWrapper}>
            <div className={classes.errorWrapper}>
              <Select
                value={formData.account}
                name="account"
                onChange={handleInputChange}
                options={[
                  { value: "", text: "Select an account" },
                  { value: "account1", text: "Account name 1" },
                  { value: "account2", text: "Account name 2" },
                ]}
              />
              {errors.account && (
                <p className="error-message">{errors.account}</p>
              )}
            </div>
          </div>
        </div>

        <div className={classes.row}>
          <label className="label">Saved payments</label>
          <div className={classes.inputsWrapper}>
            <div className={classes.errorWrapper}>
              <Select
                value={formData.savedPayment}
                name="savedPayment"
                onChange={handleInputChange}
                options={[
                  { value: "", text: "Select a saved payment" },
                  { value: "payment1", text: "Payment 1" },
                  { value: "payment2", text: "Payment 2" },
                ]}
              />
              {errors.savedPayment && (
                <p className="error-message">{errors.savedPayment}</p>
              )}
            </div>
          </div>
        </div>

        <div className={classes.row}>
          <label className="label">Amount</label>
          <div className={classes.inputsWrapper}>
            <div className={classes.errorWrapper}>
              <input
                name="amount"
                type="text"
                value={formData.amount}
                onChange={handleInputChange}
                className={classNames(
                  "text-input",
                  errors.amount && "text-input__error"
                )}
              />
              {errors.amount && (
                <p className="error-message">{errors.amount}</p>
              )}
            </div>

            <div className={classes.currencyInput}>
              <Select
                value={formData.currency}
                name="currency"
                onChange={handleInputChange}
                options={[
                  { value: "EUR", text: "EUR" },
                  { value: "USD", text: "USD" },
                ]}
              />
            </div>
          </div>
        </div>

        <div className={classes.row}>
          <label className="label">Description</label>
          <div className={classes.inputsWrapper}>
            <div className={classes.errorWrapper}>
              <input
                name="description"
                type="text"
                value={formData.description}
                onChange={handleInputChange}
                className={classNames(
                  "text-input",
                  errors.description && "text-input__error"
                )}
              />

              {errors.description && (
                <p className="error-message">{errors.description}</p>
              )}
            </div>
          </div>
        </div>
      </form>
      <div className={classes.buttonsBox}>
        <button onClick={validateForm} className="btn btn-secondary">
          Save
        </button>
        <button className="btn btn-primary">Pay</button>
      </div>
    </div>
  );
};

export default Payment;
