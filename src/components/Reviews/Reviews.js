import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as API from 'services/api';
import { Item, Label, Text } from './Reviews.styled';

export function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    (async function getMovie() {
      try {
        const reviews = await API.getMovieReviews(movieId);
        setReviews(reviews.results);
      } catch (error) {
        toast.error('Something wrong');
        console.log(error);
      }
    })();
  }, [movieId]);

  return reviews.length === 0 ? (
    <p>We don't have any reviews for this movie.</p>
  ) : (
    <ul>
      {reviews.map(({ author, content, id }) => (
        <Item key={id}>
          <Label>Author: </Label>
          <span>{author}</span>
          <Text>{content}</Text>
        </Item>
      ))}
    </ul>
  );
}
