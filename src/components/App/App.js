import { Routes, Route } from 'react-router-dom';
// import {
//   getTrending,
//   getMovieByQuery,
//   getMovieDetails,
//   getMovieCredits,
//   getMovieReviews,
//   getGenres,
// } from 'services/api';
import { Home } from 'components/Home';
import { Movies } from 'components/Movies';
import { Header } from 'components/Header';
import { Container } from './App.styled';

export function App() {
  return (
    <>
      <Header />

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </Container>
    </>
  );
}

/*
 * '/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
 * /movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
 * /movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.
 */
