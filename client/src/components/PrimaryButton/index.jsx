// Core
import React from "react";
import PropTypes from "prop-types";
// Components
import Svg from "components/Svg";
// Instruments
import "./styles.css";

const PrimaryButton = ({
  type,
  text,
  name,
  img,
  cls,
  style,
  styleSvg,
  onClick
}) => {
  const svgIcon =
    img && <Svg img={img} style={styleSvg} cls={cls} />;

  return (
    <button
      type={type}
      name={name}
      style={style}
      className="PrimaryButton"
      onClick={onClick}
    >
      {svgIcon}
      {text}
    </button>
  );
};

PrimaryButton.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  name: PropTypes.string,
  img: PropTypes.string,
  cls: PropTypes.string,
  style: PropTypes.shape(),
  styleSvg: PropTypes.shape(),
  onClick: PropTypes.func
};

PrimaryButton.defaultProps = {
  type: "button",
  text: null,
  name: null,
  img: null,
  cls: null,
  style: {},
  styleSvg: {},
  onClick: () => {}
};

export default PrimaryButton;
