import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout';
import { createAsyncComponent } from 'helpers/createAsyncComponent';

const Home = createAsyncComponent('pages', 'Home');
const Movies = createAsyncComponent('pages', 'Movies');
const MovieDetails = createAsyncComponent('pages', 'MovieDetails');
const Cast = createAsyncComponent('components', 'Cast');
const Reviews = createAsyncComponent('components', 'Reviews');

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:slug" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}
