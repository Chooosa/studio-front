import styled from 'styled-components';

export const TypingTextWrapper = styled.div`
   height: 60px;
   color: ${props => props.color};
   .Typist {
      display: flex;
      align-items: center;
      .Cursor {
         z-index: 1;
         height: 42px;
         >div {
            background-color:${props => props.color};
         }

         @media (max-width: 700px) {
            height: 36px;
         }
         @media (max-width: 600px) {
            height: 32px;
         }
         @media (max-width: 500px) {
            height: 26px;
         }
         @media (max-width: 430px) {
            height: 24px;
         }
         @media (max-width: 400px) {
            height: 22px;
         }
         @media (max-width: 370px) {
            height: 20px;
         }
      }
   }
`

export const Text = styled.span`
   color: ${props => props.color};
   margin-right: 10px;
   font-weight: 800;
   font-size: 42px;
   line-height: 50px;
   letter-spacing: 1.5px;
   position: relative;

   @media (max-width: 700px) {
      font-size: 36px;
      line-height: 44px;
   }
   @media (max-width: 600px) {
      font-size: 32px;
      line-height: 40px;
   }
   @media (max-width: 500px) {
      font-size: 26px;
      line-height: 34px;
   }
   @media (max-width: 430px) {
      font-size: 24px;
      line-height: 30px;
      letter-spacing: 0;
   }
   @media (max-width: 400px) {
      font-size: 22px;
      line-height: 28px;
      margin-right: 5px;
   }
   @media (max-width: 370px) {
      font-size: 20px;
      line-height: 26px;
   }
`

export const CursorWrapper = styled.div`
   display: inline-flex;
   width: 5px;
   height: 42px;
   opacity: 1;
   animation: blink 1.2s linear infinite;
   @keyframes blink {
      0% { opacity: 1.0; }
      50% { opacity: 0.0; }
      100% { opacity: 1.0; }
   }

   @media (max-width: 700px) {
      height: 36px;
      width: 3px;
   }
   @media (max-width: 600px) {
      height: 32px;
   }
   @media (max-width: 500px) {
      height: 26px;
   }
   @media (max-width: 430px) {
      height: 24px;
   }
   @media (max-width: 400px) {
      height: 22px;
   }
   @media (max-width: 370px) {
      height: 20px;
   }
`