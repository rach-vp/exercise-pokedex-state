import React, { Component } from "react";
import "./App.css";
import Pokedex from "./Components/Pokedex";
import PokedexPromise from 'pokedex-promise-v2';

class App extends Component {
  constructor(props) {
    super(props)
    this.pokedex = new PokedexPromise();
    this.state = {
      loading: false,
      pokemons: [],
    }
  }

  async componentDidMount() {
    const pokemons = await this.pokedex
      .getPokemonsList()
      .then(res => res.results)
      .catch(err => err);
    this.setState({ pokemons, loading: true });
  }

  render() {
    const { pokemons } = this.state;

    return <Pokedex pokemons={ pokemons } />;
  }
}

export default App;
