import styled from 'styled-components';

export const CustomButton = styled.button`
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
`

export const CustomHeading = styled.h2`
   font-weight: 800;
   font-size: 42px;
   line-height: 57px;
   color: #F9F9F9;
   margin-bottom: 12px;
   @media (max-width: 600px) {
      font-size: 28px;
   }
`