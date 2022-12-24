import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from 'redux/auth/operations';
import {
  Form,
  LabelForm,
  LabelInput,
  ButtonSubmit,
} from 'components/Form/Form.styled';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const InputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
        <LabelInput type="text" name="name" value={name} onChange={InputChange} pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" required/>
      </LabelForm>
      <LabelForm>
        email
        <LabelInput type="email" name="email" value={email} onChange={InputChange} pattern="[^@\s]+@[^@\s]+\.[^@\s]+" title="Email address must contain the '@' symbol For example user@gmail.com" required/>
      </LabelForm>
      <LabelForm>
        password
        <LabelInput type="password" name="password" value={password} onChange={InputChange} pattern=".{4,16}" title="Please enter between 4 and 10 characters. For example '1234abcd'," required/>
      </LabelForm>
      <ButtonSubmit type="submit" disabled={!name || !email || !password}>register</ButtonSubmit>
    </Form>
  );
};

export default RegisterForm;
