import React from 'react';
import './PokemonCard.css';
import useFetch from '../../../hooks/useFetch';
import { POKEMON_GET } from '../../../api/api';
import { Link } from 'react-router-dom';
import fallback from '../../../assets/images/fallback-image.webp';

const PokemonCard = ({ pokemon }) => {
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

  const { data: pokemonData, request: requestPokemon } = useFetch();
  const { data: specie, request: requestSpecie } = useFetch();

  React.useEffect(() => {
    async function fetchPokemon() {
      const { url, options } = POKEMON_GET(pokemon.name);
      await requestPokemon(url, options);
    }

    fetchPokemon();
  }, [pokemon.name, requestPokemon]);

  React.useEffect(() => {
    if (!pokemonData?.species?.url) return; // Na primeira renderização é null

    async function fetchSpecie() {
      await requestSpecie(pokemonData.species.url);
    }

    fetchSpecie();
  }, [pokemonData, requestSpecie]);

  if (!pokemonData) {
    return null;
  }

  const image =
    pokemonData.sprites?.other?.['official-artwork']?.front_default ||
    pokemonData.sprites?.other?.home?.front_default ||
    pokemonData.sprites?.front_default ||
    fallback;

  return (
    <Link to={`/pokemon/${pokemonData.name}`} className="pokemon-card">
      <div className="pokemon-card-image">
        <img src={image} alt={`Imagem do Pokémon ${pokemon.name}`} />
      </div>

      <div className="pokemon-card-data">
        <span>#{pokemonData.id}</span>
        {specie?.generation?.name && (
          <span className="pokemon-card-data-generation">{generations[specie.generation.name]}</span>
        )}
      </div>

      <h2>{pokemonData.name}</h2>

      <div className="pokemon-card-types">
        {pokemonData.types.map((item) => (
          <span
            key={item.type.name}
            style={{
              border: `0.5px solid var(--type-${item.type.name})`,
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
