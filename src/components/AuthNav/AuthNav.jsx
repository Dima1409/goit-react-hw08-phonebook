import { StyledLink, AuthMenu } from "./AuthNav.styled";

const AuthNav = () => {
    return (
      <AuthMenu>
        <StyledLink to='/register'><span>Register</span></StyledLink>
        <StyledLink to='/login'><span>Log In</span></StyledLink>
    </AuthMenu>  
    )
};

export default AuthNav;


