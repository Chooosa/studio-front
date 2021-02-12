import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import {
   NavbarContainer,
   ButtonsWrapper,
   LangToggleButton,
   CustomLink
} from './navbar.styles';
import MenuButton from '../MenuButton/menu-button.component';
import { MenuContext } from '../../../context/menu-state';
import Logo from '../../Logo/logo.component';
import { colorSelectors } from '../../../redux/color/color.selectors';
import { useTranslation } from '../../../hooks/translation';
import { setLanguage } from '../../../redux/language/language.actions'

const Navbar = () => {
   const themeColor = useSelector(colorSelectors.color);
   const { isMenuOpen } = useContext(MenuContext);
   const { t, language } = useTranslation();
   const dispatch = useDispatch();
   const history = useHistory()

   const toggleLang = (bName) => {
      let lang = bName === 'ru' ? 'en' : 'ru';
      dispatch(setLanguage(lang))
   }

   return (
      <NavbarContainer open={isMenuOpen}>
         <Logo />

         <ButtonsWrapper>
            <MenuButton> {t('menu')} </MenuButton>
            <MenuButton> {t('portfolio')} </MenuButton>
            <MenuButton> {t('services')} </MenuButton>
            <MenuButton> {t('other')} </MenuButton>
            <CustomLink onClick={() => history.push('contacts')} > {t('contacts')}</CustomLink>
         </ButtonsWrapper>
         <LangToggleButton
            onClick={(e) => toggleLang(e.nativeEvent.target.name)} name={language} >
            {language}
         </LangToggleButton>
         <a href='tel:+79995357879'>
            <CustomLink color={themeColor}>
               8 999 535 78 79
            </CustomLink>
         </a>
         {/* <MenuButton color={themeColor}>{t('contacts')}</MenuButton> */}
      </NavbarContainer>
   );
}

export default Navbar;