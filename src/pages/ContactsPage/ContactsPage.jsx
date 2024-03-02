import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { Form } from 'components/Form/Form';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refresh } from '../../redux/auth/authOperations';
import { getContacts } from '../../redux/contacts/operations';
import * as Styled from './ContactsPage.styled';

function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    const refreshUser = async () => {
      try {
        await dispatch(refresh());
        dispatch(getContacts());
      } catch (error) {
        console.log(`Ooops an error occured: ${error}`);
      }
    };

    refreshUser();
  }, [dispatch]);

  return (
    <>
      <Styled.NavLinkStyled to="/"> {'Back to Home'}</Styled.NavLinkStyled>

      <Styled.NewContactTitle>Add new contact:</Styled.NewContactTitle>
      <Form />
      <Styled.ExistingContactsTitle>
        Your contact book:
      </Styled.ExistingContactsTitle>
      <Filter />
      <Contacts />
    </>
  );
}

export default ContactsPage;
