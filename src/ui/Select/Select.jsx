import React from "react";

const Select = ({ value, name, onChange, defaultValue, options }) => {
  return (
    <div className="select-wrapper">
      <select
        className="select-input"
        name={name}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      <div className="dropdown-icon">
        <div className="dropdown-icon__triangle dropdown-icon__triangle__up"></div>
        <div className="dropdown-icon__triangle"></div>
      </div>
    </div>
  );
};

export default Select;
