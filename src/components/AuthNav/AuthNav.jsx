import { StyledLink } from "./AuthNav.styled";

const AuthNav = () => {
    return (
      <div>
        <StyledLink to='/register'>Register</StyledLink>
        <StyledLink to='/login'>Log in</StyledLink>
    </div>  
    )
};

export default AuthNav;


