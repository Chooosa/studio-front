import React from 'react';

import Section from '../Common/Section/section.component';
import { useTranslation } from '../../hooks/translation';
import ImageCarousel from '../ImageCarousel/image-carousel.components';

// import {
//    WeWrapper,
//    Heading,
//    Text
// } from './section-we.styles';


const SectionWe = () => {
   const { t } = useTranslation();
   return (
      <Section
         title={t('about_us')}
         description={t('about_us_desc')}
         index={2}
         descriptionWidth={'390px'}
      >
         <ImageCarousel />
      </Section>
   );
}

export default SectionWe;