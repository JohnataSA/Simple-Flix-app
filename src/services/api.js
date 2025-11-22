
import axios from 'axios';

//Base da API= https://api.themoviedb.org/3
//Full link API = https://api.themoviedb.org/3/movie/now_playing?api_key=9466c543b98eb58180ddf4931f9184d9&language=pt-br
//ACESSO GET DA API PARA FILMES RECENTES = /movie/now_playing?api_key=9466c543b98eb58180ddf4931f9184d9&language=pt-br


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});
export default api;