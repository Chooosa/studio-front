import { motion } from 'framer-motion';
import styled from 'styled-components';
import { CustomButton, CustomHeading, CustomText } from '../../styles/common';

export const PlanWrapper = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   background-color: #111;
   overflow: hidden;
   padding: 77px 0 60px 0px;
   margin-bottom: 10px;
   /* height: 670px; */

   @media(max-width: 850px) {
      padding: 0px 10px 50px 10px;
   }
   @media(max-width: 410px) {
      padding: 0 0 40px 0;
   }
`

export const Button = styled(CustomButton)`
   align-self: center;
   border-color: ${props => props.color};
   margin-top: 40px;
   margin-right: 56px;
   /* transition-duration: 0.4s; */

   z-index: 1;
   overflow: hidden;

   ::after {
      content: "";
      background-color: ${props => props.color};
      position: absolute;
      z-index: -1;
      padding: 0.85em 0.75em;
      display: block;

      left: -20%;
      right: -20%;
      top: 0;
      bottom: 0;
      transform: skewX(-45deg) scale(0, 1);
      transition: all 0.4s ease;
   }

   :hover {
      /* transition-duration: 0.4s; */
      transition: all 0.4s ease-out;
      ::after {
         transform: skewX(-45deg) scale(1, 1);
      }
   }

   @media(max-width: 850px) {
      margin-right: 0;
   }
   /* background-color: ${props => props.color}; */
`

export const Heading = styled(CustomHeading)`
   margin-top: 0;
   font-size: 24px;
   line-height: 32px;

   /* @media(max-width: 850px) {
      display: none;
   } */
`

export const Text = styled(CustomText)`
   >ul, ol {
      padding-left: 18px;
      >li {
         line-height: 22px;
      }
   }
`

export const PlanContainer = styled.div`
   height: 100%;
   display: flex;
   justify-content: center;

   @media(max-width: 850px) {
      flex-direction: column-reverse;
      align-items: center;
      /* padding-top: 60px; */
   }
`

export const DescriptionWrapper = styled(motion.div)`
   display: flex;
   flex-direction: column;
   max-width: 370px;
   min-width: 300px;
   margin-right: 113px;
   min-height: 450px;
   overflow: hidden;

   @media(max-width: 850px) {
      margin-right: 0;
      min-height: 380px;
   }
   @media(max-width: 410px) {
      margin-left: 10px;
      margin-right: 10px;
   }
`

export const SchemeWrapper = styled.div`
   /* margin-top: 40px; */
   width: 100%;
   max-width: 480px;
   /* width: 50%; */
   display: flex;
   flex-direction: column;
   /* justify-content: space-between; */
   height: 100%;
   /* align-items: flex-end; */
`

export const LineWrapper = styled.div`
   width: 100%;
   height: 50px;
   display: flex;
   flex-direction: column;
   /* justify-content: space-between; */
   align-items: ${props => props.alignLeft ? 'flex-start' : 'flex-end'};
   position: relative;
   margin-top: 40px;
   margin-bottom: 50px;

   @media(max-width: 410px) {
      margin-bottom: 30px;
   }
`

export const Line = styled.div`
   width: ${props => props.lineWidth ? props.lineWidth : '100%'};
   height: 2px;
   background-color: #404040;
   position: relative;
   z-index: 1;
`

export const LineStep = styled(motion.div)`
   position: absolute;
   height: 100%;
   width: ${props => props.width};
   left:${props => props.left};
   /* background-color: ${props => props.active ? props.color : 'transparent'}; */
   z-index: 20;
   transition: all 0.5s ease;


`

export const StepButton = styled.button`
   outline: none;
   background-color: transparent;
   border: none;
   border-bottom: 1px solid ${props => props.active ? props.color : 'transparent'};
   cursor: pointer;
   transition-duration: 0.2s;
   width: max-content;

   font-weight: 200;
   font-size: 14px;
   line-height: 20px;
   letter-spacing: 0.05em;
   color: ${props => props.active  ? props.color :  '#F9F9F9'};
   margin-top: 20px;
   padding: 0;
   padding-bottom: 5px;
   position: absolute;
   left: ${props => props.left};

   z-index: 19;

   :hover {
      color: ${props => props.color};
      transition-duration: 0.2s;
   }

   @media(max-width: 410px) {
      font-size: 12px;
      line-height: 16px;
   }
`

export const ProgressLine = styled.div`
   position: absolute;
   width: ${props => props.cusstomWidth};
   height: 100%;
   background-color: ${props => props.color};
   transition: all 0.5s ease;
`

export const Dash = styled.div`
   width: 2px;
   height: 12px;
   background-color: ${props => props.active ? props.color : '#404040'};
   /* top: 2px; */
   left: ${props => props.left};
   position: absolute;
   z-index: 0;
`

const visibilityDot = (props) => {
   if (props.first && props.transitionProgress === 1) {
      return 'visible'
   } else if (props.first) {
      return 'hidden'
   }
   if (props.two && props.transitionProgress === 2) {
      return 'visible'
   } else if (props.two) {
      return 'hidden'
   }
   if (props.three && props.transitionProgress === 3) {
      return 'visible'
   } else if (props.three) {
      return 'hidden'
   }
   // if (props.first && props.currentStep < 5) {
   //    return 'visible'
   // }
   // if (props.first && props.currentStep >= 5) {
   //    return 'hidden'
   // }
   // if (props.two && props.currentStep > 4 && props.currentStep < 9) {
   //    return 'visible'
   // }
   // if (props.two && props.currentStep >= 9) {
   //    return 'hidden'
   // }
   // if (props.three && props.currentStep > 8) {
   //    return 'visible'
   // } else {
   //    return 'hidden'
   // }
}

export const ProgressDot = styled.div`
   width: 10px;
   height: 10px;
   background-color: ${props => props.color};
   position: absolute;
   top: -4px;
   border-radius: 50%;
   left: calc(${props => props.left} - 4px);
   transition: left 0.5s ease;
   visibility: ${props => visibilityDot(props)};
`
// visibility: ${props => props.currentStep >= 5 ? 'hidden' : 'visible'};

export const LineLabel = styled.span`
   color: #f9f9f9;
   font-weight: 500;
   font-size: 14px;
   line-height: 20px;
   letter-spacing: 0.05em;
   position: absolute;
   left: ${props => props.left};
   top: -36px;

   width: max-content;
`