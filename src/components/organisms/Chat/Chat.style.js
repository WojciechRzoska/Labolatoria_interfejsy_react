
import styled from "styled-components";


export const ChatButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px;
  background-color: #ccc;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

export const ChatContainer = styled.div`
  position: fixed;
  bottom: 80px;
  right: 20px;
  width: 300px;
  height: 400px;
  background-color: #ccc;
  border-radius: 5px;
  padding: 5px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;
export const ChatSpace = styled.div`
height:80%;
width: 100%;
background-color:white;`

export const ChatInput = styled.input`
margin-top: 10px;
border: none;
border: 25%;
width:100%;`

export const StyledButton = styled.button`
padding: 0.1rem;
margin-top: 10px;
border: none;
width: 100px;
border-radius: 25%;
cursor: pointer;
`