import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  font-size: 18px;
  color: #2a363b;

  margin-bottom: 15px;

  &:hover,
  &:focus {
    color: #2196f3;
  }
`;
