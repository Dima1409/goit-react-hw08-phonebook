import React from 'react';
import {
  List,
  ListItem,
  Number,
  DeleteButton,
  ItemInfo,
  CallTo,
} from './ListContact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { AiTwotoneDelete, AiOutlinePhone } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import useContactSelectors from 'hooks/useContactSelectors';
import useFilterSelectors from 'hooks/useFilterSelectors';

const ListContact = () => {
  const {contacts, isLoading} = useContactSelectors();
 const {filtered} = useFilterSelectors()
  const dispatch = useDispatch();

  const onDeleteItem = id => {
    dispatch(deleteContact(id));
  };

  const getSortContacts = () => {
    const normalizedValue = filtered.toLowerCase().trim();
    return contacts.filter(elem =>
      elem.name.toLowerCase().includes(normalizedValue)
    );
  };
  const sortedContacts = getSortContacts().sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <List>
      {sortedContacts.length === 0
        ? null
        : sortedContacts.map(({ id, name, number }, index) => {
            return (
              <ListItem key={id}>
                <ItemInfo>
                  <span>{index + 1}.</span>
                  <span>{name}:</span>
                  <Number>{number}</Number>
                </ItemInfo>

                <IconContext.Provider value={{ size: '25px' }}>
                  <CallTo href={`tel:${number}`}>
                    <AiOutlinePhone />
                  </CallTo>
                  <DeleteButton
                    disabled={isLoading}
                    onClick={() => onDeleteItem(id)}
                  >
                    <AiTwotoneDelete />
                  </DeleteButton>
                </IconContext.Provider>
              </ListItem>
            );
          })}
    </List>
  );
};

export default ListContact;
