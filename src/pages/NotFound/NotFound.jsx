import { Link } from 'react-router-dom';
import './NotFound.css';
import circleOffIcon from '../../assets/icons/circle-off.svg';

const NotFound = ({ description, message }) => {
  return (
    <section className="container not-found">
      <img src={circleOffIcon} alt="" className="not-found-icon" />

      <h1>404</h1>

      <h2>{description}</h2>

      <p>{message}</p>

      <Link to="/" className="not-found-button">
        Voltar para a Pokédex
      </Link>
    </section>
  );
};

export default NotFound;
