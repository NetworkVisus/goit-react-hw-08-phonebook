import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  BASIC_TRANSITION,
  BLACK_SECONDARY_COLOR,
  GREY_PRIMARY_COLOR,
  WHITE_COLOR,
  WHITE_PRIMARY_COLOR,
  WHITE_SECONDARY_COLOR,
} from 'constants/constants';

export const MainDiv = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginSignupDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

export const InputDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
`;

export const BasicLinkLook = styled(Link)`
  color: ${WHITE_PRIMARY_COLOR};
  background-color: ${GREY_PRIMARY_COLOR};
  border: 1px solid ${WHITE_SECONDARY_COLOR};
  border-radius: 5px;
  padding: 5px;
  transition: background-color ${BASIC_TRANSITION}, color ${BASIC_TRANSITION};
  &:active,
  &:focus,
  &:hover {
    color: ${WHITE_COLOR};
    background-color: ${BLACK_SECONDARY_COLOR};
  }
  display: flex;
  justify-content: center;
`;

export const BasicButtonLook = styled(BasicLinkLook).attrs({ as: 'button' })`
  font-size: 15px;
  font-weight: 700;
  padding: 10px;
`;

export const AdditionalLinkLook = styled(Link)`
  color: ${WHITE_PRIMARY_COLOR};
  text-decoration: underline;
  transition: color ${BASIC_TRANSITION};
  &:active,
  &:focus,
  &:hover {
    color: ${WHITE_COLOR};
  }
`;

export const Label = styled.label`
  font-size: 20px;
`;
export const Input = styled.input`
  border-color: transparent;
  border-radius: 5px;
  &:active,
  &:focus {
    outline: 1px solid ${BLACK_SECONDARY_COLOR};
  }
`;

export const WelcomeTitle = styled.h1`
  margin-bottom: 50px;
`;
