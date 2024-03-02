import React from 'react';
import * as Styled from './UserMenuLogOut.styled';

export default function UserMenuLoggedOut() {
  return (
    <Styled.Nav>
      <Styled.StyledNavLink to="/login">Log in</Styled.StyledNavLink>
      <Styled.StyledNavLink to="/register">Sign up</Styled.StyledNavLink>
    </Styled.Nav>
  );
}
