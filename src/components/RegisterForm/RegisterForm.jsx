import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  Form,
  LabelForm,
  LabelInput,
  ButtonSubmit,
} from 'components/Form/Form.styled';

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
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <LabelForm>
        username
        <LabelInput type="text" name="name" />
      </LabelForm>
      <LabelForm>
        email
        <LabelInput type="email" name="email" />
      </LabelForm>
      <LabelForm>
        password
        <LabelInput type="password" name="password" />
      </LabelForm>
      <ButtonSubmit type="submit">register</ButtonSubmit>
    </Form>
  );
};

export default RegisterForm;
