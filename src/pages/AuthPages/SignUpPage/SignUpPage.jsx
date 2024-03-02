import React from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../../../redux/auth/authOperations';
import * as Styled from '../AuthPages.styled';

function SignUpPage() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const email = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value;
    const name = e.currentTarget.elements.name.value;

    dispatch(signup({ name, password, email }));

    e.currentTarget.reset();
  };

  return (
    <Styled.MainDiv>
      <Styled.WelcomeTitle>You can signup here!</Styled.WelcomeTitle>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.InputDiv>
          <Styled.Label htmlFor="nameInput">Name</Styled.Label>
          <Styled.Input name="name" type="name" id="nameInout" required />
        </Styled.InputDiv>
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
          <Styled.AdditionalLinkLook to="/login">
            Login
          </Styled.AdditionalLinkLook>
          <Styled.BasicButtonLook type="submit">Sign Up</Styled.BasicButtonLook>
        </Styled.LoginSignupDiv>
        <Styled.BasicLinkLook type="button" to="/">
          Back to Home
        </Styled.BasicLinkLook>
      </Styled.Form>
    </Styled.MainDiv>
  );
}

export default SignUpPage;
