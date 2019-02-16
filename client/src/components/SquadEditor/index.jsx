// Core
import React, { Component } from "react";
import PropTypes from "prop-types";
// Components
import SquadHeroesList from "components/SquadHeroesList";
import SquadEditorStats from "components/SquadEditorStats";
import PrimaryButton from "components/PrimaryButton";
// Instruments
import { getSquadStats } from "utils/selectors";
import saveSquad from "assets/icons/icon-floppy-disk.svg";
import resetSquad from "assets/icons/icon-spinner.svg";
import "./styles.css";

export default class SquadEditor extends Component {
  static propTypes = {
    squadHeroes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired
      })
    ),
    onSaveSquad: PropTypes.func,
    onDeleteHeroFromSquad: PropTypes.func,
    onGetHeroInfo: PropTypes.func,
    onResetSquadEditor: PropTypes.func
  };

  static defaultProps = {
    squadHeroes: [],
    onSaveSquad: () => {},
    onResetSquadEditor: () => {},
    onDeleteHeroFromSquad: () => {},
    onGetHeroInfo: () => {}
  };

  handleResetSquadEditor = () => {
    const { onResetSquadEditor } = this.props;

    onResetSquadEditor();
  };

  handleSaveSquad = () => {
    const { squadHeroes, onSaveSquad } = this.props;

    onSaveSquad(squadHeroes);
    this.handleResetSquadEditor();
  };

  render() {
    const { squadHeroes, onDeleteHeroFromSquad, onGetHeroInfo } = this.props;

    const squadStats = getSquadStats(squadHeroes);

    return (
      <div className="SquadEditor">
        <div className="SquadEditor__button_actions">
          <PrimaryButton
            type="button"
            text="save squad"
            style={{ width: 138 }}
            img={`${saveSquad}#icon-floppy-disk`}
            cls="icon"
            onClick={this.handleSaveSquad}
          />
          <PrimaryButton
            type="button"
            text="reset editor"
            style={{ width: 138 }}
            img={`${resetSquad}#icon-spinner4`}
            cls="icon"
            onClick={this.handleResetSquadEditor}
          />
        </div>
        <SquadEditorStats squadStats={squadStats} />
        <SquadHeroesList
          squadHeroes={squadHeroes}
          onDeleteHeroFromSquad={onDeleteHeroFromSquad}
          onGetHeroInfo={onGetHeroInfo}
        />
      </div>
    );
  }
}
