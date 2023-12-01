import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="app-container">
  {/* Renderiza o componente Navbar*/}
      <Navbar />
  {/* Renderiza o componente Outlet, que é um ponto de saída para o conteúdo das rotas
      definidas em outros lugares da aplicação. O conteúdo é renderizado dinamicamente
      com base na rota atual. */}
      <Outlet />
    </div>
  );
}

export default App;