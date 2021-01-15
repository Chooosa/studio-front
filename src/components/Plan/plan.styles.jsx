import { motion } from 'framer-motion';
import styled from 'styled-components';
import { CustomButton, CustomHeading, CustomText } from '../../styles/common';

export const PlanWrapper = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   background-color: #111;

   padding: 77px 0 60px 56px;
   height: 670px;
   margin-bottom: 10px;
`

export const Button = styled(CustomButton)`
   align-self: center;
   border-color: ${props => props.color};
   /* background-color: ${props => props.color}; */
`

export const Heading = styled(CustomHeading)`
   margin-top: 0;
`

export const Text = styled(CustomText)`

`

export const PlanContainer = styled.div`
   height: 100%;
   display: flex;
   justify-content: space-between;

`

export const DescriptionWrapper = styled.div`
   display: flex;
   flex-direction: column;
`

export const SchemeWrapper = styled.div`
   width: 450px;
   /* width: 50%; */
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   height: 100%;
   /* align-items: flex-end; */
`

export const LineWrapper = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   /* justify-content: space-between; */
   align-items: flex-end;
   position: relative;
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
   color: ${props => props.active ? props.color : '#F9F9F9'};
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

`

export const ProgressLine = styled.div`
   position: absolute;
   width: ${props => props.width};
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

export const ProgressDot = styled.div`
   width: 15px;
   height: 15px;
   background-color: ${props => props.color};
   position: absolute;
   top: -7px;
   border-radius: 50%;
   left: calc(${props => props.left} - 7px);
   transition: all 0.5s ease;
   display: ${props => props.currentStep >= 5 ? 'none' : 'block'};
`

export const LineLabel = styled.span`
   color: #fff;
   position: absolute;
   left: ${props => props.left};
   top: -35px;
`