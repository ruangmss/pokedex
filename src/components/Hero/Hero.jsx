import React from "react";
import "./Hero.css";
import Search from "./Search/Search";

const Hero = (props) => {
  return (
    <section className="hero container">
      <h1 className="title">Pokédex</h1>
      <p className="hero-text">
        Um catálogo completo de Pokémon com imagens, tipos, gerações e
        estatísticas — dados obtidos da{" "}
        <a href="https://pokeapi.co/">PokéAPI</a>.
      </p>

      <Search {...props} />
    </section>
  );
};

export default Hero;
