import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)`
  color: black;
  &:not(:last-child) {
    margin-right: 10px;
  }

  &.active {
    color: orange;
  }
`;

export {StyledLink};