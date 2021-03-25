import React from 'react';

import Section from '../Common/Section/section.component';
import { useTranslation } from '../../hooks/translation';
import ImageCarousel from '../ImageCarousel/image-carousel.components';
import imageOne from '../../assets/slider-ex.png'

const imageArray = [
   imageOne,  // 1
   imageOne,  // 2
   imageOne,  // 3
   imageOne,  // 4
   imageOne,  // 5
   imageOne,  // 6
   imageOne   // 7
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