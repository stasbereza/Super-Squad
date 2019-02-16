// Core
import React, { Component } from "react";
import PropTypes from "prop-types";
// Components
import IconButton from "components/IconButton";
// Instruments
import addHero from "assets/icons/user-plus.svg";
import delHero from "assets/icons/icon-bin.svg";
import heroInfo from "assets/icons/icon-info.svg";
import "./styles.css";

export default class Hero extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    onAddHeroToSquad: PropTypes.func.isRequired,
    onDeleteHero: PropTypes.func.isRequired,
    onGetHeroInfo: PropTypes.func.isRequired
  };

  handleAddHero = () => this.props.onAddHeroToSquad(this.props.id);

  handleDelete = () => this.props.onDeleteHero(this.props.id);

  handleGetInfo = () => this.props.onGetHeroInfo(this.props.id);

  render() {
    const { name } = this.props;

    return (
      <div className="Hero__card">
        <p>{name}</p>
        <div className="Hero__actions">
          <IconButton
            img={`${addHero}#icon-user-plus`}
            cls="icon-user-plus"
            onClick={this.handleAddHero}
          />
          <IconButton
            img={`${delHero}#icon-bin`}
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
