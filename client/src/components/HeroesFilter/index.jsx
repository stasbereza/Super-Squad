import React, { Component } from "react";
import PropTypes from "prop-types";
import Input from "components/Input";
import "./styles.css";

export default class HeroesFilter extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired
  };

  handleChange = ({ target }) => {
    const { value } = target;
    const { onFilterChange } = this.props;

    onFilterChange(value);
  };

  render() {
    const { filter } = this.props;

    return (
      <form>
        <Input
          name="search"
          value={filter}
          placeholder="Search by name"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
