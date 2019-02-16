// Core
import React from "react";
import PropTypes from "prop-types";
// Instruments
import "./styles.css";

const SquadEditorStats = ({ squadStats }) => {
  const { strength, intelligence, speed } = squadStats;

  return (
    <ul className="SquadEditorStats">
      <li>Strength: {strength}</li>
      <li>Intelligence: {intelligence}</li>
      <li>Speed: {speed}</li>
    </ul>
  );
};

SquadEditorStats.propTypes = {
  squadStats: PropTypes.shape({
    strength: PropTypes.number,
    intelligence: PropTypes.number,
    speed: PropTypes.number
  })
};

SquadEditorStats.defaultProps = {
  squadStats: {}
};

export default SquadEditorStats;
