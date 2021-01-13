import React from 'react';
import Section from '../Common/Section/section.component';

import {
   WeWrapper,
   Heading,
   Text
} from './section-we.styles';

const SectionWe = () => {
   return (
      <Section
      title='Кто мы?'
      description={`Мы – команда опытных разработчиков,
      которые готовы создать   для Вас готовый
      продукт любой сложности, будь то сайт
      или мобильное приложение под разные платформы.
      Быстро, качественно, надёжно.`}
      index={5}
      >
      </Section>
   );
}

export default SectionWe;