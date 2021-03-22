import styled from 'styled-components';

export const TypingWrapper = styled.section`
   width: 100%;
   padding: 120px 20px 90px 142px;

   @media (max-width: 820px) {
      padding: 80px 20px 80px 60px;
   }
   @media (max-width: 600px) {
      padding: 70px 20px 60px 20px;
   }
   @media (max-width: 400px) {
      padding: 40px 20px 10px 20px;
   }
`

export const Text = styled.span`
   font-weight: 300;
   font-size: 24px;
   line-height: 33px;
   letter-spacing: .6px;
   color: #f9f9f9;

   @media (max-width: 600px) {
      font-size: 20px;
      line-height: 24px;
   }
   @media (max-width: 500px) {
      font-size: 18px;
      line-height: 22px;
   }
   @media (max-width: 400px) {
      font-size: 16px;
      line-height: 20px;
   }
   @media (max-width: 370px) {
      font-size: 14px;
      line-height: 18px;
   }
`