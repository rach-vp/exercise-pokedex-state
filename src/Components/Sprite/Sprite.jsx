import React, { Component } from 'react';
import './style.css';

export default class Sprite extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false,
    }
    this.swapSprite = this.swapSprite.bind(this);
  }

  swapSprite() {
    this.setState((prevState) => ({ hover: !prevState.hover }))
  }

  render() {
    const { sprites: { front_default, back_default } } = this.props;
    const { hover } = this.state;

    return (
      <div className="pokemon__sprites-wrapper">
        <img
          src={ hover ? back_default : front_default }
          alt="Pokemons sight"
          onMouseOver={ this.swapSprite }
          onMouseLeave={ this.swapSprite }
          className="pokemon__sprite"
        />
      </div>
    )
  }
}
