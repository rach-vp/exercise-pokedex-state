import React, { Component } from "react";
import "./App.css";
import Pokedex from "./Components/Pokedex";
import PokemonsService from "./services/PokemonsService";

class App extends Component {
  render() {
    return <Pokedex />;
  }
}

export default App;
