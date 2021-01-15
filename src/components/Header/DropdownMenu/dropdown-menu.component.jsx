import React, { useContext } from 'react';
import { useSelector } from 'react-redux';

import {
   DropdownMenuWrapper,
   DropdownMenuContainer,
   WhiteSpace,
   LinksWrapper,
   LinksCell
} from './dropdown-menu.styles';
import { MenuContext } from '../../../context/menu-state';
import { colorSelectors } from '../../../redux/color/color.selectors';

const DropdownMenu = () => {
   const { isMenuOpen } = useContext(MenuContext);
   const color = useSelector(colorSelectors.color);

   return (
      <DropdownMenuWrapper open={isMenuOpen}>
         <DropdownMenuContainer>
            <WhiteSpace />
            <LinksWrapper>
               <LinksCell color={color}>
                  <a href='#'>Главная</a>
                  <a href='#'>Кейсы</a>
                  <a href='#'>Приложения</a>
                  <a href='#'>Порталы</a>
                  <a href='#'>Сайты</a>
               </LinksCell>
               <LinksCell color={color}>
                  <a href='#'>Приложения</a>
                  <a href='#'>Порталы</a>
                  <a href='#'>Сайты</a>
                  <a href='#'>Доп. услуги</a>
               </LinksCell>
               <LinksCell color={color}>
                  <a href='guarantees'>Гарантии</a>
                  <a href='cooperation'>Сотрудничество</a>
               </LinksCell>
            </LinksWrapper>
            <LinksCell color={color}>
               <a href='tel:89995357879'>8 999 535 78 79</a>
               <a href='#'>Email</a>
               <a href='#'>Telegram</a>
               <a href='#'>WhatsApp</a>
               <a href='#'>Viber</a>
            </LinksCell>
         </DropdownMenuContainer>
      </DropdownMenuWrapper>
   );
}

export default DropdownMenu;