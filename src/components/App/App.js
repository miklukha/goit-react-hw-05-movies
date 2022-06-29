import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout';
import { createAsyncComponent } from 'helpers/createAsyncComponent';

const Home = createAsyncComponent('Home');
const Movies = createAsyncComponent('Movies');
const MovieDetails = createAsyncComponent('MovieDetails');
const Cast = createAsyncComponent('Cast');
const Reviews = createAsyncComponent('Reviews');

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

/*
 * toastify
 * propTypes
 * styles
 * hook
 */
