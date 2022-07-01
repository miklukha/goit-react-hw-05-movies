import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as API from 'services/api';
import { List } from './TrendingList.styled';
import { TrendingMovieItem } from 'components/TrendingMovieItem';

export function TrendingList() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async function getMovies() {
      try {
        const data = await API.getTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        toast.error('Film is not found');
        navigate('/', { replace: true });
        console.log(error);
      }
    })();
  }, [navigate]);

  return (
    <List>
      {movies.map(({ id, title }) => {
        return <TrendingMovieItem key={id} id={id} name={title} />;
      })}
    </List>
  );
}
