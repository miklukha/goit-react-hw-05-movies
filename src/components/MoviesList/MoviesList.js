import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as API from 'services/api';

export function MoviesList({ query }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async function getMovies() {
      try {
        const data = await API.getMovieByQuery(query);
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [query]);

  const location = useLocation();

  return (
    <ul>
      {movies.map(({ original_title, id }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
