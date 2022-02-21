import React, { Component } from "react";
import PropTypes from 'prop-types';

import './NewTaskForm.css';

export default class NewTaskForm extends Component {

  state = {
    value: '',
  };

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  onEnterTask = (e) => {
    e.preventDefault();
    this.props.onAdded(this.state.value);
    this.setState({
      value: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.onEnterTask}>
        <input className="new-todo"
          placeholder="What needs to be done?"
          value={this.state.value}
          onChange={this.onChange}
          autoFocus />
      </form>
    );
  };

  static defaultProps = {
    onAdded: () => { },
  }

  static propTypes = {
    onAdded: PropTypes.func,
  }
};