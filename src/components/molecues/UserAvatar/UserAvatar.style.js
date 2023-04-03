import styled from 'styled-components';

export const Container = styled.div`
  display: none;
  @media (min-width: 63em) {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 16px;
    margin-left: auto;
  }
`;

export const Avatar = styled.img`
  max-height: 40px;
  border-radius: 50%;
`;
export const ButtonsContainer = styled.div`
  border: 1px solid black;
  display: flex;

  button {
    border: none;
    border-right: 1px solid black;
    width: 64px
    height: 24px;
  }
`;
export const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
`;
