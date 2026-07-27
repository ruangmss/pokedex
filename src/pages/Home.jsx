import React from "react";
import Hero from "../components/Hero/Hero";
import PokemonsSection from "../components/PokemonsSection/PokemonsSection";

const Home = () => {
  const [nameOrId, setNameOrId] = React.useState("");
  const [type, setType] = React.useState("");
  const [generation, setGeneration] = React.useState("");

  return (
    <>
      <Hero
        nameOrId={nameOrId}
        type={type}
        generation={generation}
        setNameOrId={setNameOrId}
        setType={setType}
        setGeneration={setGeneration}
      />

      <PokemonsSection
        nameOrId={nameOrId}
        type={type}
        generation={generation}
      />
    </>
  );
};

export default Home;
