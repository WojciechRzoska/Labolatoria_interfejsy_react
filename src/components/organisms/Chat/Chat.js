import React, { useState } from "react";
import { ChatButton, ChatContainer, ChatInput, ChatSpace, StyledButton} from "./Chat.style";

const Chat = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const handleOpenMenu = () => {
      setOpenMenu(!openMenu);
      console.log(openMenu);
    };

    return(
        <>
        <ChatButton onClick={handleOpenMenu}>Chat</ChatButton>
        <ChatContainer isOpen={openMenu}>
            Chat
          <ChatSpace></ChatSpace>
          <ChatInput/>
          <StyledButton>Wyślij </StyledButton>
        </ChatContainer>
      </>
    )
 
};

export default Chat;
