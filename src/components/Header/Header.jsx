import React from 'react';
import Navigation from 'components/Header/Navigation/Navigation';
import { useSelector } from 'react-redux';
import { isAuthSelector } from '../../redux/auth/authSelectors';
import UserMenu from './UserMenu/UserMenu';
import UserMenuLoggedOut from './UserMenuLogOut/UserMenuLogOut';
import * as Styled from './Header.styled';

function Header() {
  const isAuth = useSelector(isAuthSelector);

  return (
    <Styled.Header>
      <Navigation />

      {isAuth ? <UserMenu /> : <UserMenuLoggedOut />}
    </Styled.Header>
  );
}

export default Header;
