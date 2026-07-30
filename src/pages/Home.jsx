import React from 'react';
import Hero from '../components/Hero/Hero';
import PokemonsSection from '../components/PokemonsSection/PokemonsSection';
import Pagination from '../components/Pagination/Pagination';

const Home = () => {
  const [nameOrId, setNameOrId] = React.useState('');
  const [type, setType] = React.useState('');
  const [generation, setGeneration] = React.useState('');
  const [offset, setOffset] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(null);

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
        offset={offset}
        setTotalPages={setTotalPages}
      />

      <Pagination setOffset={setOffset} setPage={setPage} page={page} totalPages={totalPages} />
    </>
  );
};

export default Home;
