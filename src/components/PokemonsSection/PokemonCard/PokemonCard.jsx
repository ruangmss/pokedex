import React from 'react';
import './PokemonCard.css';
import useFetch from '../../../hooks/useFetch';
import PokemonCardSkeleton from './PokemonCardSkeleton/PokemonCardSkeleton';
import { POKEMON_GET, POKEMON_SPECIES_GET } from '../../../api/api';
import { Link, useLocation } from 'react-router-dom';
import fallback from '../../../assets/images/fallback-image.webp';

const pokemonTypes = {
  normal: 'Normal',
  fire: 'Fogo',
  water: 'Água',
  electric: 'Elétrico',
  grass: 'Grama',
  ice: 'Gelo',
  fighting: 'Lutador',
  poison: 'Veneno',
  ground: 'Terra',
  flying: 'Voador',
  psychic: 'Psíquico',
  bug: 'Inseto',
  rock: 'Pedra',
  ghost: 'Fantasma',
  dragon: 'Dragão',
  dark: 'Sombrio',
  steel: 'Aço',
  fairy: 'Fada',
};

const generations = {
  'generation-i': '1ª Geração',
  'generation-ii': '2ª Geração',
  'generation-iii': '3ª Geração',
  'generation-iv': '4ª Geração',
  'generation-v': '5ª Geração',
  'generation-vi': '6ª Geração',
  'generation-vii': '7ª Geração',
  'generation-viii': '8ª Geração',
  'generation-ix': '9ª Geração',
};

const PokemonCard = ({ pokemon }) => {
  const {
    data: pokemonData,
    request: requestPokemon,
    loading: pokemonDataLoading,
    error: pokemonDataError,
  } = useFetch();
  const { data: specieData, request: requestSpecie } = useFetch();
  const { pathname, search } = useLocation();

  React.useEffect(() => {
    async function fetchPokemon() {
      const { url, options } = POKEMON_GET(pokemon.name);
      await requestPokemon(url, options);
    }

    fetchPokemon();
  }, [pokemon.name, requestPokemon]);

  React.useEffect(() => {
    async function fetchSpecie() {
      const { url, options } = POKEMON_SPECIES_GET(pokemon.name);
      await requestSpecie(url, options);
    }

    fetchSpecie();
  }, [pokemon.name, requestSpecie]);

  if (pokemonDataLoading || (!pokemonData && !pokemonDataError)) {
    return <PokemonCardSkeleton />;
  }

  if (pokemonDataError || !pokemonData) {
    return null;
  }

  const image =
    pokemonData.sprites?.other?.['official-artwork']?.front_default ||
    pokemonData.sprites?.other?.home?.front_default ||
    pokemonData.sprites?.front_default ||
    fallback;

  return (
    <Link
      to={`/pokemon/${pokemonData.name}`}
      state={{ from: `${location.pathname}${location.search}` }}
      className="pokemon-card"
    >
      <div className="pokemon-card-image">
        <img src={image} alt={`Imagem do Pokémon ${pokemon.name}`} />
      </div>

      <div className="pokemon-card-data">
        <span>#{pokemonData.id}</span>

        {specieData?.generation?.name && (
          <span className="pokemon-card-data-generation">{generations[specieData.generation.name]}</span>
        )}
      </div>

      <h2>{pokemonData.name}</h2>

      <div className="pokemon-card-types">
        {pokemonData.types.map((item) => (
          <span
            key={item.type.name}
            style={{
              border: `1px solid color-mix(in srgb, var(--type-${item.type.name}) 20%, white)`,
              color: `var(--type-${item.type.name})`,
              backgroundColor: `var(--type-${item.type.name}-bg)`,
            }}
          >
            {pokemonTypes[item.type.name]}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default PokemonCard;
