import React from 'react';
import './Pagination.css';

const Pagination = ({ setOffset, page, setPage, totalPages }) => {
  function changePage({ target }) {
    if (target.innerText === 'Próxima') {
      setOffset((offset) => (offset += 20));
      setPage((page) => (page += 1));
      window.scrollTo(0, 0);
    } else {
      setOffset((offset) => (offset -= 20));
      setPage((page) => (page -= 1));
      window.scrollTo(0, 0);
    }
  }

  return (
    <div className="container pagination">
      <hr />

      <div className="pagination-content">
        <button onClick={changePage} disabled={page === 1}>
          Anterior
        </button>

        {page && <span>{`Página ${page} de ${totalPages}`}</span>}

        <button onClick={changePage} disabled={page === totalPages}>
          Próxima
        </button>
      </div>
    </div>
  );
};

export default Pagination;
