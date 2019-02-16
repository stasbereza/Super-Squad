// Core
import React from "react";
import PropTypes from "prop-types";
// Instruments
import "./styles.css";

const makeOptions = num => {
  const elements = [];

  for (let i = 1; i <= num; i += 1) {
    elements.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  return elements;
};

const CreateHeroSelect = ({ name, value, onChange }) => (
  <select name={name} value={value} onChange={onChange}>
    <option value={name}>{name}</option>
    {makeOptions(10)}
  </select>
);

CreateHeroSelect.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default CreateHeroSelect;
