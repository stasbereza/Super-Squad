// Core
import React from "react";
import PropTypes from "prop-types";
// Components
import Squad from "components/Squad";
// Instruments
import "./styles.css";

const SavedSquadsList = ({ squads, ...props }) => {
  const savedSquads = squads.map(squad => (
    <li key={squad.id} className="SavedSquadsList__item">
      <Squad {...squad} {...props} />
    </li>
  ));

  return <ul className="SavedSquadsList">{savedSquads}</ul>;
};

SavedSquadsList.propTypes = {
  squads: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      squadHeroes: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          strength: PropTypes.number.isRequired,
          intelligence: PropTypes.number.isRequired,
          speed: PropTypes.number.isRequired
        })
      )
    })
  )
};

SavedSquadsList.defaultProps = {
  squads: []
};

export default SavedSquadsList;
