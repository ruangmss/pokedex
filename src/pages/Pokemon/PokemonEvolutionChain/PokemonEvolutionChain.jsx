import { NavLink } from 'react-router-dom';
import fallback from '../../../assets/images/fallback-image.webp';
import arrow from '../../../assets/icons/arrow.svg';
import './PokemonEvolutionChain.css';

const PokemonEvolutionChain = ({ evolutionChainData }) => {
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

  return (
    <div className="pokemon-evolution-chain">
      <h2>CADEIA EVOLUTIVA</h2>

      <div className="pokemon-evolution-chain-list">
        {evolutions.map((pokemon) => {
          const id = pokemon.url.split('/').at(-2);
          const image =
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png` ||
            fallback;

          return (
            <NavLink to={`/pokemon/${pokemon.name}`} key={pokemon.name} className="pokemon-evolution">
              <div className="pokemon-evolution-image">
                <img src={image} alt={`Imagem do Pokémon ${pokemon.name}`} />
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
};

export default PokemonEvolutionChain;
