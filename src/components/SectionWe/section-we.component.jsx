import React from 'react';

import Section from '../Common/Section/section.component';
import { useTranslation } from '../../hooks/translation';
import ImageCarousel from '../ImageCarousel/image-carousel.components';
import imageOne from '../../assets/slider-ex.png'

import Evgeny from '../../assets/Team/Evgeny1.JPG'
import Anna from '../../assets/Team/Anna1.JPG'
import Sergey from '../../assets/Team/Sergey1.JPG'
import Olga from '../../assets/Team/Olga1.JPG'
import Andrey from '../../assets/Team/Andrey1.JPG'
import Roman from '../../assets/Team/Roman1.JPG'

const imageArray = [
   Evgeny,  // 1
   Anna,  // 2
   Sergey,  // 3
   Olga,  // 4
   Andrey,  // 5
   Roman,  // 6
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
         <ImageCarousel imageArray={imageArray} />
      </Section>
   );
}

export default SectionWe;