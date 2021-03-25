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
   Button
} from './contacts.styles'
import SectionRequest from '../../components/SectionRequest/section-request.component'
import mapImg from '../../assets/map-contacts2.png'
import { ReactComponent as Marker } from '../../assets/pin2.svg'
import { colorSelectors } from '../../redux/color/color.selectors'
import { useTranslation } from '../../hooks/translation'
import requisites from '../../assets/requisites.pdf'
import ModalBase from '../../components/ModalBase/modal-base.component';
import CustomMap from '../../components/Map/custom-map.component';
import { useWindowDimensions } from '../../hooks/dimensions'
import { motion } from 'framer-motion'
import ModalRequest from '../../components/ModalRequest/modal-request.component'

const Contacts = () => {
   const color = useSelector(colorSelectors.color);
   const { t } = useTranslation();
   const [openModal, setOpenModal] = useState(false);
   const { width } = useWindowDimensions();
   const [hoverImg, setHoverImg] = useState(false)
   const [openModalRequest, setOpenModalRequest] = useState(false)

   const handleOpenModal = () => {
      setOpenModal(true)
   }

   const handleCloseModal = () => {
      setOpenModal(false)
   }

   const handleOpenModalRequest = () => {
      setOpenModalRequest(true)
   }

   const handleCloseModalRequest = () => {
      setOpenModalRequest(false)
   }

   const getAdaptivePoints = () => {
      if (width > 1000) {
         return '500,340 1200,304 1200,0 900,0'
      } else if (width > 768) {
         return '750,340 1200,304 1200,0 1100,0'
      } else if (width > 668) {
         return '850,340 1200,304 1200,0 1100,0'
      } else {
         return '950,340 1200,304 1200,0 1150,0'
      }
   }

   const variants = {
      open: () => ({
         points: '-400,340 1200,304 1200,0 0,0',
         transition: {
            duration: 1,
         }
      }),
      close: () => ({
         points: getAdaptivePoints(),
         transition: {
            duration: 1,
         }
      })
   }

   const onHover = (enter) => {
      if (width > 600) {
         setHoverImg(enter)
      }
   }

   return (
      <ContactsWrapper>
         <ContactsContainer>
            <InfoWrapper>
               <Heading>{t('contacts')}</Heading>
               <InfoContainer
                  onMouseEnter={() => onHover(true)}
                  onMouseLeave={() => onHover(false)}
                  hoverImg={hoverImg}
                  color={color}
               >
                  <span> {t('adress_first')} </span>
                  <span onClick={handleOpenModal}> {t('adress_second')} </span>
                  <a href='tel:89995357879'>8 999 535 78 79</a>
                  <a href='mailto:evgeny@lilekov-studio.com'>evgeny@lilekov-studio.com</a>
                  {/* <a href={privacyPolicy} target='_blank' rel='nofollow noopener noreferrer'> {t('privacy_policy')} </a> */}
                  {
                     width > 600 &&
                     <div>
                        <a
                           href={requisites}
                           target='_blank'
                           rel='nofollow noopener noreferrer'
                           style={{
                              width: '100%',
                              maxWidth: '305px'
                           }}
                        >
                           <RequisitesButton
                              color={color}
                              hoverImg={hoverImg}
                           >
                              {t('contacts_requisites')}
                           </RequisitesButton>
                        </a>
                     </div>
                  }

               </InfoContainer>
               {
                  width < 601 &&
                  <div style={{
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center'
                  }}>
                     <a
                        href={requisites}
                        target='_blank'
                        rel='nofollow noopener noreferrer'
                        style={{
                           width: '100%',
                           maxWidth: '305px'
                        }}
                     >
                        <RequisitesButton
                           color={color}
                           hoverImg={hoverImg}
                        >
                           {t('contacts_requisites')}
                        </RequisitesButton>
                     </a>
                     <Button onClick={handleOpenModalRequest} color={color}>
                        {t('leave_request')}
                     </Button>
                  </div>
               }
            </InfoWrapper>
            {
               width > 600 ?
                  <MapContainer
                     color={color}
                     // mapImg={mapImg}
                     onMouseEnter={() => onHover(true)}
                     onMouseLeave={() => onHover(false)}
                  >
                     <motion.svg
                        height='0'
                        width='0'
                        preserveAspectRatio="xMinYMin meet"
                        viewBox='0 0 1200 304'
                     >
                        <motion.clipPath id='clipPath'>
                           <motion.polygon
                              animate={hoverImg ? 'open' : 'close'}
                              variants={variants}
                              points={`-300,340 1200,304 1200,0 0,0`}
                           />
                        </motion.clipPath>
                     </motion.svg>
                     <img
                        src={mapImg}
                        alt='map'
                     />
                     <Marker />
                  </MapContainer>
                  :
                  null
            }
         </ContactsContainer>
         {
            width > 600 ?
               <SectionRequest /> :
               null
         }
         <ModalBase
            open={openModal}
            onClose={handleCloseModal}
         >
            <CustomMap />
         </ModalBase>
         <ModalRequest
            open={openModalRequest}
            onClose={handleCloseModalRequest}
         />
      </ContactsWrapper>
   )
}

export default Contacts