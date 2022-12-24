import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate} from 'react-router-dom';
import Layout from 'components/Layout';
import ScrollToTop from 'components/Helpers/ScrollToTop';
import { refreshUser } from 'redux/auth/operations';
import PrivateRoute from 'components/Routs/PrivateRoute';
import RestrictedRoute from 'components/Routs/ResrictedRoute';
import useAuth from 'hooks/useAuth';
import { selectTheme } from 'redux/theme/selectors';
import { darkTheme, lightTheme } from 'components/ThemeBtn/theme';
import ContactEditorForm from 'components/ContactEditorForm';
import {
  Container,
  Global,
  StyledApp,
} from './App.styled';
import { ThemeProvider } from 'styled-components';

const HomePage = lazy(()=>import ('../../pages/Home'));
const LoginPage = lazy(()=>import ('../../pages/LogIn'));
const RegisterPage = lazy(()=>import ('../../pages/Registration'));
const PhonebookPage = lazy(()=>import ('../../pages/PhoneBook/PhoneBook'));

const App = () => {
  const isDarkTheme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const {isRefreshing} = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <StyledApp>
        <Container>
          <Global />
          <ScrollToTop />
          {isRefreshing ? (<b>Refreshing user...</b>) : (
            <Routes>
              <Route path='/' element={<Layout/>}>
              <Route index element={<HomePage/>}/>
              <Route path='/register' element={<RestrictedRoute component={RegisterPage} redirectTo='/contacts' />}></Route>
              <Route path='/login' element={<RestrictedRoute component={LoginPage} redirectTo='/contacts' />}></Route>
              <Route path='/contacts' element={<PrivateRoute component={PhonebookPage} redirectTo='/login' />}></Route>
              <Route path='/contacts/edit/:contactId' element={<ContactEditorForm />}></Route>
              <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            </Routes>
          )}
        </Container>
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
