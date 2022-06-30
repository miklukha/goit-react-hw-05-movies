import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import * as API from 'services/api';
import { List } from 'components/TrendingList/TrendingList.styled';

export function MoviesList({ query }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async function getMovies() {
      try {
        const data = await API.getMovieByQuery(query);
        if (data.results.length === 0) {
          toast.error('Not found');
          return;
        }
        setMovies(data.results);
      } catch (error) {
        toast.error('Something wrong');
        console.log(error);
      }
    })();
  }, [query]);

  const location = useLocation();

  return (
    <List>
      {movies.map(({ original_title, id }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {original_title}
          </Link>
        </li>
      ))}
    </List>
  );
}

MoviesList.propTypes = {
  query: PropTypes.string.isRequired,
};
