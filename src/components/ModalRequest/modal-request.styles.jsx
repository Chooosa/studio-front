import styled from 'styled-components'


export const ModalContainer = styled.div`
   width: 80vw;
   max-width: 1300px;
   height: max-content;
   min-height: 300px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-end;
   /* background: transparent; */
   background-color: #0a0a0a;
   border-radius: 8px;
   position: relative;
   padding: 8%;
   padding-bottom: 0;
   overflow-x: hidden;
   /* overflow-y: scroll; */
   span {
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      text-align: center;
      color: #000000;
   }
   /* >div {
      width: 100%;
      height: 100%;
   } */
   @media(max-width: 768px) {
      min-width: 100vw;
      min-height: 100vh;
   }
   /* @media(max-width: 660px) {
      width: 550px;
   }
   @media(max-width: 610px) {
      width: 460px;
   }
   @media(max-width: 575px) {
      width: 400px;
   }
   @media(max-width: 465px) {
      width: 330px;
      height: 400px;
   }
   @media(max-width: 399px) {
      width: 300px;
   }
   @media(max-width: 370px) {
      width: 280px;
   }
   @media(max-width: 345px) {
      width: 260px;
   }
   @media(max-width: 325px) {
      width: 250px;
   } */
`

export const CloseButton = styled.button`
   position: absolute;
   top: 15px;
   right: 15px;
   outline: none;
   background: transparent;
   border: none;
   cursor: pointer;
   width: 30px;
   height: 30px;
   padding: 0;
   z-index: 10000;
   >img {
      width: 30px;
   }

   /* @media(max-width: 460px) {
      top: 0;
      right: 0;
   } */
`