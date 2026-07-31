import { NavLink } from 'react-router-dom';
import fallback from '../../../assets/images/fallback-image.webp';
import arrow from '../../../assets/icons/arrow.svg';
import './PokemonEvolutionChain.css';

const PokemonEvolutionChain = ({ evolutionChainData, shiny }) => {
  function getAllEvolutions(chain, evolutions = []) {
    if (!chain) {
      return evolutions;
    }

    evolutions.push(chain.species);

    chain.evolves_to.forEach((evolution) => {
      getAllEvolutions(evolution, evolutions);
    });

    return evolutions;
  }

  const evolutions = evolutionChainData ? getAllEvolutions(evolutionChainData.chain) : [];

  if (evolutions.length > 1) {
    return (
      <div className="pokemon-evolution-chain">
        <h2>CADEIA EVOLUTIVA</h2>

        <div className="pokemon-evolution-chain-list">
          {evolutions.map((pokemon) => {
            const id = pokemon.url.split('/').filter(Boolean).pop();
            const image = shiny
              ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${id}.png`
              : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

            return (
              <NavLink to={`/pokemon/${pokemon.name}`} key={pokemon.name} className="pokemon-evolution">
                <div className="pokemon-evolution-image">
                  <img
                    src={image}
                    alt={`Imagem do Pokémon ${pokemon.name}`}
                    onError={({ currentTarget }) => {
                      currentTarget.src = fallback;
                    }}
                  />
                </div>

                <div className="pokemon-evolution-content">
                  <h3>{pokemon.name}</h3>
                  <span>#{id}</span>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="pokemon-evolution-chain">
      <h2>CADEIA EVOLUTIVA</h2>
      <p>Este Pokémon não possui evoluções.</p>
    </div>
  );
};

export default PokemonEvolutionChain;
