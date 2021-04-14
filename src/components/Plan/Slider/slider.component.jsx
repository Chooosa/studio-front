import React, { useEffect, useState } from 'react';
import SwipeableTabs from 'react-swipeable-tabs';
import { useSelector } from 'react-redux';

import { SliderWrapper } from './slider.styles';
import { useWindowDimensions } from '../../../hooks/dimensions';
import { colorSelectors } from '../../../redux/color/color.selectors';
import { useTranslation } from '../../../hooks/translation'

const Slider = ({ refSheme, currentStep, setCurrentStep }) => {
   const { width } = useWindowDimensions()
   const [sliderWidth, setSliderWidth] = useState()
   const [currentTab, setCurrentTab] = useState(1)
   const color = useSelector(colorSelectors.color);
   const { t } = useTranslation();
   const [showSlider, setShowSlider] = useState(false);

   useEffect(() => {
      setShowSlider(true)
   }, [])

   useEffect(() => {
      if (currentStep) {
         if (currentStep > 0 && currentStep < 3) {
            setCurrentTab(0)
         }
         if (currentStep > 2 && currentStep < 4) {
            setCurrentTab(1)
         }
         if (currentStep > 4 && currentStep < 8) {
            setCurrentTab(2)
         }
         if (currentStep > 7 && currentStep < 10) {
            setCurrentTab(3)
         }
         if (currentStep === 10) {
            setCurrentTab(4)
         }
      }
   }, [currentStep])

   const handleClickTab = (index) => {
      switch (index) {
         case 0:
            setCurrentStep(1)
            break;
         case 1:
            setCurrentStep(3)
            break;
         case 2:
            setCurrentStep(5)
            break;
         case 3:
            setCurrentStep(8)
            break;
         case 4:
            setCurrentStep(10)
            break;
         default:
            break;
      }
   }

   useEffect(() => {
      setSliderWidth(refSheme.current.offsetLeft)
   }, [width, refSheme])

   // const Tab = ({ children }) => {
   //    return (
   //       <span>
   //          {
   //             children
   //          }
   //       </span>
   //    );
   // }

   return (
      <SliderWrapper
         sliderWidth={sliderWidth}
      >
         {
            showSlider ?
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
                     <span>{t('interview')}</span>,
                     <span>{t('budget')}</span>,
                     <span>{t('design_specification')}</span>,
                     <span>{t('development')}</span>,
                     <span>{t('support')}</span>
                  ]}
                  borderPosition="top"
                  resistanceCoeffiecent={0.3}
                  stiffness={120}
                  damping={10}
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
               : null
         }
      </SliderWrapper>
   );
}

export default Slider;