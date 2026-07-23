const BASE_URL = 'https://pokeapi.co/api/v2';

export function POKEMON_LIST(limit = 20, offset = 0) {
  return {
    url: `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`,
    options: {
      method: 'GET',
    },
  };
}

export function POKEMON_GET(name) {
  return {
    url: `${BASE_URL}/pokemon/${name}`,
    options: {
      method: 'GET',
    },
  };
}

export function POKEMON_SPECIES_GET(name) {
  return {
    url: `${BASE_URL}/pokemon-species/${name}`,
    options: {
      method: 'GET',
    },
  };
}

export function EVOLUTION_CHAIN_GET(id) {
  return {
    url: `${BASE_URL}/evolution-chain/${id}`,
    options: {
      method: 'GET',
    },
  };
}

export function TYPE_GET(type) {
  return {
    url: `${BASE_URL}/type/${type}`,
    options: {
      method: 'GET',
    },
  };
}

export function GENERATION_GET(id) {
  return {
    url: `${BASE_URL}/generation/${id}`,
    options: {
      method: 'GET',
    },
  };
}
