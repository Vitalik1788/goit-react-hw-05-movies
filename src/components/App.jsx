import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Container } from './App/App.styled';
import Layout from './Layout/Layout';
import WrongPath from 'pages/WrongPath';

const HomePage = lazy(() => import('../pages/Home'));
const MoviesSearchForm = lazy(() => import('../pages/MoviesSearch'));
const MoviesDetails = lazy(() => import('../pages/MoviesDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesSearchForm />} />
          <Route path="movies/:moviesId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path='*' element={<WrongPath />} />
        </Route>
      </Routes>
    </Container>
  );
};

export default App;
