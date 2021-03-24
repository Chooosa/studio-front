import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import {
   ContactsWrapper,
   ContactsContainer,
   MapContainer,
   InfoWrapper,
   InfoContainer,
   Heading,
   RequisitesButton,
   SocialNetworksWrapper,
   SocialNetworks,
   MapButton
} from './contacts.styles'
import SectionRequest from '../../components/SectionRequest/section-request.component'
import mapImg from '../../assets/map-contacts2.png'
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
import { motion } from 'framer-motion'

const Contacts = () => {
   const color = useSelector(colorSelectors.color);
   const { t } = useTranslation();
   const [openModal, setOpenModal] = useState(false);
   const { width } = useWindowDimensions();
   const [hoverImg, setHoverImg] = useState(false)

   const handleOpenModal = () => {
      setOpenModal(true)
   }

   const handleCloseModal = () => {
      setOpenModal(false)
   }

   const variants = {
      open: () => ({
         points: '-400,340 1200,304 1200,0 0,0',
         transition: {
            duration: 1,
         }
      }),
      close: () => ({
         points: '300,340 1200,304 1200,0 700,0',
         transition: {
            duration: 1,
         }
      })
   }

   return (
      <ContactsWrapper>
         <ContactsContainer>
            <InfoWrapper>
               <Heading>{t('contacts')}</Heading>
               <InfoContainer
                  onMouseEnter={() => setHoverImg(true)}
                  onMouseLeave={() => setHoverImg(false)}
                  hoverImg={hoverImg}
                  color={color}
               >
                  <span> {t('adress_first')} </span>
                  <span> {t('adress_second')} </span>
                  <a href='tel:89995357879'>8 999 535 78 79</a>
                  <a href='mailto:evgeny@lilekov-studio.com'>evgeny@lilekov-studio.com</a>
                  {/* <a href={privacyPolicy} target='_blank' rel='nofollow noopener noreferrer'> {t('privacy_policy')} </a> */}
                  <RequisitesButton
                     color={color}
                     hoverImg={hoverImg}
                  >
                     Реквизиты компании
                     </RequisitesButton>
               </InfoContainer>
            </InfoWrapper>
            <MapContainer
               color={color}

               onMouseEnter={() => setHoverImg(true)}
               onMouseLeave={() => setHoverImg(false)}
            >
               <motion.svg height='0' width='0'>
                  <motion.clipPath id='clipPath'>
                     <motion.polygon
                        animate={hoverImg ? 'open' : 'close'}
                        variants={variants}
                        points={`${hoverImg ? '0' : '200'},340 1200,304 1200,0 ${hoverImg ? '0' : '700'},0`}
                     />
                  </motion.clipPath>
               </motion.svg>
               <img
                  src={mapImg}
                  alt='map'
               />
               <Marker />
            </MapContainer>
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