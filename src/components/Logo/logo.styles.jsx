import styled from 'styled-components';

export const LogoButton = styled.button`
   outline: none;
   border: none;
   background-color: transparent;
   padding: 0;
   width: max-content;
   margin-right: 5px;
   cursor: pointer;

   opacity: 1;
   transition-duration: 0.2s;
   :hover {
      opacity: 0.8;
      transition-duration: 0.2s;
   }

   >svg {
      fill: ${props => props.color ? props.color : '#F9F9F9'};
      stroke: ${props => props.color ? props.color : '#F9F9F9'};
   }
`

export const LogoWrapper = styled.div`
   display: flex;
   align-items: center;

   >img {
      cursor: pointer;
   }
`