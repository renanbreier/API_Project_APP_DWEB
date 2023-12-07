// Importa useEffect e useState para manipulação de efeitos colaterais e estado, useParams para obter parâmetros de rota
// e ícones do React Icons.
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill } from "react-icons/bs";

// Importa o componente MovieCard e o estilo CSS associado.
import MovieCard from "../components/MovieCard";
import "./Movie.css";

// Obtém a URL base e a chave da API do ambiente Vite.
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

// Componente Movie exibe informações detalhadas sobre um filme específico.
const Movie = () => {
  // Obtém o parâmetro de ID da rota.
  const { id } = useParams();

  // Estado para armazenar as informações do filme.
  const [movie, setMovie] = useState(null);

  // Função assíncrona para buscar os detalhes do filme usando a API.
  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setMovie(data);
  };

  // Função para formatar valores como moeda.
  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  // Efeito colateral para carregar os detalhes do filme quando o componente é montado.
  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieUrl);
  }, []);

  // Estrutura da página do filme, exibindo detalhes como orçamento, receita, duração e descrição.
  return (
    <div className="movie-page">
      {movie && (
        <>
          {/* Exibe o cartão do filme, desabilitando o link de navegação. */}
          <MovieCard movie={movie} showLink={false} />
          
          {/* Exibe a tagline do filme. */}
          <p className="tagline">{movie.tagline}</p>
          
          {/* Exibe informações sobre orçamento, receita, duração e descrição do filme. */}
          <div className="info">
            <h3>
              <BsWallet2 /> Orçamento:
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
          </div>
          <div className="info">
            <h3>
              <BsGraphUp /> Receita:
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>
          <div className="info">
            <h3>
              <BsHourglassSplit /> Duração:
            </h3>
            <p>{movie.runtime} minutos</p>
          </div>
          <div className="info description">
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  );
};

// Exporta o componente Movie para ser utilizado em outros lugares do código.
export default Movie;
