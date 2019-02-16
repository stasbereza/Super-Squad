// Core
import React, { Component } from "react";
import PropTypes from "prop-types";
// Components
import Input from "components/Input";
import CreateHeroSelect from "components/CreateHeroSelect";
import PrimaryButton from "components/PrimaryButton";
// Instruments
import editPencil from "assets/icons/edit_pencil.svg";
import "./styles.css";

const INITIAL_STATE = {
  name: "",
  strength: 0,
  intelligence: 0,
  speed: 0
};

export default class CreateHeroForm extends Component {
  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired
  };

  static defaultProps = {};

  state = { ...INITIAL_STATE };

  handleInputChange = ({ target }) => {
    const { name, value } = target;

    const number = Number(value);
    const correctTypeValue = number ? Number(value) : value;

    this.setState({ [name]: correctTypeValue });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { name, strength, intelligence, speed } = this.state;
    const { onFormSubmit } = this.props;

    const hero = {
      ...this.state
    };

    if (name === "" || strength === 0 || intelligence === 0 || speed === 0) {
      return;
    }

    onFormSubmit(hero);

    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, strength, intelligence, speed } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="CreateHeroForm">
        <Input
          name="name"
          value={name}
          placeholder="Hero name"
          onChange={this.handleInputChange}
        />
        <CreateHeroSelect
          name="strength"
          value={strength}
          onChange={this.handleInputChange}
        />
        <CreateHeroSelect
          name="intelligence"
          value={intelligence}
          onChange={this.handleInputChange}
        />
        <CreateHeroSelect
          name="speed"
          value={speed}
          onChange={this.handleInputChange}
        />
        <PrimaryButton
          type="submit"
          text="add hero"
          img={`${editPencil}#pencil`}
          styleSvg={{ width: 18, height: 18 }}
        />
      </form>
    );
  }
}
