import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import { BackLink } from 'components/BackLink/BackLink';

const IMG_URL = 'https://image.tmdb.org/t/p/w300';

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');

  useEffect(() => {
    // loader and error (toastify)
    (async function getMovie() {
      try {
        const movie = await getMovieDetails(movieId);
        setMovie(movie);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieId]);

  const { poster_path, original_title, vote_average, overview, genres } = movie;

  const getGenres = () => {
    if (genres) {
      return genres.reduce(
        (acc, genre) => acc + `${acc ? ', ' : ''}${genre.name}`,
        ''
      );
    }
  };

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      <BackLink href={backLinkHref} />

      <article style={{ borderBottom: '1px solid black' }}>
        <img
          src={
            poster_path
              ? IMG_URL + poster_path
              : 'https://cloupyblob.blob.core.windows.net/cloupy/image-not-found.png'
          }
          alt={original_title}
        />
        <h2>{original_title}</h2>
        <p>User score: </p>
        <span>{Math.round(vote_average * 10)}%</span>
        <p>Overview</p>
        <p>{overview}</p>
        <p>Genres</p>
        <span>{getGenres()}</span>
      </article>

      <p>Additional Information</p>
      <ul style={{ borderBottom: '1px solid black' }}>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
