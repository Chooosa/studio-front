import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CustomButton = styled(motion.button)`
   outline: none;
   box-shadow: none;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 10px;
   width: 100%;
   max-width: 400px;
   min-height: 60px;
   border: 1px solid #3fb755;
   border-radius: 2px;
   background-color: transparent;
   cursor: pointer;
   transition-duration: 0.2s;
   opacity: 1;

   font-weight: 500;
   font-size: 14px;
   line-height: 19px;
   color: #fefefe;

   position: relative;
   >img {
      position: absolute;
      right: 30px;
   }
`

export const CustomHeading = styled(motion.h2)`
   font-weight: 800;
   font-size: 42px;
   line-height: 50px;
   color: #F9F9F9;
   margin-bottom: 12px;
   @media (max-width: 600px) {
      font-size: 28px;
      line-height: 32px;
   }
`

export const CustomText = styled(motion.span)`
   font-weight: 200;
   font-size: 14px;
   line-height: 20px;
   letter-spacing: 0.05em;
   color: #F9F9F9;
   width: 100%;
   max-width: 400px;
`