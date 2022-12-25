import Form from 'components/Form';
import Loader from 'components/Loader';
import ListContact from 'components/ListContact';
import SearchInput from 'components/SearchInput';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import useAuth from 'hooks/useAuth';
import useSelectors from 'hooks/useContactSelectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Heading, FormTitle, ListTitle, ContainerList, ListIsEmpty } from './PhoneBook.styled';
import ThemeBtn from 'components/ThemeBtn';

export default function Phonebook () {
  const { isLoading, isError } = useSelectors();
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoggedIn ? (
        <>
          <Heading>
            <FormTitle>Phonebook</FormTitle>
            <ThemeBtn />
          </Heading>
          <Form />
          <ContainerList>
            <ListTitle>Contacts</ListTitle>
            {fetchContacts().length > 0 ? (
              <>
              <SearchInput/>
              <ListContact />
              </>
              
            ) : (
              <ListIsEmpty>
                Your list is empty... Please add a new contact
              </ListIsEmpty>
            )}
            {isLoading && !isError && <Loader />}
            {isError && <div style={{ color: 'red' }}>loading error!</div>}
            
          </ContainerList>
        </>
      ) : (
        <>please login</>
      )}
    </>
  );
};
// export default Phonebook;
