import styled from 'styled-components';
import {
  WHITE_PRIMARY_COLOR,
  WHITE_COLOR,
  WHITE_SECONDARY_COLOR,
  GREY_PRIMARY_COLOR,
  BLACK_SECONDARY_COLOR,
  BASIC_TRANSITION,
} from 'constants/constants';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
`;
export const Input = styled.input`
  width: 200px;
  outline: none;
  border-radius: 15px;
  border: 1px solid ${WHITE_SECONDARY_COLOR};
  padding: 10px;
`;
export const SubmitBtn = styled.button`
  width: 200px;
  background-color: ${GREY_PRIMARY_COLOR};
  font-size: 15px;
  font-weight: 700;
  border: 1px solid ${WHITE_SECONDARY_COLOR};
  border-radius: 10px;
  padding: 7px;
  color: ${WHITE_PRIMARY_COLOR};
  transition: background-color ${BASIC_TRANSITION}, color ${BASIC_TRANSITION};
  &:hover,
  &:focus {
    color: ${WHITE_COLOR};
    background-color: ${BLACK_SECONDARY_COLOR};
  }
`;

export const Label = styled.label`
  font-size: 20px;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
