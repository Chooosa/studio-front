import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TypingWrapper, Text } from './section-typing.styles';
import TypingText from '../TypingText/typing-text.component';
import { scrollSelectors } from '../../redux/scroll/scroll.selectors';
import { setScroll } from '../../redux/scroll/scroll.actions';
import { useTranslation } from '../../hooks/translation';

const SectionTyping = () => {
   const dispatch = useDispatch()
   const scroll = useSelector(scrollSelectors.to)
   const ref = useRef()
   const { t } = useTranslation();

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
         <Text> {t('we_develop')} </Text>
         <TypingText textsArray={[
            t('mobile_apps'),
            t('website'),
            t('interfaces'),
            t('promotion_strategies')
         ]} />
      </TypingWrapper>
   );
}

export default SectionTyping;