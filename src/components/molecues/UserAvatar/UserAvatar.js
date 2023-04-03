import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  Avatar,
  ButtonsContainer,
  Container,
  Counter,
} from './UserAvatar.style';

const UserAvatar = () => {
  return (
    <Container>
      <ButtonsContainer>
        <button>
          <FontAwesomeIcon icon={faStar} /> Star
        </button>
        <Counter>47</Counter>
      </ButtonsContainer>
      <Avatar src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
    </Container>
  );
};

export default UserAvatar;
