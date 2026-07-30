import React from 'react';
import './PokemonStats.css';

const stats = {
  hp: 'HP',
  attack: 'Ataque',
  defense: 'Defesa',
  'special-attack': 'Ataque Especial',
  'special-defense': 'Defesa Especial',
  speed: 'Velocidade',
};

const PokemonStats = ({ pokemonStats, pokemonName }) => {
  const [statsAnimation, setStatsAnimation] = React.useState(false);

  React.useEffect(() => {
    setStatsAnimation(false);

    const timeout = setTimeout(() => {
      setStatsAnimation(true);
    }, 50);

    return () => clearTimeout(timeout);
  }, [pokemonName]);

  return (
    <div className="pokemon-stats">
      <h3>ESTATÍSTICAS BASE</h3>

      <div className="stats">
        {pokemonStats.map((item) => (
          <div className="stat" key={item.stat.name}>
            <span className="stat-description">
              {stats[item.stat.name]} <span>{item.base_stat}</span>
            </span>
            <div className="stat-track">
              <div
                className="stat-filling"
                style={{
                  width: statsAnimation ? `${Math.min((item.base_stat / 255) * 100, 100)}%` : '0%',
                  backgroundColor: `var(--stat-${item.stat.name})`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonStats;
