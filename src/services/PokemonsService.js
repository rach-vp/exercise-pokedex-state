export default class Pokemons {
  init() {
    return fetch("https://pokeapi.co/api/v2/generation/1/")
    .then((res) => res.json())
    .then((res) => res.pokemon_species)
    .catch((err) => {
      console.error(err);
      throw new Error('Cannot get pokemons list');
    });
  }
}