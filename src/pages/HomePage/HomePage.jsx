import Header from 'components/Header/Header';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refresh } from '../../redux/auth/authOperations';
import { isAuthSelector } from '../../redux/auth/authSelectors';
import * as Styled from './HomePage.styled';

function HomePage() {
  const isAuth = useSelector(isAuthSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Styled.Div>
        <Styled.WelcomeTitle>
          Welcome to you personal contact list!
        </Styled.WelcomeTitle>
        {isAuth ? (
          <Styled.SuccessfulMessage>
            Thank you, you are now succesfully logged in!
          </Styled.SuccessfulMessage>
        ) : (
          <Styled.DefaultMessage>
            Log in to see your contact book or sign up to join our service
          </Styled.DefaultMessage>
        )}
      </Styled.Div>
    </>
  );
}

export default HomePage;
