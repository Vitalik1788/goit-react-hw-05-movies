import HomePage from 'pages/Home';
import MoviesDetails from 'pages/MoviesDetails';
import { Route, Routes } from 'react-router-dom';
import { Container } from './App/App.styled';
import Layout from './Layout/Layout';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<div> search form</div>} />
          <Route path="movies/:moviesId" element={<MoviesDetails />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Container>
  );
};

export default App;
