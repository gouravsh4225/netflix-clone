const API_KEY = "b51f5366330e45343d00a8de2ee5f600";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&langauge=en-US`,
  fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-Us`,
  fetchActionMovie: `/discover/tv?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovie: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovie: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovie: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
