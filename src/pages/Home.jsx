import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "./MoviesGrid.css";

// Obtém as constantes de ambiente para a URL base da API e a chave da API a partir do arquivo .env
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

// Componente Home
const Home = () => {
  // Criando o array para armazenar a lista de filmes mais bem avaliados e sua função de atualização
  const [topMovies, setTopMovies] = useState([]);

  // Função para obter os filmes mais bem avaliados
  const getTopRatedMovies = async (url) => {
    // Faz uma requisição para a API usando a URL fornecida
    const res = await fetch(url);
    // Converte a resposta para JSON
    const data = await res.json();
    // Atualiza o Array topMovies com a resposta obtida
    setTopMovies(data.results);
  };

  // UseEffect é executado quando o componente Home é chamado
  useEffect(() => {
    // Monta a URL de requisição dos filmes mais bem avaliados da API
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    // Chama a função para obter os filmes mais bem avaliados ao montar o componente
    getTopRatedMovies(topRatedUrl);
  }, []);

  // Exibe a lista de filmes na interface do usuário
  return (
    <div className="container">
      <h2 className="title">PRINCIPAIS FILMES:</h2>
      <div className="movies-container">
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;
