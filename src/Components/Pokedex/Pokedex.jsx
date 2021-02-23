import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pokemon from '../Pokemon';
import './style.css';
export default class Pokedex extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      pokemons: null,
    }
  }

  async componentDidMount() {
    const url = 'https://pokeapi.co/api/v2/generation/1/';
    const pokemons = await fetch(url)
      .then(res => res.json())
      .then(res => res.pokemon_species)
      .catch(err => console.log(err));
    this.setState({ pokemons, loading: false });
  }


  render() {
    return (
      <main>
        {
          this.state.loading
            ? <div>Loading...</div>
            : this.state.pokemons.map(({ name }) =>
              <Pokemon
                key={name}
                pokemon={name}
              />
            )
        }
      </main>
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
