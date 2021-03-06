import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  margin: 20px 0;
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  width: 100%;

  border: 0;
  border-radius: 5px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  background: #12c2e9;
  color: #fff;
  transition: 0.2s ease all;

  &:hover {
    transform: scale(0.98);
    background-color: ${shade(0.2, '#12c2e9')};
  }
`;
