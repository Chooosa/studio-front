import React from 'react';


import { TypingWrapper, Text } from './section-typing.styles';
import TypingText from '../TypingText/typing-text.component';

const SectionTyping = () => {

   return (
      <TypingWrapper>
         <Text>Мы разрабатываем :</Text>
         <TypingText textsArray={[
            "Мобильные приложения",
            "Веб-сайты",
            "Интерфейсы",
            "Стратегии продвижения",
            "Веб-интерфейсы"
         ]} />
      </TypingWrapper>
   );
}

export default SectionTyping;