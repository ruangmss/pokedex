import React from 'react';
import useFetch from '../../hooks/useFetch';
import PokemonCard from './PokemonCard/PokemonCard';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import './PokemonsSection.css';
import { TYPE_GET, POKEMON_LIST } from '../../api/api';

const PokemonsSection = ({ nameOrId, type }) => {
  const { error, loading, request } = useFetch();

  const [pokemonsList, setPokemonsList] = React.useState([]);
  const [allPokemons, setAllPokemons] = React.useState([]);
  const [debouncedNameOrId, setDebouncedNameOrId] = React.useState(nameOrId);

  React.useEffect(() => {
    if (!nameOrId.trim()) {
      setDebouncedNameOrId('');
      return;
    }

    const timeout = setTimeout(() => {
      setDebouncedNameOrId(nameOrId);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [nameOrId]);

  React.useEffect(() => {
    async function fetchAllPokemons() {
      const api = POKEMON_LIST(10000);
      const { json } = await request(api.url, api.options);

      if (!json) {
        return;
      }

      setAllPokemons(api.normalize(json));
    }

    fetchAllPokemons();
  }, [request]);

  React.useEffect(() => {
    async function fetchPokemons() {
      const search = debouncedNameOrId.trim().toLowerCase();

      let baseList = allPokemons;

      if (type) {
        const api = TYPE_GET(type);
        const { json } = await request(api.url, api.options);

        if (!json) {
          return;
        }

        baseList = api.normalize(json);
      }

      const filteredList = baseList.filter((pokemon) => {
        const pokemonId = pokemon.url?.split('/').filter(Boolean).pop();
        const matchesSearch = !search || pokemon.name.toLowerCase().includes(search) || pokemonId === search;

        return matchesSearch;
      });

      setPokemonsList(filteredList.slice(0, 20));
    }

    fetchPokemons();
  }, [allPokemons, debouncedNameOrId, type, request]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  if (pokemonsList.length === 0) {
    return (
      <div className="container">
        <p>Nenhum Pokémon encontrado para os filtros inseridos.</p>
      </div>
    );
  }

  return (
    <section className="pokemons-section container">
      {pokemonsList.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </section>
  );
};

export default PokemonsSection;
