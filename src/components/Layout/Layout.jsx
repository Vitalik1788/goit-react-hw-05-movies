import { Outlet } from "react-router-dom";
import { NavList, LinkStyle } from './Layout.styled';
import { Suspense } from "react";
import Spiner from "components/Spiner/Spiner";

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
      <Suspense fallback={<Spiner />}>
        <Outlet />
      </Suspense>
      
    </>
  );
}

export default Layout;