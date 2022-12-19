import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";

const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            }),
        );
        form.reset();
    };

    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <label>username<input type="text" name="name"/></label>
            <label>email<input type="email" name="email"/></label>
            <label>password<input type="password" name="password"/></label>
            <button type="submit">register</button>
        </form>
    );
};

export default RegisterForm;