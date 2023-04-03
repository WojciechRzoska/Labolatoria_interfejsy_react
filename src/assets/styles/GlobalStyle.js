import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before{
    box-sizing: border-box;
  }
  html,button{
    font-size: ${(props) => `${props.fontSize}px`};
  }
  img,
  picture {
  max-width: 100%;
  display: block;
  }
  body{
    margin:0;
    padding: 0;
    font-family: 'Nunito Sans', sans-serif;
    color: ${({ theme }) => theme.colors.fontColor}
  }
  button,input{
    background-color:${({ theme }) => theme.colors.element};
    color: ${({ theme }) => theme.colors.fontColor};
  }
  a{
    color:${({ theme }) => theme.colors.fontColor};
    text-decoration:none;
  }

  
  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }
  button{
    font-family: 'Nunito Sans', sans-serif;
  }
 
`;
