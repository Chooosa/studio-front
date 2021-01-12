import React, { useContext } from 'react';
import { useSelector } from 'react-redux';

import {
   NavbarContainer,
   ButtonsWrapper
} from './navbar.styles';
import MenuButton from '../MenuButton/menu-button.component';
import { MenuContext } from '../../../context/menu-state';
import Logo from '../../Logo/logo.component';
import { colorSelectors } from '../../../redux/color/color.selectors';

const Navbar = () => {
   const themeColor = useSelector(colorSelectors.color);
   const { isMenuOpen } = useContext(MenuContext);

   return (
      <NavbarContainer open={isMenuOpen}>
         <Logo />

         <ButtonsWrapper>
            <MenuButton>Меню</MenuButton>
            <MenuButton>Услуги</MenuButton>
            <MenuButton>Разное</MenuButton>
         </ButtonsWrapper>
         <MenuButton color={themeColor}>Контакты</MenuButton>
      </NavbarContainer>
   );
}

export default Navbar;