import React, { createContext, useState } from 'react';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { darkTheme, lightTheme } from '../assets/styles/theme';
import { ThemeProvider } from 'styled-components';

export const FontSizeContext = createContext({
  fontSize: '',
  increaseFont: () => {},
  reduceFont: () => {},
  darkTheme: false,
  logged: false,
});

const FontProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(16);
  const [isDarkTheme, setDarkTheme] = useState(false);
  const [isLogged, setLogged] = useState(false);

  const increaseFont = () => {
    if (fontSize <= 32) setFontSize(fontSize + 1);
  };
  const reduceFont = () => {
    if (fontSize >= 8) setFontSize(fontSize - 1);
  };
  const handleLogin = () => {
    setLogged(true);
    console.log(isLogged);
  };
  const handleTheme = () => {
    setDarkTheme(!isDarkTheme);
  };
  const handleLogout = () => {
    setLogged(false);
  };
  return (
    <FontSizeContext.Provider
      value={{
        fontSize,
        increaseFont,
        reduceFont,
        handleTheme,
        handleLogin,
        isLogged,
        handleLogout,
      }}
    >
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyle fontSize={fontSize} />
        {children}
      </ThemeProvider>
    </FontSizeContext.Provider>
  );
};
export default FontProvider;
