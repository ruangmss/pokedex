import React from 'react';
import useFetch from '../../../hooks/useFetch';
import Loading from '../../Loading/Loading';
import Error from '../../Error/Error';
import { POKEMON_GET } from '../../../api/api';

const PokemonCard = ({ pokemonObject }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchPokemon() {
      const { url, options } = POKEMON_GET(pokemonObject.name);
      await request(url, options);
    }

    fetchPokemon();
  }, [pokemonObject.name, request]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  if (!data) {
    return null;
  }

  return <article>{data.name}</article>;
};

export default PokemonCard;
