// Importa useEffect e useState para manipulação de efeitos colaterais, useSearchParams para obter parâmetros de busca da URL
// e o componente MovieCard.
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

// Obtém a URL de busca e a chave da API do ambiente Vite.
const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

// Importa o estilo CSS associado.
import "./MoviesGrid.css";

// Componente Search exibe os resultados de uma pesquisa de filmes.
const Search = () => {
  // Obtém os parâmetros de busca da URL.
  const [searchParams] = useSearchParams();

  // Estado para armazenar a lista de filmes correspondentes à pesquisa.
  const [movies, setMovies] = useState([]);

  // Obtém o termo de pesquisa da URL.
  const query = searchParams.get("q");

  // Função assíncrona para buscar os filmes correspondentes à pesquisa usando a API.
  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  // Efeito colateral para atualizar os resultados de pesquisa quando o termo de pesquisa muda.
  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
    getSearchedMovies(searchWithQueryURL);
  }, [query]);

  // Estrutura da página de resultados de pesquisa, exibindo o termo de pesquisa e a lista de filmes correspondentes.
  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

// Exporta o componente Search para ser utilizado em outros lugares do código.
export default Search;
