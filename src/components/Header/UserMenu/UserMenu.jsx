import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../redux/auth/authOperations';
import { userSelector } from '../../../redux/auth/authSelectors';
import * as Styled from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault();

    dispatch(logout());
  };

  const { email, name } = useSelector(userSelector);

  return (
    <Styled.Div>
      <Styled.WelcomeText>
        Hello,
        {email ? ` ${name}!` : ' stranger, there is no truth in foots!'}
      </Styled.WelcomeText>
      <Styled.Button type="button" onClick={handleClick}>
        Log out
      </Styled.Button>
    </Styled.Div>
  );
}
