import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)`
  color: ${(props)=>props.theme.text};
  text-decoration: none;
  background-color: ${(props)=>props.theme.main};
  border-radius: 4px;
  padding: 2px 5px;
  transition: box-shadow 0.3s;
  &:not(:last-child) {
  margin-right: 6px;
  display: flex;
  align-items: center;
  } 
  &.active {
    box-shadow: 0 0 8px ${(props)=>props.theme.text}; 
  }
  &:hover {
  box-shadow: 0 0 4px ${(props)=>props.theme.text};
  }
  @media screen and (min-width: 768px) {
  padding: 4px 6px;
  &:not(:last-child) {
  margin-right: 20px;
  }
} 
`;

const AuthMenu = styled.nav`
display: flex;
`

export {StyledLink, AuthMenu};