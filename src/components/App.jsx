import HomePage from 'pages/Home';
import MoviesDetails from 'pages/MoviesDetails';
import { Route, Routes } from 'react-router-dom';
import { Container } from './App/App.styled';
import Layout from './Layout/Layout';

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<div> search form</div>} />
          <Route path="movies/:moviesId" element={<MoviesDetails />} />
        </Route>
      </Routes>
    </Container>
  );
};

export default App;
