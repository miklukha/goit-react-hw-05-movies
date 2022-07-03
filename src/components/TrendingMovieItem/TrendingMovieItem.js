import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import { Item } from './TrendingMovieItem.styled';

export function TrendingMovieItem({ id, name }) {
  const makeSlug = string => slugify(string, { lower: true });

  return (
    <Item>
      <Link to={`movies/${makeSlug(`${name} ${id}`)}`}>{name}</Link>
    </Item>
  );
  //${url}/${makeSlug(`${name} ${id}`
  // <Link to={`movies/${id}`}>{name}</Link>;
}

TrendingMovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
};
