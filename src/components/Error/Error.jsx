import './Error.css';

const Error = ({ error }) => {
  return (
    <div className="error-container container">
      <div className="error-box">
        <h2>Ops! Algo deu errado.</h2>
        <p>{error}</p>
      </div>
    </div>
  );
};

export default Error;
