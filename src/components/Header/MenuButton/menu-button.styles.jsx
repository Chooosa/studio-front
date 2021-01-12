import styled from 'styled-components';

export const MenuButtonContainer = styled.button`
   cursor: pointer;
   outline: none;
   border: none;
   background-color: transparent;
   padding: 0;
   /* width: 120px; */
   width: 100%;
   max-width: 120px;
   display: flex;
   align-items: center;

   font-weight: 600;
   font-size: 16px;
   line-height: 22px;
   color: ${props => props.color ? props.color : '#F9F9F9'};

   opacity: 1;
   transition-duration: 0.2s;
   :hover {
      opacity: 0.8;
      transition-duration: 0.2s;
   }

   >svg {
      margin-left: 12px;
      width: 8px;
      transition-duration: 0.3s;
      transform: ${props => props.active ? 'rotate(180deg)' : 'rotate(0)'};

      fill: ${props => props.color ? props.color : '#F9F9F9'};
      stroke: ${props => props.color ? props.color : '#F9F9F9'};
   }
`

/*
>img {
      margin-left: 12px;
      width: 8px;
      transition-duration: 0.3s;
      transform: ${props => props.active ? 'rotate(180deg)' : 'rotate(0)'};
   }
*/