import { Item } from './TrendingMovieItem.styled';
import { Link } from 'react-router-dom';

export function TrendingMovieItem({ id, name }) {
  return (
    <Item>
      <Link to={`movies/${id}`}>{name}</Link>
    </Item>
  );
}
