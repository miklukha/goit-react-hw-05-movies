import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/api';

const IMG_URL = 'https://image.tmdb.org/t/p/w200';

export function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    // loader and error (toastify)
    (async function getMovie() {
      try {
        const movie = await getMovieCredits(movieId);
        const cast = movie.cast;
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieId]);

  return (
    <ul>
      {cast.map(({ profile_path, original_name, character, id }) => (
        <li key={id}>
          <img
            src={
              profile_path
                ? IMG_URL + profile_path
                : 'https://cloupyblob.blob.core.windows.net/cloupy/image-not-found.png'
            }
            alt={original_name}
          />
          <h3>{original_name}</h3>
          <p>Character: </p>
          <span>{character}</span>
        </li>
      ))}
    </ul>
  );
}

// character, original_name, profile_path
