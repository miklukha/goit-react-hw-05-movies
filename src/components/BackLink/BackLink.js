import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

export const BackLink = ({ href }) => {
  // const location = useLocation();
  // console.log(location.state); // { from: "/dashboard?name=hoodie" }

  // return <Link to={location.state.from}>Back to products</Link>;
  return (
    <Link to={href} state={{ from: '/movies?query=cat' }}>
      Go Back
    </Link>
  );
};
