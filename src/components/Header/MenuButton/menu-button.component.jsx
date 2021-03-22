import React, { useContext } from 'react';

import { MenuButtonContainer } from './menu-button.styles';
// import { MenuContext } from '../../../context/menu-state';
// import ArrowSVG from '../../../assets/arrow.svg'

const MenuButton = ({ children, color, isOpen, onOpen }) => {
   // const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

   // const onOpenMenu = () => {
   //    toggleMenuMode();
   // };

   return (
      <MenuButtonContainer
         active={isOpen}
         onClick={onOpen}
         color={color}
      >
         {children}
         <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 5.00012L4.46967 5.53045L5 6.06078L5.53033 5.53045L5 5.00012ZM0.46967 1.53045L4.46967 5.53045L5.53033 4.46979L1.53033 0.469792L0.46967 1.53045ZM5.53033 5.53045L9.53033 1.53045L8.46967 0.469792L4.46967 4.46979L5.53033 5.53045Z" fill="none" />
         </svg>

         {/* <svg class="logo__left-side" width="39" height="45" viewBox="0 0 39 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref='../../../assets.svg#arrow' />
         </svg> */}
         {/* <img src={arrowSVG} alt="Arrow" /> */}
      </MenuButtonContainer >
   );
}

export default MenuButton;