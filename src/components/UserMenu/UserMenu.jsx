import useAuth from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations"
import { AiOutlineExport } from "react-icons/ai";

const UserMenu = () => {
 const dispatch = useDispatch();
 const {user} = useAuth();

 return (
    <div style={{display: 'flex', justifyContent: 'space-between', marginLeft: 'auto', alignItems: 'center'}}>
        <p style={{marginRight: '6px', fontSize: '22px'}}>{user.name}</p>
        <button style={{margin: '0', padding: '6px', fontSize: '16px'}} onClick={()=>dispatch(logOut())}><AiOutlineExport/> Logout</button>
    </div>
 );
};

export default UserMenu;