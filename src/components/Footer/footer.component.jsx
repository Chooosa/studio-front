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
   MapButtonMobile
} from './footer.styles';
import Logo from '../Logo/logo.component';
import { colorSelectors } from '../../redux/color/color.selectors';
import { useWindowDimensions } from '../../hooks/dimensions';
import ModalBase from '../ModalBase/modal-base.component';
import CustomMap from '../Map/custom-map.component';
import { useTranslation } from '../../hooks/translation';

import telegramSVG from '../../assets/telegram.svg';
import instagramSVG from '../../assets/instagram.svg';
import facebookSVG from '../../assets/facebook.svg';

import telegramBigSVG from '../../assets/telegram(big).svg';
import instagramBigSVG from '../../assets/instagram(big).svg';
import facebookSBigVG from '../../assets/facebook(big).svg';

import mapPNG from '../../assets/map.png';
import mapMobilePNG from '../../assets/map-mobile.png';
import { ReactComponent as Marker } from '../../assets/pin.svg';
import privacyPolicy from '../../assets/privacyPolicy.pdf'
import { useLocation } from 'react-router';

const Footer = () => {
   const themeColor = useSelector(colorSelectors.color);
   const { width } = useWindowDimensions();
   const [openModal, setOpenModal] = useState(false);
   const { t } = useTranslation();

   const location = useLocation()

   const handleOpenModal = () => {
      setOpenModal(true)
   }

   const handleCloseModal = () => {
      setOpenModal(false)
   }

   return (
      width > 600 ?
         <FooterWrapper customWidth={width}>
            <FooterContainer>
               <InfoWrapper>
                  <InfoContainerTop>
                     <InfoContainerLeft>
                        <Logo />
                     </InfoContainerLeft>
                     <InfoContainerRight>
                        <span> {t('adress_first')} </span>
                        <span> {t('adress_second')} </span>
                        <a href='tel:89995357879'>8 999 535 78 79</a>
                        <a href='mailto:evgeny@lilekov-studio.com'>evgeny@lilekov-studio.com</a>
                        <a href={privacyPolicy} target='_blank' rel='nofollow noopener noreferrer'> {t('privacy_policy')} </a>
                     </InfoContainerRight>
                  </InfoContainerTop>
                  <InfoContainerBottom customWidth={width}>
                     <SocialNetworks target='_blank' rel='nofollow noopener noreferrer' href='tg://resolve?domain=lilekov_evgeniy'>
                        <img src={telegramSVG} alt='Telegram' />
                     Telegram
                  </SocialNetworks>
                     <SocialNetworks target='_blank' rel='nofollow noopener noreferrer' href='https://www.instagram.com/lilekovstudio/'>
                        <img src={instagramSVG} alt='Instagram' />
                     Instagram
                  </SocialNetworks>
                     <SocialNetworks target='_blank' rel='nofollow noopener noreferrer' href='https://www.facebook.com/lilekovstudio'>
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
                     {t('go_to_map_button')}
                     {/* <img src={flagIcon} alt='flag' /> */}
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
               <MapWrapperMobile color={themeColor}>
                  <img src={mapMobilePNG} alt='map-mobile' />
                  {
                     location.pathname !== '/contacts' &&
                     <InfoContainerRight style={{ paddingLeft: '5%' }}>
                        <span>{t('adress_first')}</span>
                        <span>{t('adress_second')}</span>
                        {/* <a href='tel:89995357879'>8 999 535 78 79</a> */}
                        {/* <a href='mailto:evgeny@lilekov-studio.com'>evgeny@lilekov-studio.com</a> */}
                        <a href={privacyPolicy} target='_blank' rel='nofollow noopener noreferrer'>{t('privacy_policy')}</a>
                     </InfoContainerRight>
                  }
                  <SocialNetworksWrapperMobile
                     location={location.pathname !== '/contacts'}
                  >
                     <SocialNetworks target='_blank' rel='nofollow noopener noreferrer' href='https://teleg.run/lilekov_evgeniy'>
                        <img src={telegramBigSVG} alt='Telegram' />
                     </SocialNetworks>
                     <SocialNetworks target='_blank' rel='nofollow noopener noreferrer' href='https://www.instagram.com/lilekovstudio/'>
                        <img src={instagramBigSVG} alt='Instagram' />
                     </SocialNetworks>
                     <SocialNetworks target='_blank' rel='nofollow noopener noreferrer' href='https://www.facebook.com/lilekovstudio'>
                        <img src={facebookSBigVG} alt='Facebook' />
                     </SocialNetworks>
                  </SocialNetworksWrapperMobile>
                  <Marker />
                  <MapButtonMobileContainer>
                     <MapButtonMobile customWidth={width} onClick={handleOpenModal}>
                        {t('go_to_map_button')}
                        {/* <img src={flagIcon} alt='flag' /> */}
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