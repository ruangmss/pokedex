import React from 'react';
import Hero from '../components/Hero/Hero';
import PokemonsSection from '../components/PokemonsSection/PokemonsSection';
import Pagination from '../components/Pagination/Pagination';
import { useSearchParams } from 'react-router-dom';

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialPage = Math.max(Number(searchParams.get('page')) || 1, 1);
  const initialType = searchParams.get('type') || '';

  const [nameOrId, setNameOrId] = React.useState('');
  const [type, setType] = React.useState(initialType);
  const [generation, setGeneration] = React.useState('');
  const [page, setPage] = React.useState(initialPage);
  const [offset, setOffset] = React.useState((initialPage - 1) * 20);
  const [totalPages, setTotalPages] = React.useState(null);

  /* É necessário pois o componente só desmonta ao mudar de rota */
  React.useEffect(() => {
    const currentPage = Number(searchParams.get('page')) || 1;
    const currentType = searchParams.get('type') || '';

    setPage(currentPage);
    setOffset((currentPage - 1) * 20);
    setType(currentType);
  }, [searchParams]);

  function updatePage(newPage) {
    const params = new URLSearchParams(searchParams);

    setPage(newPage);
    setOffset((newPage - 1) * 20);

    if (newPage === 1) {
      params.delete('page');
    } else {
      params.set('page', String(newPage));
    }

    setSearchParams(params);
  }

  function updateNameOrId(newNameOrId) {
    const params = new URLSearchParams(searchParams);

    setNameOrId(newNameOrId);
    setPage(1);
    setOffset(0);

    params.delete('page');

    setSearchParams(params, { replace: true });
  }

  function updateType(newType) {
    const params = new URLSearchParams(searchParams);

    setType(newType);
    setPage(1);
    setOffset(0);

    params.delete('page');

    if (newType) {
      params.set('type', newType);
    } else {
      params.delete('type');
    }

    setSearchParams(params);
  }

  return (
    <>
      <Hero
        nameOrId={nameOrId}
        type={type}
        generation={generation}
        setNameOrId={updateNameOrId}
        updateType={updateType}
      />

      <PokemonsSection
        nameOrId={nameOrId}
        type={type}
        generation={generation}
        offset={offset}
        setTotalPages={setTotalPages}
      />

      <Pagination updatePage={updatePage} page={page} totalPages={totalPages} />
    </>
  );
};

export default Home;
