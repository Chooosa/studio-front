import React, { useRef, useContext } from 'react';

import { HeaderWrapper } from './header.styles';
import useOnClickOutside from '../../hooks/onClickOutside';
import { MenuContext } from '../../context/menu-state';
import Navbar from './Navbar/navbar.component';
import DropdownMenu from './DropdownMenu/dropdown-menu.component';
import { useWindowDimensions } from '../../hooks/dimensions';
import MobileNavbar from './MobileNavbar/mobile-navbar.component';
import MobileMenu from './MobileMenu/mobile-menu.component';


const Header = () => {
   const headerRef = useRef();
   const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
   const { width } = useWindowDimensions()


   useOnClickOutside(headerRef, () => {
      if (isMenuOpen) {
         toggleMenuMode();
      }
   })

   return (
      <HeaderWrapper ref={headerRef} open={isMenuOpen}>
         {
            width > 850 ?
               <Navbar />
               : <MobileNavbar />
         }
         {
            width > 850 ?
               <DropdownMenu />
               :
               <MobileMenu />
         }
      </HeaderWrapper>
   );
}

export default Header;