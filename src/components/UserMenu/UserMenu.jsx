import useAuth from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations"
import { AiOutlineLogout } from "react-icons/ai";
import { Menu, UserName, LogOut } from "./UserMenu.styled";

const UserMenu = () => {
 const dispatch = useDispatch();
 const {user} = useAuth();

 return (
    <Menu>
        <UserName>{user.name}</UserName>
        <LogOut onClick={()=>dispatch(logOut())}><AiOutlineLogout/></LogOut>
    </Menu>
 );
};

export default UserMenu;