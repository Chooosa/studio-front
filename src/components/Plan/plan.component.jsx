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
   LineLabel
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
            {t('interview_desc_intro')}
            <ul>
               <li>
                  {t('interview_desc_list_first')}
               </li>
               <li>
                  {t('interview_desc_list_second')}
               </li>
               <li>
                  {t('interview_desc_list_third')}
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
               <li>
                  {t('analysis_desc_list_second')}
               </li>
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
            {t('briefing')}
         </Heading>
         <Text>
            {t('briefing_desc_intro')}
            <ul>
               <li>
                  {t('briefing_desc_list_first')}
               </li>
               <li>
                  {t('briefing_desc_second')}
               </li>
            </ul>
            {t('briefing_desc_outro')}
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
            {t('budget')}
         </Heading>
         <Text>
            <p> {t('budget_desc')} </p>
            <br />
            <p> {t('budget_desc_second')} </p>
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
         key={6}
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
               return '0%'
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
                  return '6%'
               case 6:
                  return '38%'
               case 7:
                  return '60%'
               case 8:
                  return '89%'
               case 9:
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
         if (currentStep > 8) {
            switch (currentStep) {
               case 9:
                  return '35%'
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

   const handleTransitionEnd = () => {
      if (line1.current?.offsetWidth === progressLine1.current?.offsetWidth) {
         setTransitionProgress(2)
      }
   }

   const handleTransitionEnd2 = () => {
      if (progressLine1.current?.offsetWidth !== line1.current?.offsetWidth) {
         setTransitionProgress(1)
      }
      if (line2.current?.offsetWidth === progressLine2.current?.offsetWidth) {
         setTransitionProgress(3)
      }
      if (progressLine2.current?.offsetWidth === 0) {
         setTransitionProgress(1)
      }
   }

   const handleTransitionEnd3 = () => {
      if (transitionProgress > 1) {
         if (progressLine3.current?.offsetWidth === 0) {
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
                     lineWidth='calc(100% - 6%)'>
                     <LineLabel
                        left={'0%'}
                     >
                        {t('first_stage')}
                     </LineLabel>
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
                           left={'-50px'}
                           onClick={() => setCurrentStep(3)}
                           active={currentStep === 3}
                        >
                           {t('briefing')}
                        </StepButton>
                     </Dash>

                     <Dash
                        left={'89%'}
                        color={color}
                        active={currentStep >= 4}
                     >
                        <StepButton
                           color={color}
                           left={'-22px'}
                           onClick={() => setCurrentStep(4)}
                           active={currentStep === 4}
                        >
                           {t('budget')}
                        </StepButton>
                     </Dash>
                  </Line>
               </LineWrapper>

               <LineWrapper>
                  <Line
                     ref={line2}
                  >
                     <LineLabel
                        left={'6%'}
                     >
                        {t('second_stage')}
                     </LineLabel>
                     <LineLabel
                        left={'60%'}
                     >
                        {t('third_stage')}
                     </LineLabel>
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
                        left={'6%'}
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
                           {t('contract')}
                        </StepButton>
                     </Dash>

                     <Dash
                        left={'38%'}
                        color={color}
                        active={currentStep >= 6}
                     >
                        <StepButton
                           color={color}
                           left={'-40px'}
                           onClick={() => setCurrentStep(6)}
                           active={currentStep === 6}
                        >
                           {t('design_specification')}
                        </StepButton>
                     </Dash>

                     <Dash
                        left={'60%'}
                        color={color}
                        active={currentStep >= 7}
                     >
                        <StepButton
                           color={color}
                           left={'0'}
                           onClick={() => setCurrentStep(7)}
                           active={currentStep === 7}
                           isStage={true}
                        >
                           {t('design')}
                        </StepButton>
                     </Dash>

                     <Dash
                        left={'89%'}
                        color={color}
                        active={currentStep >= 8}
                     >
                        <StepButton
                           color={color}
                           left={'-40px'}
                           onClick={() => setCurrentStep(8)}
                           active={currentStep === 8}
                        >
                           {t('development')}
                        </StepButton>
                     </Dash>
                  </Line>
               </LineWrapper>

               <LineWrapper alignLeft>
                  <Line
                     ref={line3}
                     lineWidth={'50%'}>
                     <LineLabel
                        left={'100%'}
                     >
                        {t('fourth_stage')}
                     </LineLabel>
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
                        left={'35%'}
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