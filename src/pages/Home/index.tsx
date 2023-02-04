import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mt-3">
      <h1 className="secondary-color fw-bold mb-1">Desafio Github API</h1>
      <p className="third-color fw-bold mb-4">DevSuperior - Escola de programação</p>
      <Link to="profile" className="btn default-btn">Começar</Link>
    </div>
  );
}

export default Home;
