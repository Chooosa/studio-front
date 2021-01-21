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
import { useTranslation } from '../../../hooks/translation';

const Navbar = () => {
   const themeColor = useSelector(colorSelectors.color);
   const { isMenuOpen } = useContext(MenuContext);
   const {t} = useTranslation();

   return (
      <NavbarContainer open={isMenuOpen}>
         <Logo />

         <ButtonsWrapper>
            <MenuButton> {t('menu')} </MenuButton>
            <MenuButton> {t('portfolio')} </MenuButton>
            <MenuButton> {t('services')} </MenuButton>
            <MenuButton> {t('other')} </MenuButton>
         </ButtonsWrapper>
         <MenuButton color={themeColor}> {t('contacts')} </MenuButton>
      </NavbarContainer>
   );
}

export default Navbar;