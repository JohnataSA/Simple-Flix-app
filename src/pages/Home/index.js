

import { useEffect, useState } from "react";
import api from "../../services/api";

//URL acess Api = movie/now_playing?api_key=9466c543b98eb58180ddf4931f9184d9&language=pt-br


function Home(){
    const [filmes, setFilmes] = useState([]);

useEffect (()=>{

    async function loadFilmes(){
        const response = await api.get('movie/now_playing',{
            params:{
                api_key: '9466c543b98eb58180ddf4931f9184d9',
                language: 'pt-br',
                pag: 1,
            }
        });

        console.log(response.data.results);
    }

    loadFilmes();           
},[])

    return(
        <div>
            <h1>BEM VINDO A HOME</h1>
        </div>
    )
}

export default Home;