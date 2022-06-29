import { Link } from './BackLink.styled';

export const BackLink = ({ href }) => {
  return (
    <Link to={href} state={{ from: '/movies?query=cat' }}>
      Go Back
    </Link>
  );
};
