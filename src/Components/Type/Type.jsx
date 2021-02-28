import React, { Component } from 'react';
import './style.css';

export default class Type extends Component {
  render() {
    const { types } = this.props;
    const typeNames = types.map(({ type }) => type.name);

    return (
      <div className="pokemon__types-wrapper">
        {
          typeNames.map(type => (
            <span className="pokemon__type" key={ type } data-type={ type }>{ type }</span>
          ))
        }
      </div>
    )
  }
}
