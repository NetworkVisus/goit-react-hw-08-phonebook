import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/auth/authOperations';
import * as Styled from '../AuthPages.styled';

function LoginPage() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const email = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value;

    dispatch(
      login({
        email,
        password,
      })
    );
    e.currentTarget.reset();
  };

  return (
    <Styled.MainDiv>
      <Styled.WelcomeTitle>You can login here!</Styled.WelcomeTitle>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.InputDiv>
          <Styled.Label htmlFor="emailInput">Your email address</Styled.Label>
          <Styled.Input type="email" name="email" id="emailInput" required />
        </Styled.InputDiv>
        <Styled.InputDiv>
          <Styled.Label htmlFor="passwordInput">Password</Styled.Label>
          <Styled.Input
            name="password"
            type="password"
            id="passwordInput"
            required
          />
        </Styled.InputDiv>
        <Styled.LoginSignupDiv>
          <Styled.AdditionalLinkLook to="/register">
            Sign up
          </Styled.AdditionalLinkLook>
          <Styled.BasicButtonLook type="submit">Login</Styled.BasicButtonLook>
        </Styled.LoginSignupDiv>
        <Styled.BasicLinkLook type="button" to="/">
          Back to Home
        </Styled.BasicLinkLook>
      </Styled.Form>
    </Styled.MainDiv>
  );
}

export default LoginPage;
