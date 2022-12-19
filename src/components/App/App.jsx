import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectTheme, selectLoading, selectError } from 'redux/contacts/selectors';
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

const App = () => {
  const isDarkTheme = useSelector(selectTheme);
  const loading = useSelector(selectLoading);
  const isErr = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <StyledApp>
        <Container>
          <Global />
          <ScrollToTop />
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
          </ContainerList>
        </Container>
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
