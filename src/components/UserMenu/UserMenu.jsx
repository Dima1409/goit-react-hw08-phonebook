import useAuth from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";

const UserMenu = () => {
 const dispatch = useDispatch();
 const {user} = useAuth();

 return (
    <div>
        <p>Welcome, {user.name}</p>
        <button onClick={()=>dispatch(logOut())}>Logout</button>
    </div>
 );
};

export default UserMenu;