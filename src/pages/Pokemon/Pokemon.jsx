import React from "react";
import useFetch from "../../hooks/useFetch";
import "./Pokemon.css";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { POKEMON_GET, POKEMON_SPECIES_GET } from "../../api/api";
import fallback from "../../assets/images/fallback-image.webp";
import arrow from "../../assets/icons/arrow.svg";
import PokemonEvolutionChain from "./PokemonEvolutionChain/PokemonEvolutionChain";
import PokemonStats from "./PokemonStats/PokemonStats";
import NotFound from "../NotFound/NotFound";
import PokemonSkeleton from "./PokemonSkeleton/PokemonSkeleton";
import Error from "../../components/Error/Error";
import useHead from "../../hooks/useHead";

const pokemonTypes = {
  normal: "Normal",
  fire: "Fogo",
  water: "Água",
  electric: "Elétrico",
  grass: "Grama",
  ice: "Gelo",
  fighting: "Lutador",
  poison: "Veneno",
  ground: "Terra",
  flying: "Voador",
  psychic: "Psíquico",
  bug: "Inseto",
  rock: "Pedra",
  ghost: "Fantasma",
  dragon: "Dragão",
  dark: "Sombrio",
  steel: "Aço",
  fairy: "Fada",
};

const generations = {
  "generation-i": "1ª Geração",
  "generation-ii": "2ª Geração",
  "generation-iii": "3ª Geração",
  "generation-iv": "4ª Geração",
  "generation-v": "5ª Geração",
  "generation-vi": "6ª Geração",
  "generation-vii": "7ª Geração",
  "generation-viii": "8ª Geração",
  "generation-ix": "9ª Geração",
};

const habitats = {
  cave: "Caverna",
  forest: "Floresta",
  grassland: "Campo",
  mountain: "Montanha",
  rare: "Raro",
  sea: "Mar",
  urban: "Urbano",
  "waters-edge": "Beira da água",
  "rough-terrain": "Terreno acidentado",
};

