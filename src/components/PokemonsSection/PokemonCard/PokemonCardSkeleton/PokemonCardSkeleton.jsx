import './PokemonCardSkeleton.css';

const PokemonCardSkeleton = () => {
  return (
    <div className="pokemon-card pokemon-card-skeleton">
      <div className="pokemon-card-skeleton-image"></div>

      <div className="pokemon-card-skeleton-data">
        <div className="pokemon-card-skeleton-id"></div>
        <div className="pokemon-card-skeleton-generation"></div>
      </div>

      <div className="pokemon-card-skeleton-title"></div>

      <div className="pokemon-card-skeleton-types">
        <div className="pokemon-card-skeleton-type"></div>
        <div className="pokemon-card-skeleton-type"></div>
      </div>
    </div>
  );
};

export default PokemonCardSkeleton;
