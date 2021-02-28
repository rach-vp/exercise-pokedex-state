import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pokemon from '../Pokemon';
import './style.css';


export default class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      length: 0,
    };
  }

  render() {
    const { pokemons } = this.props;
    console.log(pokemons);

    return (
      <section>
        {
          pokemons.map(({ name, types, sprites }) =>
            <Pokemon
              key={name}
              name={name}
              types={types}
              sprites={sprites}
            />
          )
        }
      </section>
    );
  }
}
