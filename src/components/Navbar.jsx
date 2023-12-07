// Importa useState para gerenciar o estado, Link e useNavigate do React Router para navegação, e ícones do React Icons.
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

// Importa o estilo CSS para a barra de navegação.
import "./Navbar.css";

// Componente Navbar representa a barra de navegação da aplicação.
const Navbar = () => {
  // Estado para armazenar o valor da pesquisa.
  const [search, setSearch] = useState("");

  // Hook useNavigate para realizar navegação programaticamente.
  const navigate = useNavigate();

  // Função chamada ao enviar o formulário de pesquisa.
  const handleSubmit = (e) => {
    e.preventDefault();

    // Se a pesquisa estiver vazia, retorna.
    if (!search) return;

    // Navega para a rota de pesquisa com o termo de pesquisa e limpa o campo de pesquisa.
    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  // Estrutura da barra de navegação com o logotipo, formulário de pesquisa e ícone de pesquisa.
  return (
    <nav id="navbar">
      <h2>
        {/* Link para a página inicial com o logotipo e o nome da aplicação. */}
        <Link to="/">
          <BiCameraMovie /> WEBFILMS
        </Link>
      </h2>

      {/* Formulário de pesquisa com campo de input e botão de pesquisa. */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};

// Exporta o componente Navbar para ser utilizado em outros lugares do código.
export default Navbar;
