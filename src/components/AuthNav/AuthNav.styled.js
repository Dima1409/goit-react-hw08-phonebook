import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)`
  color: ${(props)=>props.theme.text};
  text-decoration: none;
  background-color: ${(props)=>props.theme.main};
  padding: 4px 6px;
  border-radius: 4px;
  vertical-align: middle;
  &:not(:last-child) {
    margin-right: 20px;
  }

  &.active {
    box-shadow: 0 0 8px ${(props)=>props.theme.text}; 
  }
`;

export {StyledLink};