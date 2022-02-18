import React, { Component } from "react";
import PropTypes from 'prop-types';

import FilterButtons from "../FilterButtons";

import './TasksFilter.css';

export default class TasksFilter extends Component {

  render() {
    const filterButtons = this.props.buttonData.map(item => {
      const { id, ...rest } = item;

      return <FilterButtons {...rest}
        key={id}
        onToggleFilter={() => this.props.onFiltered(id)}
      />
    });

    return (
      <ul className="filters">
        {filterButtons}
      </ul>
    );
  };

  static defaultProps = {
    onFiltered() { },
  };

  static propTypes = {
    onFiltered: PropTypes.func,
    buttonData: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string,
      selected: PropTypes.bool,
    })),
  }
};