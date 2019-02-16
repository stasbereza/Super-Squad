// Core
import React from "react";
import PropTypes from "prop-types";
// Components
import Svg from "components/Svg";
// Instruments
import "./styles.css";

const IconButton = ({ type, name, img, cls, style, onClick }) => {
  const svgIcon = img && <Svg img={img} style={style} cls={cls} />;

  return (
    <button type={type} name={name} className="IconButton" onClick={onClick}>
      {svgIcon}
    </button>
  );
};

IconButton.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  img: PropTypes.string,
  cls: PropTypes.string,
  style: PropTypes.shape(),
  onClick: PropTypes.func
};

IconButton.defaultProps = {
  type: "button",
  name: null,
  img: null,
  cls: null,
  style: {},
  onClick: () => {}
};

export default IconButton;
