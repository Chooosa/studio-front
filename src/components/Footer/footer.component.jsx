import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import {
   FooterWrapper,
   FooterContainer,
   InfoWrapper,
   InfoContainerTop,
   InfoContainerBottom,
   InfoContainerLeft,
   InfoContainerRight,
   MapWrapper,
   MapContainer,
   MapButton,
   SocialNetworks,
   FooterWrapperMobile,
   FooterContainerMobile,
   MapWrapperMobile,
   SocialNetworksWrapperMobile,
   MapButtonMobileContainer,
   MapButtonMobile,
   Container
} from './footer.styles';
import Logo from '../Logo/logo.component';
import { colorSelectors } from '../../redux/color/color.selectors';
import {useWindowDimensions} from '../../hooks/dimensions';
import ModalBase from '../ModalBase/modal-base.component';
import CustomMap from '../Map/custom-map.component';

import telegramSVG from '../../assets/telegram.svg';
import instagramSVG from '../../assets/instagram.svg';
import facebookSVG from '../../assets/facebook.svg';
import mapPNG from '../../assets/map.png';
import mapMobilePNG from '../../assets/map-mobile.png';
import { ReactComponent as Marker } from '../../assets/pin.svg';
import flagIcon from '../../assets/flag.png'

const Footer = () => {
   const themeColor = useSelector(colorSelectors.color);
   const {width} = useWindowDimensions();
   const [openModal, setOpenModal] = useState(false);

   const handleOpenModal = () => {
      setOpenModal(true)
   }

   const handleCloseModal = () => {
      setOpenModal(false)
   }

   return (
      width > 500 ?
      <FooterWrapper width={width}>
         <FooterContainer>
            <InfoWrapper>
               <InfoContainerTop>
                  <InfoContainerLeft>
                     <Logo />
                  </InfoContainerLeft>
                  <InfoContainerRight>
                     <span>127015, Москва,</span>
                     <span>Большая Новодмитровская улица, 23с6</span>
                     <a href='tel:89995357879'>8 999 535 78 79</a>
                     <a href='mailto:evgeny@lilekov-studio.com'>evgeny@lilekov-studio.com</a>
                     <a href='#'>Политика конфиденциальности</a>
                  </InfoContainerRight>
               </InfoContainerTop>
               <InfoContainerBottom width={width}>
                  <SocialNetworks href='tg://resolve?domain=lilekov_evgeniy'>
                     <img src={telegramSVG} alt='Telegram' />
                     Telegram
                  </SocialNetworks>
                  <SocialNetworks href='#'>
                     <img src={instagramSVG} alt='Instagram' />
                     Instagram
                  </SocialNetworks>
                  <SocialNetworks href='#'>
                     <img src={facebookSVG} alt='Facebook' />
                     Facebook
                  </SocialNetworks>
               </InfoContainerBottom>
            </InfoWrapper>
         </FooterContainer>
         <MapWrapper>
            <img src={mapPNG} alt='map' />
            <MapContainer color={themeColor}>
               <Marker />
               <MapButton onClick={handleOpenModal}>
                  Перейти к карте
                  <img src={flagIcon} alt='flag' />
               </MapButton>
            </MapContainer>
         </MapWrapper>

         <ModalBase
            open={openModal}
            onClose={handleCloseModal}
         >
            <CustomMap />
         </ModalBase>
      </FooterWrapper>
      :
      <FooterWrapperMobile>

            <FooterContainerMobile>
            <InfoContainerRight style={{paddingLeft: '5%'}}>
                     <span>127015, Москва,</span>
                     <span>Большая Новодмитровская улица, 23с6</span>
                     <a href='tel:89995357879'>8 999 535 78 79</a>
                     <a href='mailto:evgeny@lilekov-studio.com'>evgeny@lilekov-studio.com</a>
                     <a href='#'>Политика конфиденциальности</a>
               </InfoContainerRight>
            <MapWrapperMobile color={themeColor}>
               <img src={mapMobilePNG} alt='map-mobile' />
               <SocialNetworksWrapperMobile>
                  <SocialNetworks href='https://teleg.run/lilekov_evgeniy'>
                     <img src={telegramSVG} alt='Telegram' />
                     Telegram
                  </SocialNetworks>
                  <SocialNetworks href='#'>
                     <img src={instagramSVG} alt='Instagram' />
                     Instagram
                  </SocialNetworks>
                  <SocialNetworks href='#'>
                     <img src={facebookSVG} alt='Facebook' />
                     Facebook
                  </SocialNetworks>
               </SocialNetworksWrapperMobile>
               <Marker />
               <MapButtonMobileContainer>
               <MapButtonMobile width={width} onClick={handleOpenModal}>
                  Перейти к карте
                  <img src={flagIcon} alt='flag' />
               </MapButtonMobile>
               </MapButtonMobileContainer>
            </MapWrapperMobile>
            </FooterContainerMobile>
         <ModalBase
         open={openModal}
         onClose={handleCloseModal}
         >
            <CustomMap />
         </ModalBase>
      </FooterWrapperMobile>
   );
}

export default Footer;