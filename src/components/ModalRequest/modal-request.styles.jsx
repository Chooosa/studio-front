import styled from 'styled-components'


export const ModalContainer = styled.div`
   width: 80vw;
   max-width: 1050px;
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
   padding-bottom: 10px;
   overflow-x: hidden;
   >div {
      width: 100%;
      height: 100%;
   }
   @media(max-width: 768px) {
      min-width: 100vw;
      min-height: 100vh;
   }
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
`