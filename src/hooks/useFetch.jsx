import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  // useCallback para manter a mesma referência entre renderizações
  const request = React.useCallback(async (url, options) => {
    let response = null;
    let json = null;

    try {
      setError('');
      setData(null);
      setLoading(true);

      response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(
          response.status === 404
            ? 'Pokémon não encontrado.'
            : `Status: ${response.status}. Por favor, entre em contato com a equipe de desenvolvimento.`,
        );
      }

      json = await response.json();
      setData(json);
    } catch (error) {
      setError(error.message);
      setData(null);
      json = null;
    } finally {
      setLoading(false);
    }

    return { response, json };
  }, []);

  return { request, data, error, loading };
};

export default useFetch;
