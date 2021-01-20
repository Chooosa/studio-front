import React, { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { useDispatch, useSelector } from 'react-redux';

import { useWindowDimensions } from '../../../hooks/dimensions';
import { setScroll } from '../../../redux/scroll/scroll.actions'
import { scrollSelectors } from '../../../redux/scroll/scroll.selectors';

import {
   TabsWrapper,
   TabsContainer,
   Tab
} from './draggable-tabs.styles';

const DraggableTabs = ({ refSheme }) => {
   const { width } = useWindowDimensions()
   const [paddingLeft, setpaddingLeft] = useState()
   const dispatch = useDispatch()
   const scroll = useSelector(scrollSelectors.to)

   const [state, setState] = useState(
      {
         activeDrags: 0
      }
   )
   const refBtn = useRef()

   useEffect(() => {
      if (scroll === 'tabs') {
         refBtn.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
         })
         dispatch(setScroll(undefined))
      }
   }, [scroll, dispatch])

   const onStart = () => {
      setState({ activeDrags: ++state.activeDrags });
   };

   const onStop = () => {
      setState({ activeDrags: --state.activeDrags });
   };

   useEffect(() => {
      console.log('padding: ', paddingLeft)
      setpaddingLeft(refSheme.current.offsetLeft)
   }, [width])

   const handleScroll = () => {
      console.log('ok')
      dispatch(setScroll('tabs'))
   }

   const dragHandlers = { onStart: onStart, onStop: onStop };

   return (
      <TabsWrapper paddingLeft={paddingLeft}>
         <Draggable
            axis="x"
            handle=".handle"
            bounds={{ left: -610, right: 510 }}
            {...dragHandlers}
         >
            <TabsContainer onClick={handleScroll} className='handle'>
               <Tab onClick={handleScroll}>
                  click
               </Tab>
               <Tab>
                  ddddddddddddddddddddd
               </Tab>
               <Tab>
                  ddddddddddddddddddddd
               </Tab>
               <Tab>
                  ddddddddddddddddddddd
               </Tab>
               <Tab ref={refBtn}>
                  aaaaaaaaaaaaaaaaaaaaaaa
               </Tab>
            </TabsContainer>
         </Draggable>
      </TabsWrapper>
   );
}

export default DraggableTabs;