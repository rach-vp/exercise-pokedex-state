import React, { Component } from "react";
import "./App.css";
import Pokedex from "./Components/Pokedex";
import PokedexPromise from 'pokedex-promise-v2';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

class App extends Component {
  constructor(props) {
    super(props);
    this.pokedex = new PokedexPromise();
    this.state = {
      loading: true,
      pokemons: [],
      currentIndex: 0,
      length: 0,
    }
    this.prevCard = this.prevCard.bind(this);
    this.nextCard = this.nextCard.bind(this);
    this.getFilteredList = this.getFilteredList.bind(this);
  }

  prevCard() {
    const { currentIndex: current, length } = this.state;
    this.setState(() => {
      return current === 0
      ? { currentIndex: length - 1 }
      : { currentIndex: current - 1 };
    });
  }

  nextCard() {
    const { currentIndex: current, length } = this.state;
    this.setState(() => {
      return current === length - 1
      ? { currentIndex: 0 }
      : { currentIndex: current + 1 };
    });
  }

  async componentDidMount() {
    const pokemons = await this.pokedex
      .getPokemonsList()
      .then(res => res.results)
      .catch(err => err);
    this.setState({ pokemons, length: pokemons.length, loading: false });
  }

  getFilteredList() {
    const { pokemons, currentIndex } = this.state;
    return pokemons.filter((_pokemon, index) => index === currentIndex);
  }

  render() {
    const { loading } = this.state;

    return (
      loading
      ? <div>LOADING...</div>
      : (
          <main>
            <FaArrowAltCircleLeft className="left-arrow" onClick={ this.prevCard }/>
            <FaArrowAltCircleRight className="right-arrow" onClick={ this.nextCard } />
            <Pokedex pokemons={ this.getFilteredList() } />
          </main>
        )
    );
  }
}

export default App;
