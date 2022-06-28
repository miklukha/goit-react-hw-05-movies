import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as API from 'services/api';

export function MoviesList({ query }) {
  const [movies, setMovies] = useState([]);

  (async function getMovies() {
    try {
      const data = await API.getMovieByQuery(query);
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  })();

  return (
    <ul>
      {movies.map(({ original_title, id }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>{original_title}</Link>
        </li>
      ))}
    </ul>
  );
}
