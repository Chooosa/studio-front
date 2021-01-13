import React from 'react';

import {
   WeWrapper,
   Heading,
   Text
} from './section-we.styles';

const SectionWe = () => {
   return (
      <WeWrapper>
         <Heading>Кто мы?</Heading>
         <Text>
            Мы – команда опытных разработчиков,
            которые готовы создать для Вас готовый
            продукт любой сложности, будь то сайт
            или мобильное приложение под разные платформы.
            Быстро, качественно, надёжно.
         </Text>
      </WeWrapper>
   );
}

export default SectionWe;