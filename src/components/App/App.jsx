import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes} from 'react-router-dom';
import Layout from 'components/Layout';
import ScrollToTop from 'components/Helpers/ScrollToTop';
import { refreshUser } from 'redux/auth/operations';
import PrivateRoute from 'components/Routs/PrivateRoute';
import RestrictedRoute from 'components/Routs/ResrictedRoute';
import useAuth from 'hooks/useAuth';
import { selectTheme } from 'redux/theme/selectors';
import { darkTheme, lightTheme } from 'components/ThemeBtn/theme';
import {
  Container,
  Global,
  StyledApp,
  // ContainerList,
  // ListTitle,
  // FormTitle,
  // ListIsEmpty,
  // Heading,
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
          <ScrollToTop />
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
          {/* 
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
