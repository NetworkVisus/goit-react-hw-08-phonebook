import React from 'react';
import { useSelector } from 'react-redux';
import { isAuthSelector } from '../../../redux/auth/authSelectors';
import * as Styled from './Navigation.styled';

function Navigation() {
  const isAuth = useSelector(isAuthSelector);

  return (
    <Styled.Nav>
      <Styled.StyledNavLink to="/">Home</Styled.StyledNavLink>
      {isAuth && (
        <Styled.StyledNavLink to="/contacts">Contacts</Styled.StyledNavLink>
      )}
    </Styled.Nav>
  );
}

export default Navigation;
