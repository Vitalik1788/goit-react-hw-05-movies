import { Outlet } from "react-router-dom";
import { NavList, LinkStyle } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <NavList>
        <li>
          <LinkStyle to="/">Home</LinkStyle>
        </li>
        <li>
          <LinkStyle to="/movies">Movies</LinkStyle>
        </li>
      </NavList>
      <Outlet />
    </>
  );
}

export default Layout;