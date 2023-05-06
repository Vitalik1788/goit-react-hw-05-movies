import HomePage from "pages/Home";
import MoviesDetails from "pages/MoviesDetails";
import { NavLink, Route, Routes } from "react-router-dom";
import { Container } from "./App/App.styled";


const App = () => {
  return (
    <Container>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<div> search form</div>} />
        <Route path="/movies/:moviesId" element={<MoviesDetails />} />
      </Routes>
    </Container>
  );
};

export default App;
