// Core
import React from "react";
import PropTypes from "prop-types";
// Components
import SquadHero from "components/SquadHero";
// Instruments
import "./styles.css";

const SquadHeroesList = ({ squadHeroes, ...props }) => {
  const squadHeroesList = squadHeroes.map(hero => (
    <li key={hero.id} className="SquadHeroesList__item">
      <SquadHero {...hero} {...props} />
    </li>
  ));

  return <ul className="SquadHeroesList">{squadHeroesList}</ul>;
};

SquadHeroesList.propTypes = {
  squadHeroes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
};

export default SquadHeroesList;
