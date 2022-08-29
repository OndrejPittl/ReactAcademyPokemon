
// API
// GET https://pokeapi.co/api/v2/pokemon
// GET https://pokeapi.co/api/v2/pokemon/<pokemon-name>
// GET https://pokeapi.co/api/v2/pokemon?offset=20&limit=20

export const ApiConfig = {
  BASE: 'https://pokeapi.co/api/v2',
  POKEMON: {
    BASE: '/pokemon',
    GET_ALL: (offset: number, limit: number) => `${ApiConfig.POKEMON.BASE}?offset=${offset}&limit=${limit}`,
    GET_ONE: (pokemon: string) => `${ApiConfig.POKEMON.BASE}/${pokemon}`,
  }
};


