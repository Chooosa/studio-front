import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
// import smoothscroll from 'smoothscroll-polyfill';

import {
   PlanWrapper,
   Button,
   PlanContainer,
   DescriptionWrapper,
   SchemeWrapper,
   Heading,
   Text,
   LineWrapper,
   Line,
   StepButton,
   Dash,
   ProgressLine,
   ProgressDot,
   LineLabel,
   Dot
} from './plan.styles';
import { colorSelectors } from '../../redux/color/color.selectors';


import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { setScroll } from '../../redux/scroll/scroll.actions'
import { useWindowDimensions } from '../../hooks/dimensions'
import Slider from './Slider/slider.component'
import { scrollSelectors } from '../../redux/scroll/scroll.selectors';
// import DraggableTabs from './DraggableTabs/draggable-tabs.component'
import { useTranslation } from '../../hooks/translation'


const Plan = ({ onOpenModal }) => {
   const color = useSelector(colorSelectors.color);
   const [currentStep, setCurrentStep] = useState(1);
   const [transitionProgress, setTransitionProgress] = useState(1);

   const refSheme = useRef();
   const dispatch = useDispatch();
   const { width } = useWindowDimensions();
   const scroll = useSelector(scrollSelectors.to)

   const progressLine1 = useRef();
   const line1 = useRef();
   const progressLine2 = useRef();
   const line2 = useRef();
   const progressLine3 = useRef();
   const line3 = useRef();
   const { t } = useTranslation();

   useEffect(() => {
      if (scroll === 'plan') {
         refSheme.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
         })
         dispatch(setScroll(undefined))
      }
   }, [scroll, dispatch])

   // const handleScroll = () => {
   //    // refApplication.current.scrollIntoView({ behavior: 'smooth' })
   //    dispatch(setScroll('request'))
   // }

   const descriptionTexts = [
      <motion.div
         key={1}
         initial={{ x: '-100%' }}
         animate={{ x: '0%' }}
         exit={{ x: '100%' }}
         transition={{ duration: 0.3 }}

      >
         <Heading>
            {t('interview')}
         </Heading>
         <Text>
            {t('interview_desc_intro_first')}
            <br />
            <br />
            {t('interview_desc_intro')}
            <ul>
               <li>
                  {t('interview_desc_list_first')}
               </li>
               <li>
                  {t('interview_desc_list_second')}
               </li>
            </ul>
            {t('interview_desc_outro')}
         </Text>
      </motion.div>,

      <motion.div
         key={2}
         initial={{ x: '-100%' }}
         animate={{ x: '0%' }}
         exit={{ x: '100%' }}
         transition={{ duration: 0.3 }}

      >
         <Heading>
            {t('analysis')}
         </Heading>
         <Text>
            {t('analysis_desc_intro')}
            <ul>
               <li>
                  {t('analysis_desc_list_first')}
               </li>
               {/* <li>
                  {t('analysis_desc_list_second')}
               </li> */}
               <li>
                  {t('analysis_desc_list_third')}
               </li>
            </ul>
            {t('analysis_desc_outro')}
         </Text>
      </motion.div>,

      <motion.div
         key={3}
         initial={{ x: '-100%' }}
         animate={{ x: '0%' }}
         exit={{ x: '100%' }}
         transition={{ duration: 0.3 }}

      >
         <Heading>
            {t('budget')}
         </Heading>
         <Text>
            <p> {t('budget_desc')} </p>
            <br />
            <p> {t('budget_desc_second')} </p>
         </Text>
      </motion.div>,

      <motion.div
         key={4}
         initial={{ x: '-100%' }}
         animate={{ x: '0%' }}
         exit={{ x: '100%' }}
         transition={{ duration: 0.3 }}

      >
         <Heading>
            {t('contract')}
         </Heading>
         <Text>
            <p> {t('contract_desc')} </p>
            <br />
            <p> {t('contract_desc_second')} </p>
            <br />
            <p> {t('contract_desc_third')} </p>
            <br />
         </Text>
      </motion.div>,

      <motion.div
         key={5}
         initial={{ x: '-100%' }}
         animate={{ x: '0%' }}
         exit={{ x: '100%' }}
         transition={{ duration: 0.3 }}

      >
         <Heading>
            {t('design_specification')}
         </Heading>
         <Text>
            <p> {t('design_specification_desc')} </p>
            <br />
            <p> {t('design_specification_desc_second')} </p>
         </Text>
      </motion.div>,

      <motion.div
         key={6}
         initial={{ x: '-100%' }}
         animate={{ x: '0%' }}
         exit={{ x: '100%' }}
         transition={{ duration: 0.3 }}

      >
         <Heading>
            {t('prototyping')}
         </Heading>
         <Text>
            <p> {t('prototyping_desc')} </p>
            <br />
            <p> {t('prototyping_desc_second')} </p>
         </Text>
      </motion.div>,

      <motion.div
         key={7}
         initial={{ x: '-100%' }}
         animate={{ x: '0%' }}
         exit={{ x: '100%' }}
         transition={{ duration: 0.3 }}

      >
         <Heading>
            {t('design')}
         </Heading>
         <Text>
            <p> {t('design_desc')} </p>
            <br />
            <p>{t('design_desc_second')}</p>
            <br />
            <p>{t('design_desc_third')}</p>
         </Text>
      </motion.div>,

      <motion.div
         key={8}
         initial={{ x: '-100%' }}
         animate={{ x: '0%' }}
         exit={{ x: '100%' }}
         transition={{ duration: 0.3 }}

      >
         <Heading>
            {t('development')}
         </Heading>
         <Text>
            <p> {t('development_desc')} </p>
            <br />
            <p> {t('development_desc_second')} </p>
         </Text>
      </motion.div>,

      <motion.div
         key={9}
         initial={{ x: '-100%' }}
         animate={{ x: '0%' }}
         exit={{ x: '100%' }}
         transition={{ duration: 0.3 }}

      >
         <Heading>
            {t('testing')}
         </Heading>
         <Text>
            <p> {t('testing_desc')} </p>
            <br />
            <p> {t('testing_desc_second')} </p>
         </Text>
      </motion.div>,

      <motion.div
         key={10}
         initial={{ x: '-100%' }}
         animate={{ x: '0%' }}
         exit={{ x: '100%' }}
         transition={{ duration: 0.3 }}

      >
         <Heading>
            {t('support')}
         </Heading>
         <Text>
            <p> {t('support_desc')} </p>
            <br />
            <p> {t('support_desc_second')} </p>
         </Text>
      </motion.div>,

   ]

   const handlePaintingOver = () => {
      if (transitionProgress === 1) {
         switch (currentStep) {
            case 1:
               return '0.0001px'
            case 2:
               return '34%'
            case 3:
               return '64%'
            case 4:
               return '89%'
            case 5:
               return '100%'
            default:
               return '100%'
         }
      } else if (transitionProgress > 1) {
         return '100%'
      } else {
         return '0%'
      }
   }

   const handlePaintingOver2 = () => {
      if (transitionProgress === 2) {
         if (currentStep > 4) {
            switch (currentStep) {
               case 5:
                  return '0.0001px'
               case 6:
                  return '50%'
               case 7:
                  return '89%'
               case 8:
                  return '100%'
               default:
                  return '100%'
            }
         } else {
            return '0%'
         }
      } else if (transitionProgress > 2) {
         return '100%'
      } else {
         return '0%'
      }
   }

   const handlePaintingOver3 = () => {
      if (transitionProgress === 3) {
         if (currentStep > 7) {
            switch (currentStep) {
               case 8:
                  return '0.0001px'
               case 9:
                  return '55%'
               case 10:
                  return '100%'
               default:
                  return '100%'
            }
         } else {
            return '0%'
         }
      } else {
         return '0%'
      }
   }

   useEffect(() => {
      console.log('transitionProgress: ', transitionProgress)
      console.log('currentStep: ', currentStep)
   }, [currentStep, transitionProgress])

   const handleTransitionEnd = () => {
      if (line1.current?.offsetWidth === progressLine1.current?.offsetWidth) {
         setTransitionProgress(2)
      }
      console.log('1 ', progressLine2.current?.offsetWidth)
   }

   const handleTransitionEnd2 = () => {
      if (progressLine1.current?.offsetWidth !== line1.current?.offsetWidth) {
         setTransitionProgress(1)
      }
      if (line2.current?.offsetWidth === progressLine2.current?.offsetWidth) {
         setTransitionProgress(3)
      }
      if (progressLine2.current?.offsetWidth === 0 && currentStep !== 5) {
         setTransitionProgress(1)
      }
      console.log('2 ', progressLine2.current?.offsetWidth)
   }

   const handleTransitionEnd3 = () => {
      if (transitionProgress > 1) {
         if (progressLine3.current?.offsetWidth === 0 && currentStep !== 8) {
            setTransitionProgress(2)
         }
      }
   }

   return (
      <PlanWrapper>
         <PlanContainer>
            <AnimateSharedLayout>
               <DescriptionWrapper
                  layout
               >
                  <AnimatePresence
                     exitBeforeEnter
                  >
                     {descriptionTexts[currentStep - 1]}
                  </AnimatePresence>
               </DescriptionWrapper>
            </AnimateSharedLayout>

            <SchemeWrapper ref={refSheme}>
               <LineWrapper>
                  <Line
                     ref={line1}
                     // lineWidth='calc(100% - 6%)'
                     lineWidth='100%'
                  >
                     <LineLabel
                        left={'0%'}
                     >
                        {t('first_stage')}
                     </LineLabel>
                     <Dot
                        left={'0.0001px'}
                        color={color}
                        active
                     />

                     <LineLabel
                        left={'64%'}
                     >
                        {t('second_stage')}
                     </LineLabel>
                     <Dot
                        left={'64%'}
                        color={color}
                        active={currentStep >= 3}
                     />

                     <ProgressLine
                        ref={progressLine1}
                        cusstomWidth={handlePaintingOver}
                        color={color}
                        onTransitionEnd={handleTransitionEnd}
                     />
                     <ProgressDot
                        left={handlePaintingOver}
                        color={color}
                        currentStep={currentStep}
                        first
                        transitionProgress={transitionProgress}
                     />

                     <Dash
                        left={'0.0001px'}
                        color={color}
                        active
                     >
                        <StepButton
                           color={color}
                           left={'0'}
                           onClick={() => setCurrentStep(1)}
                           dashLeft={'0'}
                           active={currentStep === 1}
                           isStage={true}
                        >
                           {t('interview')}
                        </StepButton>
                     </Dash>

                     <Dash
                        left={'34%'}
                        color={color}
                        active={currentStep >= 2}
                     >
                        <StepButton
                           color={color}
                           left={'-35px'}
                           onClick={() => setCurrentStep(2)}
                           active={currentStep === 2}
                        >
                           {t('analysis')}
                        </StepButton>
                     </Dash>

                     <Dash
                        left={'64%'}
                        color={color}
                        active={currentStep >= 3}
                     >
                        <StepButton
                           color={color}
                           left={'-22px'}
                           onClick={() => setCurrentStep(3)}
                           active={currentStep === 3}
                           isStage={true}
                        >
                           {t('budget')}
                        </StepButton>
                     </Dash>

                     <Dash
                        left={'89%'}
                        color={color}
                        active={currentStep >= 4}
                     >
                        <StepButton
                           color={color}
                           left={'-25px'}
                           onClick={() => setCurrentStep(4)}
                           active={currentStep === 4}
                        >
                           {t('contract')}
                        </StepButton>
                     </Dash>
                  </Line>
               </LineWrapper>

               <LineWrapper>
                  <Line
                     ref={line2}
                  >
                     <LineLabel
                        left={'0%'}
                     >
                        {t('third_stage')}
                     </LineLabel>
                     <Dot
                        left={'0.0001px'}
                        color={color}
                        active={currentStep >= 5}
                     />

                     <ProgressLine
                        ref={progressLine2}
                        cusstomWidth={() => handlePaintingOver2}
                        color={color}
                        onTransitionEnd={handleTransitionEnd2}
                     />

                     <ProgressDot
                        left={handlePaintingOver2}
                        color={color}
                        currentStep={currentStep}
                        two
                        transitionProgress={transitionProgress}
                     />

                     <Dash
                        left={'0.0001px'}
                        color={color}
                        active={currentStep >= 5}
                     >
                        <StepButton
                           color={color}
                           left={'0'}
                           onClick={() => setCurrentStep(5)}
                           dashLeft={'0'}
                           active={currentStep === 5}
                           isStage={true}
                        >
                           {t('design_specification')}
                        </StepButton>
                     </Dash>

                     <Dash
                        left={'50%'}
                        color={color}
                        active={currentStep >= 6}
                     >
                        <StepButton
                           color={color}
                           left={'-70px'}
                           onClick={() => setCurrentStep(6)}
                           active={currentStep === 6}
                        >
                           {t('prototyping')}
                        </StepButton>
                     </Dash>

                     <Dash
                        left={'89%'}
                        color={color}
                        active={currentStep >= 7}
                     >
                        <StepButton
                           color={color}
                           left={'-20px'}
                           onClick={() => setCurrentStep(7)}
                           active={currentStep === 7}
                        >
                           {t('design')}
                        </StepButton>
                     </Dash>
                  </Line>
               </LineWrapper>

               <LineWrapper alignLeft>
                  <Line
                     ref={line3}
                     lineWidth={'75%'}>
                     <LineLabel
                        left={'0%'}
                     >
                        {t('fourth_stage')}
                     </LineLabel>
                     <Dot
                        left={'0.0001px'}
                        color={color}
                        active={currentStep >= 8}
                     />

                     <LineLabel
                        left={'100%'}
                     >
                        {t('fifth_stage')}
                     </LineLabel>
                     <Dot
                        left={'100%'}
                        color={color}
                        active={currentStep >= 10}
                     />

                     <ProgressLine
                        ref={progressLine3}
                        cusstomWidth={() => handlePaintingOver3}
                        color={color}
                        onTransitionEnd={handleTransitionEnd3}
                     />
                     <ProgressDot
                        left={handlePaintingOver3}
                        color={color}
                        currentStep={currentStep}
                        three
                        transitionProgress={transitionProgress}
                     />

                     <Dash
                        left={'0.0001px'}
                        color={color}
                        active={currentStep >= 8}
                     >
                        <StepButton
                           color={color}
                           left={'0'}
                           onClick={() => setCurrentStep(8)}
                           active={currentStep === 8}
                           isStage={true}
                        >
                           {t('development')}
                        </StepButton>
                     </Dash>

                     <Dash
                        left={'55%'}
                        color={color}
                        active={currentStep >= 9}
                     >
                        <StepButton
                           color={color}
                           left={'-40px'}
                           onClick={() => setCurrentStep(9)}
                           dashLeft={'0'}
                           active={currentStep === 9}
                        >
                           {t('testing')}
                        </StepButton>
                     </Dash>

                     <Dash
                        left={'100%'}
                        color={color}
                        active={currentStep >= 10}
                     >
                        <StepButton
                           color={color}
                           left={'0'}
                           onClick={() => setCurrentStep(10)}
                           active={currentStep === 10}
                           isStage={true}
                        >
                           {t('support')}
                        </StepButton>
                     </Dash>
                  </Line>
               </LineWrapper>
            </SchemeWrapper>
            {
               width < 850 &&
               <Slider
                  refSheme={refSheme}
                  currentStep={currentStep}
                  setCurrentStep={setCurrentStep}
               />
            }
         </PlanContainer>
         <Button onClick={onOpenModal} color={color}>
            {t('leave_request')}
            {/* <img src={postIco} alt='post' /> */}
         </Button>
      </PlanWrapper >
   );
}

export default Plan;