import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Input = ({ type, name, value, placeholder, onChange }) => (
  <input
    className="Input"
    type={type}
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
};

export default Input;
