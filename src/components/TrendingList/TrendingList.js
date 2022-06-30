import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import * as API from 'services/api';
import { List } from './TrendingList.styled';
import { TrendingMovieItem } from 'components/TrendingMovieItem';

export function TrendingList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async function getMovies() {
      try {
        const data = await API.getTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        toast.error('Something wrong');
        console.log(error);
      }
    })();
  }, []);

  return (
    <List>
      {movies.map(({ id, title }) => {
        return <TrendingMovieItem key={id} id={id} name={title} />;
      })}
    </List>
  );
}
