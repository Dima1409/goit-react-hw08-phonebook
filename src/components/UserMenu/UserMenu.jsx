import useAuth from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";
import { ButtonSubmit } from "components/Form/Form.styled";

const UserMenu = () => {
 const dispatch = useDispatch();
 const {user} = useAuth();

 return (
    <div style={{display: 'flex', justifyContent: 'space-between', marginLeft: 'auto', alignItems: 'center'}}>
        <p style={{marginRight: '6px'}}>{user.name}</p>
        <ButtonSubmit onClick={()=>dispatch(logOut())}>Logout</ButtonSubmit>
    </div>
 );
};

export default UserMenu;