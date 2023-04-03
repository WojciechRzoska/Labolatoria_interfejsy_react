import React, { useState } from 'react';
import {
  HamburgerMenu,
  Logo,
  NavbarContainer,
  StyledFontAwesomeIcon,
} from './Navigation.style';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import NavigationLinks from '../../molecues/NavigationLinks/NavigationLinks';

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <NavbarContainer>
        <Logo>
          <img
            src="https://www.freepnglogos.com/uploads/tesla-logo-png-20.png"
            alt="tesla logo"
          ></img>
        </Logo>
        <NavigationLinks />
        {!openMenu ? (
          <StyledFontAwesomeIcon icon={faBars} onClick={handleOpenMenu} />
        ) : (
          <StyledFontAwesomeIcon icon={faXmark} onClick={handleOpenMenu} />
        )}
      </NavbarContainer>
      <HamburgerMenu openMenu={openMenu}>
        <NavigationLinks />
      </HamburgerMenu>
    </>
  );
};

export default Navigation;
