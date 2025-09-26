const API_KEY = "20ba9e38041aab3557569949ff8cb01b"; 
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchMovies() {
    const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US`);
    const data = await res.json();
    return data.results;
}

export async function searchMovieDetails(query) {
    const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}`);
    const data = await res.json();
    return data.results;
}