const Pokemon = () => {
  const { name } = useParams();
  const {
    data: pokemonData,
    request: requestPokemon,
    error: pokemonError,
    loading: pokemonLoading,
  } = useFetch();
  const { data: specieData, request: requestSpecie } = useFetch();
  const { data: evolutionChainData, request: requestEvolutionChain } =
    useFetch();

  const [shiny, setShiny] = React.useState(false);
  const [notFound, setNotFound] = React.useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const pokedexUrl = location.state?.from || "/";
  const width = window.innerWidth;

  React.useEffect(() => {
    async function fetchPokemon() {
      setNotFound(false);
      setShiny(false);

      const { url, options } = POKEMON_GET(name);
      const { response } = await requestPokemon(url, options);

      setNotFound(response?.status === 404);
    }

    fetchPokemon();
  }, [name, requestPokemon]);

  React.useEffect(() => {
    async function fetchSpecie() {
      if (!pokemonData?.species?.name) {
        return;
      }

      const { url, options } = POKEMON_SPECIES_GET(name);
      await requestSpecie(url, options);
    }

    fetchSpecie();
  }, [name, pokemonData, requestSpecie]);

  React.useEffect(() => {
    async function fetchEvolutionChain() {
      if (!specieData?.evolution_chain?.url) {
        return;
      }

      await requestEvolutionChain(specieData.evolution_chain.url);
    }

    fetchEvolutionChain();
  }, [specieData, requestEvolutionChain]);

  useHead(
    `Pokédex | ${pokemonData?.name?.charAt(0).toUpperCase() + pokemonData?.name?.slice(1)}`,
    `Conheça as informações sobre ${
      pokemonData?.name?.charAt(0).toUpperCase() + pokemonData?.name?.slice(1)
    }: tipos, estatísticas, habilidades, evolução, habitat, geração e mais.`,
  );

  if (pokemonLoading) {
    return <PokemonSkeleton />;
  }

  if (notFound) {
    return (
      <NotFound
        description="Pokémon não encontrado"
        message={`O Pokémon "${name.charAt(0).toUpperCase() + name.slice(1)}" não foi encontrado na listagem. Verifique o parâmetro e tente novamente.`}
      />
    );
  }

  if (pokemonError) {
    return <Error error={pokemonError} />;
  }

  if (!pokemonData) {
    return null;
  }

  const image = shiny
    ? pokemonData.sprites?.other?.["official-artwork"]?.front_shiny ||
      pokemonData.sprites?.other?.home?.front_shiny ||
      pokemonData.sprites?.front_shiny
    : pokemonData.sprites?.other?.["official-artwork"]?.front_default ||
      pokemonData.sprites?.other?.home?.front_default ||
      pokemonData.sprites?.front_default;

  let description = specieData?.flavor_text_entries?.find(
    (entry) => entry.language.name === "pt",
  )?.flavor_text;

  if (!description) {
    description = specieData?.flavor_text_entries?.find(
      (entry) => entry.language.name === "en",
    )?.flavor_text;
  }

  if (description) {
    description = description.replace(/[\n\f]/g, " ");
  }

  const habitat = habitats[specieData?.habitat?.name];

  function turnIntoShiny() {
    if (width <= 992) {
      window.scrollTo(0, 0);
    }

    setShiny((shiny) => !shiny);
  }

  return (
    <article className="container pokemon-page">
      <div className="pokemon-page-breadcrumb">
        <button type="button" onClick={() => navigate(pokedexUrl)}>
          Pokédex
        </button>
        <img src={arrow} alt="Ícone de seta" />
        {/* Isso se torna uma expressão JS, tornando o caractere uma string e viabilizando seu uso */}
        <span className="pokemon-name">{pokemonData.name}</span>
      </div>

      <div className="pokemon-page-content">
        <div className="pokemon-page-content-left">
          <div className="pokemon-image">
            <button
              className="shiny-button"
              onClick={turnIntoShiny}
              style={{
                backgroundColor: `${shiny ? "var(--brand)" : "var(--white)"}`,
                color: shiny ? "var(--white)" : "var(--text-primary)",
              }}
            >
              {shiny ? "Shiny" : "Normal"}
            </button>
            <img
              src={image}
              alt={`Imagem do Pokémon ${pokemonData.name}`}
              onError={({ currentTarget }) => {
                currentTarget.src = fallback;
              }}
            />
          </div>

          <PokemonEvolutionChain
            evolutionChainData={evolutionChainData}
            shiny={shiny}
          />
        </div>

        <div className="pokemon-page-content-right">
          <div className="pokemon-top">
            <span className="id">#{pokemonData.id}</span>
            {specieData?.generation?.name && (
              <span className="generation">
                {generations[specieData.generation.name]}
              </span>
            )}
          </div>

          <div className="pokemon-description">
            <h1>{pokemonData.name}</h1>

            <div className="pokemon-types">
              {pokemonData.types.map((item) => {
                return (
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
                );
              })}
            </div>

            <p>{description}</p>

            <hr />
          </div>

          <div className="pokemon-data">
            <div className="data">
              <span>ALTURA</span>
              <span>{(pokemonData.height / 10).toFixed(1)} m</span>
            </div>

            <div className="data">
              <span>PESO</span>
              <span>{(pokemonData.weight / 10).toFixed(1)} kg</span>
            </div>

            <div className="data">
              <span>HABITAT</span>
              {habitat && <span>{habitat}</span>}
            </div>

            <div className="data">
              <span>HABILIDADES</span>
              <span>
                {pokemonData.abilities
                  .map(
                    (item) =>
                      item.ability.name.charAt(0).toUpperCase() +
                      item.ability.name.slice(1),
                  )
                  .join(" | ")}
              </span>
            </div>
          </div>

          <hr />

          <PokemonStats pokemonStats={pokemonData.stats} pokemonName={name} />
        </div>
      </div>
    </article>
  );
};

export default Pokemon;
