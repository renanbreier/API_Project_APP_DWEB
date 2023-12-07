// Importa o componente Link do React Router para criar links entre rotas e o ícone de estrela do Font Awesome.
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

// Obtém a URL das imagens do ambiente Vite.
const imagesURL = import.meta.env.VITE_IMG;

// Componente MovieCard representa um cartão de filme e recebe as informações do filme como propriedades.
const MovieCard = ({ movie, showLink = true }) => {
  return (
    // Estrutura do cartão de filme.
    <div className="movie-card">
      {/* Exibe a imagem do filme. */}
      <img src={imagesURL + movie.poster_path} alt={movie.title} />

      {/* Exibe o título do filme. */}
      <h2>{movie.title}</h2>

      {/* Exibe o ícone de estrela seguido pela classificação média do filme. */}
      <p>
        <FaStar /> {movie.vote_average}
      </p>

      {/* Condicionalmente exibe o link para detalhes do filme, se showLink for verdadeiro. */}
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );
};

// Exporta o componente MovieCard para ser utilizado em outros lugares do código.
export default MovieCard;
