const BASE_URL = 'https://pokeapi.co/api/v2';

export function POKEMON_LIST(limit = 20, offset = 0) {
  return {
    url: `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`,
    options: {},
    normalize: (json) => json.results,
  };
}

export function POKEMON_GET(nameOrId) {
  return {
    url: `${BASE_URL}/pokemon/${nameOrId}`,
    options: {},
    normalize: (json) => [json],
  };
}

export function POKEMON_SPECIES_GET(name) {
  return {
    url: `${BASE_URL}/pokemon-species/${name}`,
    options: {},
  };
}

export function EVOLUTION_CHAIN_GET(id) {
  return {
    url: `${BASE_URL}/evolution-chain/${id}`,
    options: {},
  };
}

export function TYPE_GET(type) {
  return {
    url: `${BASE_URL}/type/${type}`,
    options: {},
    normalize: (json) => json.pokemon.map(({ pokemon }) => pokemon),
  };
}

export function GENERATION_GET(generation) {
  return {
    url: `${BASE_URL}/generation/${generation}`,
    options: {},
    normalize: (json) => json.pokemon_species,
  };
}
