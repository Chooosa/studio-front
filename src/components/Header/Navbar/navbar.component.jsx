import React, { useContext, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

import {
   NavbarContainer,
   ButtonsWrapper,
   LangToggleButton,
   CustomLink,
   DropdownMenuWrapper,
   DropDownContainer,
   LinksCell,
   Link
} from './navbar.styles';
import MenuButton from '../MenuButton/menu-button.component';
import { MenuContext } from '../../../context/menu-state';
import Logo from '../../Logo/logo.component';
import { colorSelectors } from '../../../redux/color/color.selectors';
import { useTranslation } from '../../../hooks/translation';
import { setLanguage } from '../../../redux/language/language.actions'

const Navbar = ({
   openMenu,
   setOpenMenu,
   setBackgroundWidth,
   backgroundWidth
}) => {
   const themeColor = useSelector(colorSelectors.color);
   const { isMenuOpen } = useContext(MenuContext);
   const { t, language } = useTranslation();
   const dispatch = useDispatch();
   const history = useHistory()
   const [menuVisible, setMenuVisible] = useState(0)

   const toggleLang = (bName) => {
      let lang = bName === 'ru' ? 'en' : 'ru';
      dispatch(setLanguage(lang))
   }


   const handleNavigation = (link) => {
      switch (link) {
         case 'applicationAll':
            history.push('/works/Application/all')
            break;

         case 'websiteAll':
            history.push('/works/Website/all')
            break;

         case 'application':
            history.push('/services/Application')
            break;

         case 'website':
            history.push('/services/Website')
            break;

         case 'service':
            history.push('/services/Service')
            break;

         case 'guarantees':
            history.push('/guarantees')
            break;

         case 'cooperation':
            history.push('/cooperation')
            break;

         default:
            break;
      }

      setOpenMenu(0)
      setMenuVisible(0)
   }

   const handleOpenMenu = (numbTub) => {
      let tab
      if (numbTub === 1) {
         switch (openMenu) {
            case 0:
               tab = 1
               break;
            case 1:
               tab = 0
               break;
            case 2:
               tab = 1
               break;
            default:
               tab = 0
               break;
         }
      }
      if (numbTub === 2) {
         switch (openMenu) {
            case 0:
               tab = 2
               break;
            case 1:
               tab = 2
               break;
            case 2:
               tab = 0
               break;
            default:
               tab = 0
               break;
         }
      }

      setOpenMenu(tab)
   }

   const variants = {
      open: ({ item }) => ({
         opacity: 1,
         y: '0px',
         transition: {
            duration: item * 0.1
         }
      }),
      close: ({ item, count }) => ({
         opacity: 0,
         y: `-${item * 35}px`,
         transition: {
            duration: item * 0.1
         }
      })
   }

   useEffect(() => {
      if (openMenu === 1) {
         setMenuVisible(1)
      }
      if (openMenu === 2) {
         setMenuVisible(2)
      }
   }, [openMenu])

   return (
      <NavbarContainer open={isMenuOpen}>
         <Logo setOpenMenu={setOpenMenu} />

         <ButtonsWrapper>
            {/* <MenuButton> {t('menu')} </MenuButton> */}
            <DropdownMenuWrapper>
               <MenuButton
                  isOpen={openMenu === 1}
                  onOpen={() => handleOpenMenu(1)}
               >
                  {t('portfolio')}
               </MenuButton>
               <DropDownContainer visible={menuVisible === 1}>
                  <LinksCell color={themeColor}>
                     <Link
                        color={themeColor}
                        custom={{
                           item: 1,
                           count: 2
                        }}
                        animate={openMenu === 1 ? 'open' : 'close'}
                        variants={variants}
                        onClick={() => handleNavigation('applicationAll')}
                     >
                        {t('apps')}
                     </Link>
                     <Link
                        color={themeColor}
                        custom={{
                           item: 2,
                           count: 2
                        }}
                        animate={openMenu === 1 ? 'open' : 'close'}
                        variants={variants}
                        onClick={() => handleNavigation('websiteAll')}
                        onAnimationComplete={() => {
                           if (openMenu === 0) {
                              setBackgroundWidth(false)
                              setMenuVisible(0)
                           }
                        }}
                     >
                        {t('sites')}
                     </Link>
                  </LinksCell>
               </DropDownContainer>
            </DropdownMenuWrapper>

            <DropdownMenuWrapper>
               <MenuButton
                  isOpen={openMenu === 2}
                  onOpen={() => handleOpenMenu(2)}
               >
                  {t('services')}
               </MenuButton>
               <DropDownContainer visible={menuVisible === 2}>
                  <LinksCell color={themeColor}>
                     <Link
                        color={themeColor}
                        custom={{
                           item: 1,
                           count: 3
                        }}
                        animate={openMenu === 2 ? 'open' : 'close'}
                        variants={variants}
                        onClick={() => handleNavigation('application')}
                     >
                        {t('apps')}
                     </Link>
                     <Link
                        color={themeColor}
                        custom={{
                           item: 2,
                           count: 3
                        }}
                        animate={openMenu === 2 ? 'open' : 'close'}
                        variants={variants}
                        onClick={() => handleNavigation('website')}
                     >
                        {t('sites')}
                     </Link>
                     <Link
                        color={themeColor}
                        custom={{
                           item: 3,
                           count: 3
                        }}
                        animate={openMenu === 2 ? 'open' : 'close'}
                        variants={variants}
                        onClick={() => handleNavigation('service')}
                        onAnimationComplete={() => {
                           if (openMenu === 0) {
                              setBackgroundWidth(false)
                              setMenuVisible(0)
                           }
                        }}
                     >
                        {t('other_services')}
                     </Link>
                  </LinksCell>
               </DropDownContainer>
            </DropdownMenuWrapper>

            <CustomLink customMargin onClick={() => history.push('/cooperation')} > {t('collaboration')}</CustomLink>
            <CustomLink onClick={() => history.push('/contacts')} > {t('contacts')}</CustomLink>
         </ButtonsWrapper>
         <div>
            <a href='tel:+79995357879'>
               <CustomLink color={themeColor}>
                  8 999 535 78 79
               </CustomLink>
            </a>
            <LangToggleButton
               onClick={(e) => toggleLang(e.nativeEvent.target.name)} name={language} >
               {language}
            </LangToggleButton>
         </div>
         {/* <MenuButton color={themeColor}>{t('contacts')}</MenuButton> */}
      </NavbarContainer>
   );
}

export default Navbar;