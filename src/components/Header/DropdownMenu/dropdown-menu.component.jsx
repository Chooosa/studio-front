import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import {
   DropdownMenuWrapper,
   DropdownMenuContainer,
   WhiteSpace,
   LinksWrapper,
   LinksCell
} from './dropdown-menu.styles';
import { MenuContext } from '../../../context/menu-state';
import { colorSelectors } from '../../../redux/color/color.selectors';
import { setScroll } from '../../../redux/scroll/scroll.actions';
import { useTranslation } from '../../../hooks/translation';

const DropdownMenu = () => {
   const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
   const color = useSelector(colorSelectors.color);
   const { t } = useTranslation();

   const { pathname } = useLocation()
   const dispatch = useDispatch()
   const history = useHistory()

   const handleNavigation = (link) => {
      switch (link) {
         case 'typing':
            if (pathname === '/') {
               dispatch(setScroll('typing'))
            } else {
               dispatch(setScroll('typing'))
               history.push('/')
            }
            break;

         case 'services':
            if (pathname === '/') {
               dispatch(setScroll('services'))
            } else {
               dispatch(setScroll('services'))
               history.push('/')
            }
            break;

         case 'cases':
            if (pathname === '/') {
               dispatch(setScroll('cases'))
            } else {
               dispatch(setScroll('cases'))
               history.push('/')
            }
            break;

         case 'plan':
            if (pathname === '/') {
               dispatch(setScroll('plan'))
            } else {
               dispatch(setScroll('plan'))
               history.push('/')
            }
            break;

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

      toggleMenuMode()
   }



   return (
      <DropdownMenuWrapper open={isMenuOpen} color={color}>
         <DropdownMenuContainer>
            <WhiteSpace />
            <LinksWrapper>
               {/* <LinksCell color={color}>
                  <span to='/' onClick={() => handleNavigation('typing')}>
                     {t('main_page')}
                  </span>
                  <span onClick={() => handleNavigation('services')}>
                     {t('services')}
                  </span>
                  <span onClick={() => handleNavigation('cases')}>
                     {t('cases')}
                  </span>
                  <span onClick={() => handleNavigation('plan')}>
                     {t('work_plan')}
                  </span>
               </LinksCell> */}
               <LinksCell color={color}>
                  <span onClick={() => handleNavigation('applicationAll')}>
                     {t('apps')}
                  </span>
                  <span onClick={() => handleNavigation('websiteAll')}>
                     {t('sites')}
                  </span>
               </LinksCell>
               <LinksCell color={color}>
                  <span onClick={() => handleNavigation('application')}>
                     {t('apps')}
                  </span>
                  <span onClick={() => handleNavigation('website')}>
                     {t('sites')}
                  </span>
                  <span onClick={() => handleNavigation('service')}>
                     {t('other_services')}
                  </span>
               </LinksCell>
               {/* <LinksCell color={color}>
                  <span onClick={() => handleNavigation('guarantees')}>
                     {t('guarantees')}
                  </span>
                  <span onClick={() => handleNavigation('cooperation')}>
                     {t('collaboration')}
                  </span>
               </LinksCell> */}
               {/* <LinksCell color={color}>

               </LinksCell> */}
            </LinksWrapper>
            <LinksCell color={color}>
               {/* <a href='tel:+79995357879'>
                  8 999 535 78 79
               </a>
               <a href='mailto:evgeny@lilekov-studio.com'>
                  Email
               </a>


               <a href='tg://resolve?domain=lilekov_evgeniy'>
                  Telegram
               </a>

               <a href="https://wa.me/79995357879" target='_blank' rel='nofollow noopener noreferrer'>
                  WhatsApp
               </a>


               <a href='viber://add?number=79995357879' target="_blank" rel='nofollow noopener noreferrer'>
                  Viber
               </a> */}
            </LinksCell>
         </DropdownMenuContainer>
      </DropdownMenuWrapper>
   );
}

export default DropdownMenu;