import styled from 'styled-components';

export const NavbarContainer = styled.div`
   width: 100%;
   max-width: 1015px;
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
   max-width: 550px;

   >button {
      :nth-of-type(2) {
      margin-right: 25px;
      }
   }

`

export const LangToggleButton = styled.button`
   background-color: transparent;
   border-color: transparent;
   border-width: 0px;
   outline-width: 0px;
   position: absolute;
   right: 15%;

   font-weight: 600;
   font-size: 16px;
   line-height: 22px;

   :hover {
      cursor: pointer;
   }

   color: #F9F9F9;
   text-transform: uppercase;
`

export const CustomLink = styled.span`
   font-weight: 600;
   font-size: 16px;
   line-height: 22px;
   color: ${props => props.color ? props.color : '#F9F9F9'};

   opacity: 1;
   transition-duration: 0.2s;
   cursor: pointer;
   :hover {
      opacity: 0.8;
      transition-duration: 0.2s;
   }
`