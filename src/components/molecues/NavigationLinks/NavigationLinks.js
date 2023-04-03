import React, { useContext } from 'react';
import { Container, StyledButton } from './NavigationLinks.style';
import { NavLink } from 'react-router-dom';
import { FontSizeContext } from '../../../providers/FontProvider';

const NavigationLinks = () => {
  const { increaseFont, reduceFont, handleTheme } = useContext(FontSizeContext);
  return (
    <Container>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about"> About</NavLink>
      <NavLink to="/account-settings">Settings</NavLink>

      <StyledButton onClick={increaseFont}>A+</StyledButton>
      <StyledButton onClick={reduceFont}>A-</StyledButton>
      <StyledButton onClick={handleTheme}>Change theme</StyledButton>
    </Container>
  );
};

export default NavigationLinks;
