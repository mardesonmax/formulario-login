import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface LabelProps {
  isFocused: boolean;
  isError: boolean;
  isFilled: boolean;
}

export const Container = styled.label<LabelProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #cfcfcf;
  background: #f2f2f2;
  border: 2px solid #f2f2f2;
  padding: 16px;
  border-radius: 5px;
  border-radius: 5px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  transition: 0.2s ease all;
  cursor: text;

  ${(props) =>
    props.isError &&
    css`
      border-color: #f25264;
      animation: animation 0.2s;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #12c2e9;
      > svg {
        color: #12c2e9;
        transform: scale(1.5);
      }
    `}

    ${(props) =>
    props.isFilled &&
    css`
      > svg {
        color: #12c2e9;
        transform: scale(1.5);
      }
    `}

  @keyframes animation {
    0%,
    100% {
      transform: translateX(-5px);
    }

    50% {
      transform: translateX(5px);
    }
  }

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: #303030;

    &::placeholder {
      color: #cfcfcf;
    }
  }

  > svg {
    margin-right: 10px;
    transition: 0.2s ease all;
  }

  & + label {
    margin-top: 10px;
  }
`;

export const Error = styled(Tooltip)`
  width: 16px;
  height: 16px;
  margin-left: 10px;
  cursor: default;

  svg {
    font-size: 18px;
  }

  span {
    background: #f25264;

    &::before {
      border-color: #f25264 transparent;
    }
  }
`;
