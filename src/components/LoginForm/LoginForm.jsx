import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";


const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currenttarget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <form onSubmit={handleSubmit} autoComplete='off'>
            <label>
                email
                <input type='email' name='email'/>
            </label>
            <label>
                password
                <input type='password' name='password'/>
            </label>
            <button type='submit'>log in</button>
        </form>
    )
}

export default LoginForm;