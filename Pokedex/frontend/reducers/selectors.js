

export const selectAllPokemon = (state) => {
  const pokemon = [];
  Object.keys(state.entities.pokemon).forEach(pokeId => {
    const poke = state.entities.pokemon[pokeId];
    pokemon.push(poke);
  });
  return pokemon;
};
