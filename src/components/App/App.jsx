import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from 'components/Layout';

// import Phonebook from '../../pages/PhoneBook';
// import Login from '../../pages/Login';
// import Registration from '../../pages/Registration';
import { refreshUser } from 'redux/auth/operations';
import PrivateRoute from 'components/Routs/PrivateRoute';
import RestrictedRoute from 'components/Routs/ResrictedRoute';
import useAuth from 'hooks/useAuth';
// import { fetchContacts } from 'redux/contacts/operations';
// import { selectLoading, selectError } from 'redux/contacts/selectors';
import { selectTheme } from 'redux/theme/selectors';
import ContactsForm from 'components/Form';
import Loader from 'components/Loader';
import ThemeBtn from 'components/ThemeBtn';
import ListContact from 'components/ListContact';
import SearchInput from 'components/SearchInput';
import ScrollToTop from 'components/Helpers/ScrollToTop';
import { darkTheme, lightTheme } from 'components/ThemeBtn/theme';
import {
  Container,
  ContainerList,
  ListTitle,
  FormTitle,
  ListIsEmpty,
  Global,
  Heading,
  StyledApp
} from './App.styled';
import { ThemeProvider } from 'styled-components';

const HomePage = lazy(()=>import ('../../pages/Home'));
const LoginPage = lazy(()=>import ('../../pages/LogIn'));
const RegisterPage = lazy(()=>import ('../../pages/Registration'));
const PhonebookPage = lazy(()=>import ('../../pages/PhoneBook'));

const App = () => {
  const isDarkTheme = useSelector(selectTheme);
  // const loading = useSelector(selectLoading);
  // const isErr = useSelector(selectError);
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
          {isRefreshing ? (<b>Refreshing user...</b>) : (
            <Routes>
              <Route path='/' element={<Layout/>}>
              <Route index element={<HomePage/>}/>
              <Route path='/register' element={<RestrictedRoute redirectTo='/contacts' component={<RegisterPage/>}/>}></Route>
              <Route path='/login' element={<RestrictedRoute redirectTo='/contacts' component={<LoginPage/>}/>}></Route>
              <Route path='/contacts' element={<PrivateRoute redirectTo='/login' component={PhonebookPage}/>}></Route>
              </Route>
            </Routes>
          )}
          {/* <ScrollToTop />
          <Heading>
            <FormTitle>Phonebook</FormTitle>
            <ThemeBtn />
          </Heading>
          <ContactsForm />
          <ContainerList>
            <ListTitle>Contacts</ListTitle>
            {fetchContacts().length > 0 ? (
              <SearchInput></SearchInput>
            ) : (
              <ListIsEmpty>
                Your list is empty... Please add a new contact
              </ListIsEmpty>
            )}
            {loading && !isErr && <Loader />}
            {isErr && <div style={{ color: 'red' }}>loading error!</div>}
            <ListContact></ListContact>
          </ContainerList> */}
        </Container>
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
