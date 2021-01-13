import React from 'react';

import Section from '../Common/Section/section.component';

// import {
//    WeWrapper,
//    Heading,
//    Text
// } from './section-we.styles';


const SectionWe = () => {
   return (
      <Section
         title='Кто мы?'
         description='
            Мы – команда опытных разработчиков,
            которые готовы создать для Вас готовый
            продукт любой сложности, будь то сайт
            или мобильное приложение под разные платформы.
            Быстро, качественно, надёжно.
         '
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