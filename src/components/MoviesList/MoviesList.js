import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import slugify from 'slugify';
import { toast } from 'react-toastify';
import * as API from 'services/api';
import { List } from 'components/TrendingList/TrendingList.styled';

export function MoviesList({ query }) {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

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

  const makeSlug = string => slugify(string, { lower: true });

  return (
    <List>
      {movies.map(({ original_title, id }) => (
        <li key={id}>
          <Link
            to={`/movies/${makeSlug(`${original_title} ${id}`)}`}
            state={{ from: location }}
          >
            {original_title}
          </Link>
        </li>
      ))}
    </List>
  );
}
//<Link to={`movies/${makeSlug(`${name} ${id}`)}`}>{name}</Link>

MoviesList.propTypes = {
  query: PropTypes.string.isRequired,
};
