import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pokemon from '../Pokemon';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './style.css';


export default class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      length: 0,
    };
    this.nextCard = this.nextCard.bind(this);
    this.prevCard = this.prevCard.bind(this);
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

  componentDidUpdate(prevProps) {
    const { pokemons } = this.props;
    if(pokemons !== prevProps.pokemons) {
      this.setState({ length: pokemons.length });
    }
  }

  render() {
    const { pokemons } = this.props;
    const { currentIndex } = this.state;

    return (
      <main>
        <FaArrowAltCircleLeft className="left-arrow" onClick={ this.prevCard }/>
        <FaArrowAltCircleRight className="right-arrow" onClick={ this.nextCard } />
        {
          pokemons.map(({ name, type, averageWeight, image }, index) => {
            return index === currentIndex
              ? <Pokemon
                  key={name}
                  name={name}
                  type={type}
                  averageWeight={averageWeight}
                  image={image}
                  className="visible"
                />
              : <Pokemon
                  key={name}
                  name={name}
                  type={type}
                  averageWeight={averageWeight}
                  image={image}
                  className="hidden"
                />
            }
          )
        }
        {/* <FaArrowAltCircleRight className="right-arrow" onClick={ this.nextCard } /> */}
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
