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

    return (
      <section>
        {
          pokemons.map(({ name, type, averageWeight, image }) =>
            <Pokemon
              key={name}
              name={name}
              type={type}
              averageWeight={averageWeight}
              image={image}
            />
          )
        }
      </section>
    );
  }
}

Pokedex.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
  })),
}

Pokedex.defaultProps = {
  pokemons: [],
}
