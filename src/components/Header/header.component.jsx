import React, { useRef, useContext } from 'react';

import { HeaderWrapper } from './header.styles';
import useOnClickOutside from '../../hooks/onClickOutside';
import { MenuContext } from '../../context/menu-state';
import Navbar from './Navbar/navbar.component';
import DropdownMenu from './DropdownMenu/dropdown-menu.component';


const Header = () => {
   const headerRef = useRef();
   const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
   useOnClickOutside(headerRef, () => {
      if (isMenuOpen) {
         toggleMenuMode();
      }
   })

   return (
      <HeaderWrapper ref={headerRef} open={isMenuOpen}>
         <Navbar />
         <DropdownMenu />
      </HeaderWrapper>
   );
}

export default Header;