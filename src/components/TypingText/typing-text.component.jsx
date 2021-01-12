import React, { useState, useEffect } from 'react';
import Typist from 'react-typist';
import { useSelector } from 'react-redux';

import { TypingTextWrapper, CursorWrapper, Text } from './typing-text.styles';
import { colorSelectors } from '../../redux/color/color.selectors';

const TypingText = ({ textsArray }) => {
   const themeColor = useSelector(colorSelectors.color);
   const [typing, setTyping] = useState(true)
   const [textIndex, setTextIndex] = useState(0)

   const cursorOptions = {
      show: true,
      blink: true,
      element: <CursorWrapper color={themeColor}> </CursorWrapper>,
      hideWhenDone: false,
      hideWhenDoneDelay: 1000,
   }

   useEffect(() => {
      setTyping(true);
   }, [typing]);

   const handleTyping = (index) => {
      setTyping(false)
      if (index < textsArray.length - 1) {
         setTextIndex(index + 1)
      } else {
         setTextIndex(0)
      }
   }

   return (
      <TypingTextWrapper color={themeColor}>
         {
            typing ?
               // textsArray.map((text) => {
               <Typist
                  avgTypingDelay={70}
                  stdTypingDelay={20}
                  startDelay={1000}
                  cursor={cursorOptions}
                  onTypingDone={() => handleTyping(textIndex)}
               >
                  <Text >
                     {textsArray[textIndex]}
                  </Text>
                  {
                     <Typist.Backspace count={textsArray[textIndex]?.length} delay={2000} />
                  }

               </Typist>
               // })
               : ''
         }
      </TypingTextWrapper>
   );
}

export default TypingText;