import React from 'react';

// import {
//    WeWrapper,
//    Heading,
//    Text
// } from './section-we.styles';
import Section from '../Common/Section/section.component';


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