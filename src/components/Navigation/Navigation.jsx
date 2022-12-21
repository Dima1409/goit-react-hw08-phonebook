import useAuth from "hooks/useAuth";
import { StyledLink } from "components/AuthNav/AuthNav.styled";

const Navigation = () => {
    const {isLoggedIn} = useAuth();

    return (
        <nav>
            <StyledLink to='/'>Home</StyledLink>
            {isLoggedIn && (
                <StyledLink to='/contacts'>Contacts</StyledLink>
            )}
        </nav>
    );
};
export default Navigation;