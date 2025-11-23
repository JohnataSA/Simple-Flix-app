
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
import './home.css';

//URL acess Api = movie/now_playing?api_key=9466c543b98eb58180ddf4931f9184d9&language=pt-br


function Home(){
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

useEffect (()=>{

    async function loadFilmes(){
        const response = await api.get('movie/now_playing',{
            params:{
                api_key: '9466c543b98eb58180ddf4931f9184d9',
                language: 'pt-br',
                pag: 1,
            }
        });

        setFilmes(response.data.results.slice(0,10));
        setLoading(false);
    }

    loadFilmes();           
},[])

if(loading){
    return(
        <div className="loading">   
        <h2>Carregando filmes...</h2>
        </div>
    )
}               

    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme)=>{
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} alt={filme.title} />

                            <Link class="teste" to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;