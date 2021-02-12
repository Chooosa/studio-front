import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import {
   NotwFoundWrapper,
   ImageWrapper,
   DescriptionWrapper,
   DescriptionLabel,
   CustomLink,
   GhostWrapper,
   UfoWrapper,
   UfoGlowWrapper
} from './not-found.styles'
import { colorSelectors } from '../../redux/color/color.selectors'
import { ReactComponent as Numbers } from '../../assets/404.svg'
import { ReactComponent as Ghost } from '../../assets/ghost.svg'
import { ReactComponent as Ufo } from '../../assets/ufo.svg'
import { ReactComponent as UfoGlow } from '../../assets/ufo-glow.svg'
import { useTranslation } from '../../hooks/translation'

const NotFound = ({ endLoader }) => {
   const history = useHistory()
   const { t } = useTranslation();
   const color = useSelector(colorSelectors.color)
   const [ufoTranslate, setUfoTranslate] = useState(false)
   const [ufoHover, setUfoHover] = useState(false)
   const [ufoGlowBlink, setUfoGlowBlink] = useState(false)
   const [ghostTranslate, setGhostTranslate] = useState(false)
   const [ghostHover, setGhostHover] = useState(false)

   useEffect(() => {
      if (endLoader) {
         setTimeout(() => {
            setUfoTranslate(true)
         }, 300);
      }
   }, [endLoader])

   useEffect(() => {
      if (ufoTranslate) {
         setTimeout(() => {
            setUfoHover(true)
            setUfoGlowBlink(true)
            setTimeout(() => {
               setGhostTranslate(true)
            }, 500);
         }, 1500);
      }
   }, [ufoTranslate])

   useEffect(() => {
      if (ghostTranslate) {
         setTimeout(() => {
            setGhostHover(true)
         }, 800);
      }
   }, [ghostTranslate])

   const handleNavigation = () => {
      history.push('/')
   }

   return (
      <NotwFoundWrapper>
         <ImageWrapper color={color}>
            <Numbers />

            <GhostWrapper
               translate={ghostTranslate ? '0' : '-100%'}
               hover={ghostHover}
            >
               <Ghost />
            </GhostWrapper>

            <UfoGlowWrapper
               color={color}
               blink={ufoGlowBlink}
            >
               <UfoGlow />
            </UfoGlowWrapper>

            <UfoWrapper
               translate={ufoTranslate ? '0' : '-100vw'}
               hover={ufoHover}
               color={color}
            >
               <Ufo />
            </UfoWrapper>
         </ImageWrapper>
         <DescriptionWrapper>
            <DescriptionLabel>{t('notfound_desc_first')}</DescriptionLabel>
            <DescriptionLabel color={color}>{t('notfound_desc_second')}</DescriptionLabel>
            <CustomLink onClick={handleNavigation} color={color}>{t('notfound_button_label')}</CustomLink>
         </DescriptionWrapper>
      </NotwFoundWrapper>
   )
}

export default NotFound