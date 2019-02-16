// Core
import React, { Component } from "react";
import v4 from "uuid/v4";
// Components
import Header from "components/Header";
import Panel from "components/Panel";
import HeroesList from "components/HeroesList";
import HeroesFilter from "components/HeroesFilter";
import CreateHeroForm from "components/CreateHeroForm";
import SquadEditor from "components/SquadEditor";
import SavedSquadsList from "components/SavedSquadsList";
// Instruments
import { getVisibleHeroes, getSquadHeroes } from "utils/selectors";
import dataBase from "../../db.json";
import "./styles.css";

export default class App extends Component {
  state = {
    heroes: [],
    squadHeroesIds: [],
    savedSquads: [],
    filter: ""
  };

  componentDidMount() {
    this.setState({
      heroes: [...dataBase.heroes]
    });
  }

  getHeroInfo = id => {
    const { heroes } = this.state;

    heroes.find(hero => {
      if (hero.id === id) {
        /* eslint-disable-next-line no-console */
        console.log(
          `[Hero info]:
            name: ${hero.name},
            strength: ${hero.strength},
            intelligence: ${hero.intelligence},
            speed: ${hero.speed}
          `
        );
      }
      return null;
    });
  };

  addHero = ({ name, strength, intelligence, speed }) => {
    this.setState(state => ({
      heroes: [
        {
          id: v4(),
          name,
          strength,
          intelligence,
          speed
        },
        ...state.heroes
      ]
    }));
  };

  addHeroToSquad = id => {
    this.setState(state => ({
      squadHeroesIds: [...state.squadHeroesIds, id]
    }));
  };

  deleteHero = id => {
    this.setState(state => ({
      heroes: state.heroes.filter(hero => hero.id !== id)
    }));
  };

  deleteHeroFromSquad = id => {
    this.setState(state => ({
      squadHeroesIds: state.squadHeroesIds.filter(
        squadHeroId => squadHeroId !== id
      )
    }));
  };

  handleFilterChange = str => {
    this.setState({ filter: str });
  };

  resetSquadEditor = () => {
    this.setState({
      squadHeroesIds: []
    });
  };

  saveSquad = squadHeroes => {
    this.setState(state => ({
      savedSquads: [
        {
          id: v4(),
          squadHeroes
        },
        ...state.savedSquads
      ]
    }));
  };

  deleteSquad = id => {
    this.setState(state => ({
      savedSquads: state.savedSquads.filter(savedSquad => savedSquad.id !== id)
    }));
  };

  render() {
    const { heroes, filter, squadHeroesIds, savedSquads } = this.state;

    const availableHeroes = getVisibleHeroes(heroes, squadHeroesIds, filter);
    const squadHeroes = getSquadHeroes(heroes, squadHeroesIds);

    return (
      <div className="App">
        <Header text="super squad" />
        <div className="Main">
          <Panel title="create hero">
            <CreateHeroForm onFormSubmit={this.addHero} />.
          </Panel>
          <Panel title="heroes">
            <HeroesFilter
              filter={filter}
              onFilterChange={this.handleFilterChange}
            />
            {heroes.length > 0 ? (
              <HeroesList
                heroes={availableHeroes}
                onAddHeroToSquad={this.addHeroToSquad}
                onDeleteHero={this.deleteHero}
                onGetHeroInfo={this.getHeroInfo}
              />
            ) : (
              <p className="App__message">All heroes are deleted!</p>
            )}
          </Panel>
          <Panel title="squad editor">
            <SquadEditor
              squadHeroes={squadHeroes}
              onDeleteHeroFromSquad={this.deleteHeroFromSquad}
              onGetHeroInfo={this.getHeroInfo}
              onSaveSquad={this.saveSquad}
              onResetSquadEditor={this.resetSquadEditor}
            />
          </Panel>
          <Panel title="saved squads">
            <SavedSquadsList
              squads={savedSquads}
              onDeleteSquad={this.deleteSquad}
            />
          </Panel>
        </div>
      </div>
    );
  }
}
