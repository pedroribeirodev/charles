import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    input {
      background: #fff;
      border: 1px solid #000;
      border-radius: 6px;
      height: 44px;
      padding: 0 15px;
      color: #333;
      margin: 0 0 10px;
      &::placeholder {
        color: #333;
      }
      &:focus {
        border: 1px solid #3b9eff;
      }
    }
    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }
    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      border: 0;
      color: #fff;
      border-radius: 6px;
      font-size: 16px;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }
    a {
      color: #000;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
    }
  }
`;
