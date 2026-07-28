import React from 'react';
import useFetch from '../../hooks/useFetch';
import PokemonCard from './PokemonCard/PokemonCard';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import { POKEMON_GET, TYPE_GET, GENERATION_GET, POKEMON_LIST } from '../../api/api';

const PokemonsSection = ({ nameOrId, type, generation }) => {
  const { error, loading, request } = useFetch();
  const [pokemonsList, setPokemonsList] = React.useState([]);
  const [debouncedNameOrId, setDebouncedNameOrId] = React.useState(nameOrId);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedNameOrId(nameOrId);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [nameOrId]);

  React.useEffect(() => {
    async function fetchPokemons() {
      setPokemonsList([]);

      let api;

      if (debouncedNameOrId.trim()) {
        api = POKEMON_GET(debouncedNameOrId.trim().toLowerCase());
      } else if (type) {
        api = TYPE_GET(type);
      } else if (generation) {
        api = GENERATION_GET(generation);
      } else {
        api = POKEMON_LIST();
      }

      const { url, options } = api;
      const { json } = await request(url, options);

      if (json) {
        setPokemonsList(api.normalize(json));
      }
    }

    fetchPokemons();
  }, [debouncedNameOrId, type, generation, request]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  if (pokemonsList.length === 0) {
    return null;
  }

  return (
    <section className="pokemons-section">
      {pokemonsList.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemonObject={pokemon} />
      ))}
    </section>
  );
};

export default PokemonsSection;
