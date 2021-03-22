import styled from 'styled-components';

export const AppWrapper = styled.div`
   min-height: 100vh;
   width: 100%;
   overflow-x: hidden;
   background-color: #0a0a0a;

   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;

   -webkit-overflow-scrolling: auto;

`

export const AppContainer = styled.div`
   width: 100%;
   /* max-width: 956px; */
   max-width: 1200px;
   margin: 70px auto 0 auto;
   z-index:1;
   -webkit-overflow-scrolling: auto;
   /* padding: 0 20px;

   @media(max-width: 768px) {
      padding: 10px;
   } */
`