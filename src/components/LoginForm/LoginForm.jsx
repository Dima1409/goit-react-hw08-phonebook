import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";
import { Form, LabelForm, LabelInput, ButtonSubmit } from "components/Form/Form.styled";

const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <>
        <Form onSubmit={handleSubmit} autoComplete='off'>
            <LabelForm>
                email
                <LabelInput type='email' name='email'/>
            </LabelForm>
            <LabelForm>
                password
                <LabelInput type='password' name='password'/>
            </LabelForm>
            <ButtonSubmit type='submit'>log in</ButtonSubmit>
        </Form>
        </>
        
    )
}

export default LoginForm;