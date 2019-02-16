// Core
import React from "react";
import PropTypes from "prop-types";
// Instruments
import "./styles.css";

const Panel = ({ title, children }) => (
  <div className="Panel">
    <h2>{title}</h2>
    {children}
  </div>
);

Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

Panel.defaultProps = {
  title: "",
  children: []
};

export default Panel;
