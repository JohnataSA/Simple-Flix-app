import { Link } from "react-router-dom";        
import "./erro.css";  

function Erro() {
  return (
    <div className="not-found">
      <h1>Erro 404</h1>
      <p>Desculpe, a página que você está procurando não existe.</p>
      <Link to="/">Veja todos os filmes </Link>  
    </div>
  )
}
export default Erro;    