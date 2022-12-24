import useAuth from "hooks/useAuth";
import { StyledLink } from "components/AuthNav/AuthNav.styled";
import { AiFillHome, AiFillContacts } from "react-icons/ai";

const Navigation = () => {
    const {isLoggedIn} = useAuth();

    return (
        <nav>
            <StyledLink to='/'><AiFillHome/> Home</StyledLink>
            {isLoggedIn && (
                <StyledLink to='/contacts'><AiFillContacts/> Contacts</StyledLink>
            )}
        </nav>
    );
};
export default Navigation;