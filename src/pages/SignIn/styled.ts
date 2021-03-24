import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  background: linear-gradient(
    to right,
    #12c2e9 -0.73%,
    #c471ed 49.74%,
    #f25264 99.99%
  );
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 200px;
    margin-top: -40px;
    margin-bottom: 20px;
  }

  form {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 350px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

    a {
      text-decoration: none;
      color: #f25264;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f25264')};
      }
    }
  }
`;
