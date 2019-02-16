// Core
import React, { Fragment } from "react";
import PropTypes from "prop-types";
// Components
import IconButton from "components/IconButton";
import SquadEditorStats from "components/SquadEditorStats";
// Instruments
import { getSquadStats } from "utils/selectors";
import delHero from "assets/icons/icon-bin.svg";
import "./styles.css";

const Squad = ({ ...squad, onDeleteSquad }) => {
  const handleDeleteSquad = () => {
    const { id } = squad;

    onDeleteSquad(id);
  };

  const { squadHeroes } = squad;

  const heroesNameList = squadHeroes.map(hero => <li key={hero.id} className="Squad__card_hero">{`* ${hero.name}`}</li>);

  const squadStats = getSquadStats(squadHeroes);

  return (
    <Fragment>
      <span className="Squad__card_icon-btn">
      <IconButton
        img={`${delHero}#icon-bin`}
        cls="icon-bin"
        onClick={handleDeleteSquad}
      />
      </span>
      <div className="Squad__card_info">
      <div>
        <h4 className="Squad__card_infoHeading">Heroes:</h4>
        <ul className="Squad__card_heroesList">{heroesNameList}</ul>
      </div>
      <div>
        <h4 className="Squad__card_infoHeading">Stats:</h4>
        <SquadEditorStats squadStats={squadStats} />
      </div>
      </div>
    </Fragment>
  );
};

Squad.propTypes = {
  squad: PropTypes.shape({
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
  }),
  onDeleteSquad: PropTypes.func
};

Squad.defaultProps = {
  squad: {},
  onDeleteSquad: () => null,
};

export default Squad;
