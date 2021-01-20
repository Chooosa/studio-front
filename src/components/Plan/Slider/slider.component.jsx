import React, { useEffect, useState } from 'react';
import SwipeableTabs from 'react-swipeable-tabs';
import { useSelector } from 'react-redux';

import { SliderWrapper } from './slider.styles';
import { useWindowDimensions } from '../../../hooks/dimensions';
import { colorSelectors } from '../../../redux/color/color.selectors';

const Slider = ({ refSheme, currentStep, setCurrentStep }) => {
   const { width } = useWindowDimensions()
   const [sliderWidth, setSliderWidth] = useState()
   const [currentTab, setCurrentTab] = useState(1)
   const color = useSelector(colorSelectors.color);

   useEffect(() => {
      if (currentStep) {
         if (currentStep > 0 && currentStep < 5) {
            setCurrentTab(0)
         }
         if (currentStep > 4 && currentStep < 7) {
            setCurrentTab(1)
         }
         if (currentStep > 6 && currentStep < 10) {
            setCurrentTab(2)
         }
         if (currentStep === 10) {
            setCurrentTab(3)
         }
      }
   }, [currentStep])

   const handleClickTab = (index) => {
      switch (index) {
         case 0:
            setCurrentStep(1)
            break;
         case 1:
            setCurrentStep(5)
            break;
         case 2:
            setCurrentStep(7)
            break;
         case 3:
            setCurrentStep(10)
            break;
         default:
            break;
      }
   }

   useEffect(() => {
      setSliderWidth(refSheme.current.offsetLeft)
   }, [width])

   return (
      <SliderWrapper
         sliderWidth={sliderWidth}
      >
         <SwipeableTabs
            // noFirstLeftPadding={false}
            // noLastRightPadding={false}
            safeMargin={500}
            // fitItems={false}
            alignCenter={true}
            borderWidthRatio={0.75}
            activeItemIndex={currentTab}
            onItemClick={(item, index) => handleClickTab(index)}
            items={[
               "Интервью",
               "Договор",
               "Дизайн",
               "Сопровождение"
            ]}
            borderPosition="top"
            // // borderThickness={2}
            borderColor={color}
            itemStyle={{
               fontSize: '18px',
               fontWeight: '200',
               lineHeight: '25px',
               color: '#F9F9F9'
            }}
            activeStyle={{
               fontWeight: '600',
            }}
         />
      </SliderWrapper>
   );
}

export default Slider;