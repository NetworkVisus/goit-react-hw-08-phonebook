import styled from 'styled-components';
import {
  BASIC_TRANSITION,
  BLACK_SECONDARY_COLOR,
  GREY_PRIMARY_COLOR,
  WHITE_COLOR,
  WHITE_PRIMARY_COLOR,
  WHITE_SECONDARY_COLOR,
} from 'constants/constants';

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
export const WelcomeText = styled.p``;
export const Button = styled.button`
  color: ${WHITE_PRIMARY_COLOR};
  background-color: ${GREY_PRIMARY_COLOR};
  border: 1px solid ${WHITE_SECONDARY_COLOR};
  font-size: 15px;
  font-weight: 700;
  border-radius: 5px;
  padding: 10px;
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
