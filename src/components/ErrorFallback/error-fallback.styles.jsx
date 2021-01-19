import styled from 'styled-components';

export const ErrorBoundaryContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
flex-direction: column;

color: #F9F9F9;

p {
   transition-duration: 0.3s;
   font-size: 30px;
   text-align: center;
   :first-of-type {
      margin-top: 20%;
      font-size: 50px;
   }
   :last-of-type {
      margin: 20px 0;
   }
   @media(max-width: 668px) {
      font-size: 26px;
      :first-child {
         margin-top: 25%;
         font-size: 40px;
      }
   }
   @media(max-width: 520px) {
      font-size: 22px;
      :first-child {
         margin-top: 27%;
         font-size: 32px;
      }
   }
   @media(max-width: 468px) {
      font-size: 18px;
      :first-child {
         margin-top: 47%;
         font-size: 28px;
      }
   }
   @media(max-width: 370px) {
      font-size: 18px;
      :first-child {
         margin-top: 37%;
         font-size: 24px;
      }
   }
}
>a {
   padding: 11px 0 12px 0;
   width: 100%;
   max-width: 370px;
   height: 50px;
   cursor: pointer;
   outline: none;
   font-weight: 500;
   font-size: 16px;
   line-height: 17px;
   border-radius: 3.16667px;
   opacity: 1;
   transition-duration: 0.3s;
   color: #F9F9F9;
   background: #3FB755;
   border: 2px solid #3FB755;
   display: flex;
   align-items: center;
   justify-content: center;
   :hover {
      opacity: 0.6;
      transition-duration: 0.3s;
   }
   @media(max-width: 468px) {
      max-width: 300px;
      font-size: 16px;
   }
   @media(max-width: 370px) {
      max-width: 270px;
      font-size: 16px;
   }
}
`