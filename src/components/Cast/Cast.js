import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as API from 'services/api';
import { Title, Item, Label } from './Cast.styled';

const IMG_URL = 'https://image.tmdb.org/t/p/w200';

export function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    (async function getMovie() {
      try {
        const movie = await API.getMovieCredits(movieId);
        setCast(movie.cast);
      } catch (error) {
        toast.error('Something wrong');
        console.log(error);
      }
    })();
  }, [movieId]);

  return (
    <ul>
      {cast.map(({ profile_path, original_name, character, id }) => (
        <Item key={id}>
          <img
            src={
              profile_path
                ? IMG_URL + profile_path
                : 'https://cloupyblob.blob.core.windows.net/cloupy/image-not-found.png'
            }
            alt={original_name}
          />
          <Title>{original_name}</Title>
          <Label>Character: </Label>
          <span>{character}</span>
        </Item>
      ))}
    </ul>
  );
}
