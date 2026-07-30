import { Link } from 'react-router-dom';
import './NotFound.css';
import circleOffIcon from '../../assets/icons/circle-off.svg';

const NotFound = () => {
  return (
    <section className="container not-found">
      <img src={circleOffIcon} alt="" className="not-found-icon" />

      <h1>404</h1>

      <h2>Página não encontrada</h2>

      <p>A página que você está procurando não existe ou foi movida para outro endereço.</p>

      <Link to="/" className="not-found-button">
        Voltar para a Pokédex
      </Link>
    </section>
  );
};

export default NotFound;
