import { useEffect, useState, useRef } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useParams,
  useNavigate,
} from 'react-router-dom';
import { toast } from 'react-toastify';
import * as API from 'services/api';
import { BackLink } from 'components/BackLink/BackLink';
import { Article, Title, Label, Item } from './MovieDetails.styled';

const IMG_URL = 'https://image.tmdb.org/t/p/w300';

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    (async function getMovie() {
      try {
        const movie = await API.getMovieDetails(movieId);
        setMovie(movie);
      } catch (error) {
        toast.error('Film is not found');
        navigate('/', { replace: true });
        console.log(error);
      }
    })();
  }, [movieId, navigate]);

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
  console.log(location);
  const backLinkHref = location.state?.from ?? '/';
  const search = useRef(location.state?.from?.search);
  console.log(search);

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
          <Link
            to="cast"
            state={{ from: search.current ? `/movies${search.current}` : '/' }}
          >
            Cast
          </Link>
        </Item>
        <Item>
          <Link
            to="reviews"
            state={{ from: search.current ? `/movies${search.current}` : '/' }}
          >
            Reviews
          </Link>
        </Item>
      </ul>
      <Outlet />
    </>
  );
}
