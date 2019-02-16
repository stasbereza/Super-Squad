// Core
import React from "react";
import PropTypes from "prop-types";

const Svg = ({ img, width, height, style, cls }) => (
  <svg style={style} className={cls}>
    <use href={img} width={width} height={height} />
  </svg>
);

Svg.propTypes = {
  img: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.shape(),
  cls: PropTypes.string
};

Svg.defaultProps = {
  img: "",
  width: null,
  height: null,
  style: {},
  cls: null
};

export default Svg;
