import React from 'react';

import Section from '../Common/Section/section.component';
import { useTranslation } from '../../hooks/translation';
import ImageCarousel from '../ImageCarousel/image-carousel.components';
import imageOne from '../../assets/slider-ex.png'

import Evgeny from '../../assets/Team/eugene.jpeg'
import Anna from '../../assets/Team/ann.jpeg'
import Sergey from '../../assets/Team/sergey.jpeg'
import Olga from '../../assets/Team/olga.jpeg'
import Andrey from '../../assets/Team/andrew.jpeg'
import Roman from '../../assets/Team/roma.jpg'


import EvgenySmile from '../../assets/Team/eugene_smile.jpeg'
import AnnaSmile from '../../assets/Team/ann_smile.jpeg'
import SergeySmile from '../../assets/Team/sergey_smile.jpeg'
import OlgaSmile from '../../assets/Team/olga_smile.jpeg'
import AndreySmile from '../../assets/Team/andrew_smile.jpeg'
import RomanSmile from '../../assets/Team/roma_smile.jpeg'


const imageArray = [
   Evgeny,  // 1
   Anna,  // 2
   Sergey,  // 3
   Olga,  // 4
   Andrey,  // 5
   Roman,  // 6
]

const imageSmileArray = [
   EvgenySmile,
   AnnaSmile,
   SergeySmile,
   OlgaSmile,
   AndreySmile,
   RomanSmile
]


const SectionWe = () => {
   const { t } = useTranslation();
   return (
      <Section
         title={t('about_us')}
         description={t('about_us_desc')}
         index={2}
         descriptionWidth={'390px'}
      >
         <ImageCarousel imageArray={imageArray} imageSmileArray={imageSmileArray}/>
      </Section>
   );
}

export default SectionWe;