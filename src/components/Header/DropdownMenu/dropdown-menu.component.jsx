import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
   DropdownMenuWrapper,
   DropdownMenuContainer,
   WhiteSpace,
   LinksWrapper,
   LinksCell
} from './dropdown-menu.styles';
import { MenuContext } from '../../../context/menu-state';
import { colorSelectors } from '../../../redux/color/color.selectors';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { setScroll } from '../../../redux/scroll/scroll.actions';

const DropdownMenu = () => {
   const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
   const color = useSelector(colorSelectors.color);

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
               <LinksCell color={color}>
                  <span to='/' onClick={() => handleNavigation('typing')}>
                     Главная
                  </span>
                  <span onClick={() => handleNavigation('services')}>
                     Услуги
                  </span>
                  <span onClick={() => handleNavigation('cases')}>
                     Кейсы
                  </span>
                  <span onClick={() => handleNavigation('plan')}>
                     План работы
                  </span>
               </LinksCell>
               <LinksCell color={color}>
                  <span onClick={() => handleNavigation('applicationAll')}>
                     Приложения
                  </span>
                  <span onClick={() => handleNavigation('websiteAll')}>
                     Сайты
                  </span>
               </LinksCell>
               <LinksCell color={color}>
                  <span onClick={() => handleNavigation('application')}>
                     Приложения
                  </span>
                  <span onClick={() => handleNavigation('website')}>
                     Сайты
                  </span>
                  <span onClick={() => handleNavigation('service')}>
                     Доп. услуги
                  </span>
               </LinksCell>
               <LinksCell color={color}>
                  <span onClick={() => handleNavigation('guarantees')}>
                     Гарантии
                  </span>
                  <span onClick={() => handleNavigation('cooperation')}>
                     Сотрудничество
                  </span>
               </LinksCell>
            </LinksWrapper>
            <LinksCell color={color}>
               <a href='tel:+79995357879'>
                  8 999 535 78 79
               </a>
               <a href='mailto:evgeny@lilekov-studio.com'>
                  Email
               </a>


               <a href='tg://resolve?domain=lilekov_evgeniy'>
                  Telegram
               </a>


               <a href="https://wa.me/79995357879" target='_blank'>
                  WhatsApp
               </a>


               <a href='viber://add?number=79995357879' target="_blank">
                  Viber
               </a>

            </LinksCell>
         </DropdownMenuContainer>
      </DropdownMenuWrapper>
   );
}

export default DropdownMenu;