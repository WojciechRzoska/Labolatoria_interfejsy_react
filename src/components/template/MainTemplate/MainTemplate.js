import React from 'react';
import Navigation from '../../organisms/Navigation/Navigation';
import { Container } from './MainTemplate.style';

const MainTemplate = ({ children }) => {
  return (
    <Container>
      <Navigation />
      {children}
    </Container>
  );
};

export default MainTemplate;
