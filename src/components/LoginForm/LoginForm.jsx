import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";
import { useState } from "react";
import { AiTwotoneEyeInvisible, AiTwotoneEye } from "react-icons/ai";
import { Form, LabelForm, LabelInput, ButtonSubmit } from "components/Form/Form.styled";
import { PassButton } from "./LoginForm.styled";


const LoginForm = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(true);

    const showHidePassword = (e) => {
        setShow(!show);
      };

    const InputChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
          case 'email':
            setEmail(value);
            break;
          case 'password':
            setPassword(value);
            break;
          default:
            return;
        }
      };
    
      

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        DefaultValue();
    };
    const DefaultValue = () => {
        setEmail('');
        setPassword('');
      };

    return (
        <>
        <Form onSubmit={handleSubmit} >
            <LabelForm>
                email
                <LabelInput type='email' name='email' value={email} onChange={InputChange} pattern="[^@\s]+@[^@\s]+\.[^@\s]+" title="Email address must contain the '@' symbol For example user@gmail.com" required/>
            </LabelForm>
            <LabelForm>
                password
                <LabelInput type={show ? 'password' : 'text'} name='password' value={password} onChange={InputChange} pattern=".{4,16}" title="Please enter between 4 and 10 characters. For example '1234abcd'," required/>
                <PassButton type="button" onClick={showHidePassword}>{show ? <AiTwotoneEyeInvisible/> : <AiTwotoneEye/>}</PassButton>
            </LabelForm>
            <ButtonSubmit type='submit' disabled={!email || !password}>log in</ButtonSubmit>
        </Form>
        </>
        
    )
}

export default LoginForm;