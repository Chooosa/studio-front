import React, { useEffect, useRef, useState, useContext } from 'react';

import { HeaderWrapper, Background } from './header.styles';
import useOnClickOutside from '../../hooks/onClickOutside';
import { MenuContext } from '../../context/menu-state';
import Navbar from './Navbar/navbar.component';
// import DropdownMenu from './DropdownMenu/dropdown-menu.component';
import { useWindowDimensions } from '../../hooks/dimensions';
import MobileNavbar from './MobileNavbar/mobile-navbar.component';
import MobileMenu from './MobileMenu/mobile-menu.component';


const Header = () => {
   const headerRef = useRef();
   const { width } = useWindowDimensions()
   const [openMenu, setOpenMenu] = useState(0)
   const [backgroundWidth, setBackgroundWidth] = useState(false)

   useEffect(() => {
      if (openMenu) {
         setBackgroundWidth(true)
      }
      // else {
      //    setBackgroundWidth(false)
      // }
   }, [openMenu])
   const { isMenuOpen } = useContext(MenuContext);
   useOnClickOutside(headerRef, () => {
      if (openMenu) {
         setOpenMenu(0)
      }
   })

   return (
      <HeaderWrapper ref={headerRef} background={isMenuOpen}>
         {
            width < 960 || !isMenuOpen ?
               <Background backgroundWidth={backgroundWidth} />
               : null
         }
         {
            width > 960 ?
               <Navbar
                  openMenu={openMenu}
                  setOpenMenu={setOpenMenu}
                  setBackgroundWidth={setBackgroundWidth}
                  backgroundWidth={backgroundWidth}
               />
               : <MobileNavbar />
         }
         {
            width > 960 ?
               // <DropdownMenu />
               null
               :
               <MobileMenu />
         }
      </HeaderWrapper>
   );
}

export default Header;