import React from 'react';
import useFetch from '../../hooks/useFetch';
import PokemonCard from './PokemonCard/PokemonCard';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import './PokemonsSection.css';
import { TYPE_GET, POKEMON_LIST } from '../../api/api';
import MessageBox from '../MessageBox/MessageBox';

const PokemonsSection = ({ nameOrId, type, offset, setTotalPages }) => {
  const { error, loading, request } = useFetch();

  const [pokemonsList, setPokemonsList] = React.useState([]);
  const [allPokemons, setAllPokemons] = React.useState([]);

  React.useEffect(() => {
    async function fetchAllPokemons() {
      const api = POKEMON_LIST(10000, 0);
      const { json } = await request(api.url, api.options);

      if (!json) {
        return;
      }

      const normalizedPokemons = api.normalize(json);

      setAllPokemons(normalizedPokemons);
    }

    fetchAllPokemons();
  }, [request]);

  React.useEffect(() => {
    async function fetchPokemons() {
      const search = nameOrId.trim().toLowerCase();

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

      setTotalPages(Math.ceil(filteredList.length / 20));

      const startIndex = offset;
      const endIndex = offset + 20;

      setPokemonsList(filteredList.slice(startIndex, endIndex));
    }

    fetchPokemons();
  }, [allPokemons, nameOrId, type, request, offset, setTotalPages]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  if (pokemonsList.length === 0) {
    return (
      <MessageBox
        title="Nenhum Pokémon encontrado"
        message="Tente alterar o nome ou o tipo para realizar uma nova busca."
      />
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
