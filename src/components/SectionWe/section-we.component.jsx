import React from 'react';

import Section from '../Common/Section/section.component';
import {useTranslation} from '../../hooks/translation';

// import {
//    WeWrapper,
//    Heading,
//    Text
// } from './section-we.styles';


const SectionWe = () => {
   const {t} = useTranslation();
   return (
      <Section
         title={t('about_us')}
         description={t('about_us_desc')}
         index={2}
         // headerDescriptionStyles={{
         //    maxWidth: '410px'
         // }}
         descriptionWidth={'390px'}
      >
         {/* <Heading>Кто мы?</Heading>
         <Text>
            Мы – команда опытных разработчиков,
            которые готовы создать для Вас готовый
            продукт любой сложности, будь то сайт
            или мобильное приложение под разные платформы.
            Быстро, качественно, надёжно.
         </Text> */}
      </Section>
   );
}

export default SectionWe;