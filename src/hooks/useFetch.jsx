import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  // useCallback para manter a mesma referência entre renderizações
  const request = React.useCallback(async (url, options) => {
    try {
      setError('');
      setLoading(true);

      const response = await fetch(url, options);
      const json = await response.json();

      if (!response.ok) {
        throw new Error(
          json.message
            ? `Ocorreu um erro: ${json.message}`
            : `Erro no sistema! Status: ${response.status}. Por favor, entre em contato com a equipe de desenvolvimento.`,
        );
      }

      setData(json);
    } catch (error) {
      setError(error.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  return { request, data, error, loading };
};

export default useFetch;
