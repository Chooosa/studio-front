import styled from 'styled-components';

export const NavbarContainer = styled.div`
   width: 100%;
   max-width: 956px;
   height: 70px;
   padding-top: 20px;
   padding-bottom: 5px;
   margin: 0 20px;
   display: flex;
   justify-content: space-between;
   align-items: center;

   transition-duration: 0.7s;
   background-color: transparent;
   position: relative;
   z-index: 500;
`
//background-color: ${props => props.open ? '#020202' : 'transparent'};
export const ButtonsWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   /* width: 400px; */
   width: 100%;
   max-width: 500px;

   >button {
      :nth-of-type(2) {
      margin-right: 25px;
      }
   }

`