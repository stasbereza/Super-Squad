import React from "react";
import PropTypes from "prop-types";
import './styles.css';

const Header = ({ text }) => (
  <header className="Header">
    <h1>{text}</h1>
  </header>
);

Header.propTypes = {
  text: PropTypes.string.isRequired
}

export default Header;
