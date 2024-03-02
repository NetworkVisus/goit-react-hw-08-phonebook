import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
  BASIC_TRANSITION,
  BLACK_SECONDARY_COLOR,
  GREY_PRIMARY_COLOR,
  WHITE_COLOR,
  WHITE_PRIMARY_COLOR,
  WHITE_SECONDARY_COLOR,
} from 'constants/constants';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const StyledNavLink = styled(NavLink)`
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
