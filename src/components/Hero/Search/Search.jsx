import React from 'react';
import './Search.css';
import useFetch from '../../../hooks/useFetch';

const Search = ({ nameOrId, type, generation, setNameOrId, setType, setGeneration }) => {
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

  const generations = [
    { value: '1', label: '1ª Geração' },
    { value: '2', label: '2ª Geração' },
    { value: '3', label: '3ª Geração' },
    { value: '4', label: '4ª Geração' },
    { value: '5', label: '5ª Geração' },
    { value: '6', label: '6ª Geração' },
    { value: '7', label: '7ª Geração' },
    { value: '8', label: '8ª Geração' },
    { value: '9', label: '9ª Geração' },
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
      <input placeholder="Buscar por nome ou id..." value={nameOrId} onChange={setOnChange(setNameOrId)} />

      <div className="search-selects">
        <label htmlFor="pokemon-type">
          Tipo
          <select id="pokemon-type" value={type} onChange={setOnChange(setType)}>
            <option value="">Todos os tipos</option>
            {types.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="pokemon-generation">
          Geração
          <select id="pokemon-generation" value={generation} onChange={setOnChange(setGeneration)}>
            <option value="">Todas as gerações</option>
            {generations.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </form>
  );
};

export default Search;
