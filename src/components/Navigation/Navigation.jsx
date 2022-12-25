import useAuth from "hooks/useAuth";
import { StyledLink } from "components/AuthNav/AuthNav.styled";
import { NavMenu } from "./Navigation.styled";

import { AiFillHome, AiFillContacts } from "react-icons/ai";

const Navigation = () => {
    const {isLoggedIn} = useAuth();

    return (
        <NavMenu>
            <StyledLink to='/'><AiFillHome/><span style={{marginLeft: '4px'}}>Home</span></StyledLink>
            {isLoggedIn && (
            <StyledLink style={{display: 'flex', alignItems: 'center'}} to='/contacts'><AiFillContacts/><span style={{marginLeft: '4px'}}>Contacts</span></StyledLink>
            )}
        </NavMenu>
    );
};
export default Navigation;