import React from 'react';
import './PokemonSkeleton.css';

const PokemonSkeleton = () => {
  return (
    <article className="container pokemon-page pokemon-skeleton">
      <div className="pokemon-page-breadcrumb">
        <span className="skeleton-item skeleton-breadcrumb"></span>
        <span className="skeleton-item skeleton-arrow"></span>
        <span className="skeleton-item skeleton-breadcrumb-name"></span>
      </div>

      <div className="pokemon-page-content">
        <div className="pokemon-page-content-left">
          <div className="pokemon-image skeleton-image-container">
            <span className="skeleton-item skeleton-shiny-button"></span>
            <span className="skeleton-item skeleton-main-image"></span>
          </div>

          <div className="skeleton-evolution">
            <span className="skeleton-item skeleton-section-title"></span>

            <div className="skeleton-evolution-list">
              <span className="skeleton-item skeleton-evolution-image"></span>
              <span className="skeleton-item skeleton-evolution-arrow"></span>
              <span className="skeleton-item skeleton-evolution-image"></span>
              <span className="skeleton-item skeleton-evolution-arrow"></span>
              <span className="skeleton-item skeleton-evolution-image"></span>
            </div>
          </div>
        </div>

        <div className="pokemon-page-content-right">
          <div className="pokemon-top">
            <span className="skeleton-item skeleton-id"></span>
            <span className="skeleton-item skeleton-generation"></span>
          </div>

          <div className="pokemon-description">
            <span className="skeleton-item skeleton-name"></span>

            <div className="pokemon-types">
              <span className="skeleton-item skeleton-type"></span>
              <span className="skeleton-item skeleton-type"></span>
            </div>

            <div className="skeleton-description">
              <span className="skeleton-item skeleton-text"></span>
              <span className="skeleton-item skeleton-text"></span>
              <span className="skeleton-item skeleton-text skeleton-text-short"></span>
            </div>

            <hr />
          </div>

          <div className="pokemon-data">
            {Array.from({ length: 4 }).map((_, index) => (
              <div className="data" key={index}>
                <span className="skeleton-item skeleton-data-label"></span>
                <span className="skeleton-item skeleton-data-value"></span>
              </div>
            ))}
          </div>

          <hr />

          <div className="skeleton-stats">
            <span className="skeleton-item skeleton-section-title"></span>

            {Array.from({ length: 6 }).map((_, index) => (
              <div className="skeleton-stat" key={index}>
                <span className="skeleton-item skeleton-stat-name"></span>
                <span className="skeleton-item skeleton-stat-bar"></span>
                <span className="skeleton-item skeleton-stat-value"></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default PokemonSkeleton;
