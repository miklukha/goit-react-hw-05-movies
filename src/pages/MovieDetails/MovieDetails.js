import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import { BackLink } from 'components/BackLink/BackLink';
import { Article, Title, Label, Item } from './MovieDetails.styled';

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

      <Article>
        <img
          src={
            poster_path
              ? IMG_URL + poster_path
              : 'https://cloupyblob.blob.core.windows.net/cloupy/image-not-found.png'
          }
          alt={original_title}
        />
        <Title>{original_title}</Title>
        <ul>
          <Item>
            <Label>User score: </Label>
            <span>{Math.round(vote_average * 10)}%</span>
          </Item>
          <Item>
            <Label>Overview: </Label>
            <span>{overview}</span>
          </Item>
          <Item>
            <Label>Genres: </Label>
            <span>{getGenres()}</span>
          </Item>
        </ul>
      </Article>

      <Label>Additional Information</Label>
      <ul>
        <Item>
          <Link to="cast">Cast</Link>
        </Item>
        <Item>
          <Link to="reviews">Reviews</Link>
        </Item>
      </ul>
      <Outlet />
    </>
  );
}
