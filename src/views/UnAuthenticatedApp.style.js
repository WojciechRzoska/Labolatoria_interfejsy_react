import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: #ccc;
  padding: 2rem;
  button {
    margin-top: 20px;
  }
`;
export const StyledInput = styled.input`
  height: 30px;
  border: none;
`;
