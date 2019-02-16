// Core
import React, { Component } from "react";
import PropTypes from "prop-types";
// Components
import IconButton from "components/IconButton";
// Instruments
import delHero from "assets/icons/icon-bin2.svg";
import heroInfo from "assets/icons/icon-info.svg";
import "./styles.css";

export default class SquadHero extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    onDeleteHeroFromSquad: PropTypes.func.isRequired,
    onGetHeroInfo: PropTypes.func.isRequired
  };

  handleDelete = () => this.props.onDeleteHeroFromSquad(this.props.id);

  handleGetInfo = () => this.props.onGetHeroInfo(this.props.id);

  render() {
    const { name } = this.props;

    return (
      <div className="SquadHero__card">
        <p>{name}</p>
        <div className="SquadHero__actions">
          <IconButton
            img={`${delHero}#icon-bin2`}
            cls="icon-bin"
            onClick={this.handleDelete}
          />
          <IconButton
            img={`${heroInfo}#icon-info`}
            cls="icon-info"
            onClick={this.handleGetInfo}
          />
        </div>
      </div>
    );
  }
}
