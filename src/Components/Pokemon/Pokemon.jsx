import React, { Component } from 'react';
import Tilt from 'react-vanilla-tilt';
import PropTypes from 'prop-types';
import Type from '../Type';
import Sprite from '../Sprite';
import './style.css';

export default class Pokemon extends Component {
  render() {
    const { name, types, sprites } = this.props;

    return (
      <Tilt className="pokemon" options={{ max: 50, speed: 500}}>
        <h4 className="pokemon__name">{name}</h4>
        <Type types={ types } />
        <Sprite sprites={ sprites } />
      </Tilt>
    )
  }
}
