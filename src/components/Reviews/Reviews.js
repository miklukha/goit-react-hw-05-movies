import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';

export function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // loader and error (toastify)
    (async function getMovie() {
      try {
        const reviews = await getMovieReviews(movieId);
        setReviews(reviews.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieId]);

  return reviews.length === 0 ? (
    <p>We don't have any reviews for this movie.</p>
  ) : (
    <ul>
      {reviews.map(({ author, content, id }) => (
        <li key={id} style={{ margin: '30px' }}>
          <span>Author: </span>
          <span>{author}</span>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
}
