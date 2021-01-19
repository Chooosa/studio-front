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

   const handleCasesNavigation = () => {
      if (pathname === '/') {
         dispatch(setScroll('cases'))
      } else {
         dispatch(setScroll('cases'))
         history.push('/')
      }
      toggleMenuMode()
   }



   return (
      <DropdownMenuWrapper open={isMenuOpen} color={color}>
         <DropdownMenuContainer>
            <WhiteSpace />
            <LinksWrapper>
               <LinksCell color={color}>
                  <Link to='/' onClick={toggleMenuMode}>
                     Главная
                  </Link>
                  <span onClick={handleCasesNavigation}>Кейсы </span>
                  <Link to='/works/Application/all' onClick={toggleMenuMode}>
                     Приложения</Link>
                  <Link to='/works/Website/all' onClick={toggleMenuMode}>
                     Сайты</Link>
               </LinksCell>
               <LinksCell color={color}>
                  <Link to='/services/Application' onClick={toggleMenuMode}>
                     Приложения</Link>
                  <Link to='/services/Website' onClick={toggleMenuMode}>
                     Сайты</Link>
                  <Link to='/services/Service' onClick={toggleMenuMode}>
                     Доп. услуги</Link>
               </LinksCell>
               <LinksCell color={color}>
                  <Link to='/guarantees' onClick={toggleMenuMode}>
                     Гарантии</Link>
                  <Link to='/cooperation' onClick={toggleMenuMode}>
                     Сотрудничество</Link>
               </LinksCell>
            </LinksWrapper>
            <LinksCell color={color}>
               <a href='tel:+79995357879'>
                  8 999 535 78 79
               </a>
               <a href='mailto:evgeny@lilekov-studio.com'>
                  Email
               </a>


               <a href='tg://msg?to=79995357879'>
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