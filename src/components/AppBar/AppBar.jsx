import Navigation from "components/Navigation";
import UserMenu from "components/UserMenu/UserMenu";
import AuthNav from "components/AuthNav";
import useAuth from "hooks/useAuth";

const AppBar = () => {
    const {isLoggedIn} = useAuth();

    return (
        <header>
            <Navigation/>
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </header>
    );
};

export default AppBar;