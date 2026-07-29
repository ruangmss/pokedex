import React from 'react';
import { useParams } from 'react-router-dom';
import { POKEMON_GET, POKEMON_SPECIES_GET } from '../api/api';
import useFetch from '../hooks/useFetch';

const Pokemon = () => {
  const { name } = useParams();
  const { data: pokemonData, request: requestPokemon } = useFetch();
  const { data: specieData, request: requestSpecie } = useFetch();

  React.useEffect(() => {
    async function fetchPokemon() {
      const { url, options } = POKEMON_GET(name);
      await requestPokemon(url, options);
    }

    fetchPokemon();
  }, [name, requestPokemon]);

  React.useEffect(() => {
    async function fetchSpecie() {
      const { url, options } = POKEMON_SPECIES_GET(name);
      await requestSpecie(url, options);
    }

    fetchSpecie();
  }, [name, requestSpecie]);

  if (!pokemonData) {
    return null;
  }

  return (
    <div>
      {pokemonData.name} {specieData?.generation?.name && <div>{specieData.generation.name}</div>}
    </div>
  );
};

export default Pokemon;
