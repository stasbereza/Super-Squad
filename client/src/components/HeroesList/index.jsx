import React from "react";
import PropTypes from "prop-types";
import Hero from "components/Hero";
import "./styles.css";

const HeroesList = ({ heroes, ...props }) => {
  const heroesList = heroes.map(hero => (
    <li key={hero.id} className="HeroesList__item">
      <Hero {...hero} {...props} />
    </li>
  ));

  return <ul className="HeroesList">{heroesList}</ul>;
};

HeroesList.propTypes = {
  heroes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
};

export default HeroesList;
