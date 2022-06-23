import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: 'a9f392cbbc7836cc440c1eab3d6179cd',
};

export async function getTrending() {
  const response = await axios.get('/trending/movie/day');
  // console.log(response.data);
  return response.data;
}

export async function getMovieByQuery(query) {
  const response = await axios.get(`/search/movie?query=${query}`);
  // console.log(response.data);
  return response.data;
}

export async function getMovieDetails(id) {
  const response = await axios.get(`/movie/${id}`);
  // console.log(response.data);
  return response.data;
}

export async function getMovieCredits(id) {
  const response = await axios.get(`/movie/${id}/credits`);
  // console.log(response.data);
  return response.data;
}

export async function getMovieReviews(id) {
  const response = await axios.get(`/movie/${id}/reviews`);
  // console.log(response.data);
  return response.data;
}

export async function getGenres() {
  const response = await axios.get(`/genre/movie/list`);
  // console.log(response.data);
  return response.data;
}
