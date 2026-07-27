import React from "react";
import useFetch from "../../hooks/useFetch";
import {
  POKEMON_GET,
  TYPE_GET,
  GENERATION_GET,
  POKEMON_LIST,
} from "../../api/api";

const PokemonsSection = ({ nameOrId, type, generation }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      let api;

      if (nameOrId.trim()) {
        api = POKEMON_GET(nameOrId);
      } else if (type) {
        api = TYPE_GET(type);
      } else if (generation) {
        api = GENERATION_GET(generation);
      } else {
        api = POKEMON_LIST();
      }

      const { url, options } = api;
      const { json } = await request(url, options);

      console.log(json);
    }

    fetchData();
  }, [nameOrId, type, generation, request]);

  return <div>PokemonsSection</div>;
};

export default PokemonsSection;
