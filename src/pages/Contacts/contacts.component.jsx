import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import {
   ContactsWrapper,
   ContactsContainer,
   MapContainer,
   InfoWrapper,
   InfoContainer,
   Heading,
   SocialNetworksWrapper,
   SocialNetworks,
   MapButton
} from './contacts.styles'
import SectionRequest from '../../components/SectionRequest/section-request.component'
import mapImg from '../../assets/map-contacts.png'
import { ReactComponent as Marker } from '../../assets/pin2.svg'
import { colorSelectors } from '../../redux/color/color.selectors'
import { useTranslation } from '../../hooks/translation'
import privacyPolicy from '../../assets/privacyPolicy.pdf'
import telegramSVG from '../../assets/telegram.svg';
import instagramSVG from '../../assets/instagram.svg';
import facebookSVG from '../../assets/facebook.svg';
import flagIcon from '../../assets/flag.png'
import ModalBase from '../../components/ModalBase/modal-base.component';
import CustomMap from '../../components/Map/custom-map.component';
import { useWindowDimensions } from '../../hooks/dimensions'

const Contacts = () => {
   const color = useSelector(colorSelectors.color);
   const { t } = useTranslation();
   const [openModal, setOpenModal] = useState(false);
   const { width } = useWindowDimensions();

   const handleOpenModal = () => {
      setOpenModal(true)
   }

   const handleCloseModal = () => {
      setOpenModal(false)
   }

   return (
      <ContactsWrapper>
         <ContactsContainer>
            <MapContainer color={color}>
               <img src={mapImg} alt='map' />
               <Marker />
            </MapContainer>
            <InfoWrapper>
               <Heading>{t('contacts')}</Heading>
               <InfoContainer>
                  <span> {t('adress_first')} </span>
                  <span> {t('adress_second')} </span>
                  <a href='tel:89995357879'>8 999 535 78 79</a>
                  <a href='mailto:evgeny@lilekov-studio.com'>evgeny@lilekov-studio.com</a>
                  <a href={privacyPolicy} target='_blank' rel='nofollow noopener noreferrer'> {t('privacy_policy')} </a>
               </InfoContainer>
               <SocialNetworksWrapper >
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
               </SocialNetworksWrapper>
               <MapButton onClick={handleOpenModal}>
                  {t('go_to_map_button')}
                  <img src={flagIcon} alt='flag' />
               </MapButton>
            </InfoWrapper>
         </ContactsContainer>
         <SectionRequest />
         <ModalBase
            open={openModal}
            onClose={handleCloseModal}
         >
            <CustomMap />
         </ModalBase>
      </ContactsWrapper>
   )
}

export default Contacts