import styled from 'styled-components';

export const Wrapper = styled.div`
  button {
    background: var(--darkGrey);
    width: 15%;
    min-width: 50px;
    height: 30px;
    border-radius: 10px;
    color: var(--white);
    border: 0;
    font-size: var(--fontSmall);
    margin: 10px auto;
    transition: all 0.3s;
    outline: none;
    cursor: pointer;

    :hover {
      filter: brightness(1.5);
    }
  }
`;
