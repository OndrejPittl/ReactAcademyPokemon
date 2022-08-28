
// API
// GET https://pokeapi.co/api/v2/pokemon
// GET https://pokeapi.co/api/v2/pokemon/<pokemon-name>

export const ApiConfig = {
  BASE: 'https://pokeapi.co/api/v2',
  POKEMON: {
    BASE: '/pokemon',
    GET_ALL: () => `${ApiConfig.POKEMON.BASE}`,
    GET_ONE: (pokemon: string) => `${ApiConfig.POKEMON.BASE}/${pokemon}`,
  }
};