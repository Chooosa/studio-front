import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TypingWrapper, Text } from './section-typing.styles';
import TypingText from '../TypingText/typing-text.component';
import { scrollSelectors } from '../../redux/scroll/scroll.selectors';
import { setScroll } from '../../redux/scroll/scroll.actions';

const SectionTyping = () => {
   const dispatch = useDispatch()
   const scroll = useSelector(scrollSelectors.to)
   const ref = useRef()

   useEffect(() => {
      if (scroll === 'typing') {
         ref.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
         })
         dispatch(setScroll(undefined))
      }
   }, [scroll, dispatch])

   return (
      <TypingWrapper ref={ref}>
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