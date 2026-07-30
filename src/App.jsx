import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pokemon from './pages/Pokemon/Pokemon';
import NotFound from './pages/NotFound/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pokemon/:name" element={<Pokemon />} />
        <Route
          path="*"
          element={
            <NotFound
              description="Página não encontrada"
              message="A página que você está procurando não existe ou foi movida para outro endereço."
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
