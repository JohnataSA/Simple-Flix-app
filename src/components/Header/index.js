import './header.css';
import {Link} from 'react-router-dom'
import react from 'react';

function Header(){
    return(
        <header>
           <Link className="logo" to="/" >Simple Flix</Link>
           <Link className="favoritos" to="/favoritos" >Meus Filmes</Link>
        </header>
    )
}

export default Header;