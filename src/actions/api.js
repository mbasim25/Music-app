import axios from 'axios';
import env from "@/env.js"

const request = axios.create({
    baseURL : 'https://deezerdevs-deezer.p.rapidapi.com/',
    timeout : 30000,
    headers: {'X-RapidAPI-Key': env.API_KEY} 
});

export function getTracks(search = 'caligulas horse'){
    const tracks = request.get(`search?q=${search}`)
        .then(response => response.data.data)
        .catch(error => console.log(error));
    return tracks

}
export function getfavs(){
    const favs = request.get('playlist/3155776842')
        .then(response => response.data.tracks.data)
        .catch(error => console.log(error));
    return favs

}