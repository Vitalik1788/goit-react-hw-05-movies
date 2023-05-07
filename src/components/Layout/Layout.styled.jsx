import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";


export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  padding: 0;
`
const navLink = NavLink;
export const LinkStyle = styled(navLink)`
  text-decoration: none;
  color: darkblue;
  font-size: 32px;

  &:hover, :focus {
    color: red;
  }


`;