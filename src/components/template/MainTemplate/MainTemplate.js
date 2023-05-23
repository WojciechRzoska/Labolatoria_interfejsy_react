import React from 'react';
import Navigation from '../../organisms/Navigation/Navigation';
import { Container } from './MainTemplate.style';
import Chat from '../../organisms/Chat/Chat';

const MainTemplate = ({ children }) => {
  return (
    <Container>
      <Navigation />
      <Chat/>
      {children}
     
    </Container>
  );
};

export default MainTemplate;
