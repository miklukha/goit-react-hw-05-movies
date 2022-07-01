import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import * as API from 'services/api';
import { List } from 'components/TrendingList/TrendingList.styled';

export function MoviesList({ query }) {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

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
        toast.error('Film is not found');
        navigate('/', { replace: true });
        console.log(error);
      }
    })();
  }, [navigate, query]);

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
