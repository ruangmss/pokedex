import React from 'react';
import './Pagination.css';

const Pagination = ({ page, updatePage, totalPages }) => {
  function changePage({ target }) {
    if (target.innerText === 'Próxima') {
      updatePage(page + 1);
      window.scrollTo(0, 0);
    } else {
      updatePage(page - 1);
      window.scrollTo(0, 0);
    }
  }

  if (totalPages !== 0 && totalPages && page < totalPages) {
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
  }

  return null;
};

export default Pagination;
