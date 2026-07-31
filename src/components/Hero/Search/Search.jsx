import React from 'react';
import './Search.css';

const Search = ({ nameOrId, type, setNameOrId, updateType }) => {
  const types = [
    { value: 'normal', label: 'Normal' },
    { value: 'fire', label: 'Fogo' },
    { value: 'water', label: 'Água' },
    { value: 'electric', label: 'Elétrico' },
    { value: 'grass', label: 'Grama' },
    { value: 'ice', label: 'Gelo' },
    { value: 'fighting', label: 'Lutador' },
    { value: 'poison', label: 'Veneno' },
    { value: 'ground', label: 'Terrestre' },
    { value: 'flying', label: 'Voador' },
    { value: 'psychic', label: 'Psíquico' },
    { value: 'bug', label: 'Inseto' },
    { value: 'rock', label: 'Pedra' },
    { value: 'ghost', label: 'Fantasma' },
    { value: 'dragon', label: 'Dragão' },
    { value: 'dark', label: 'Sombrio' },
    { value: 'steel', label: 'Aço' },
    { value: 'fairy', label: 'Fada' },
  ];

  function submitForm(event) {
    event.preventDefault();
  }

  function setOnChange(setter) {
    return ({ target }) => {
      setter(target.value);
    };
  }

  return (
    <form className="search" onSubmit={submitForm}>
      <label htmlFor="pokemon">
        Nome / ID
        <input id="pokemon" value={nameOrId} onChange={setOnChange(setNameOrId)} />
      </label>

      <label htmlFor="pokemon-type">
        Tipo
        <select id="pokemon-type" value={type} onChange={setOnChange(updateType)}>
          <option value="">Todos os tipos</option>
          {types.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </label>
    </form>
  );
};

export default Search;
