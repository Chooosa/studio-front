import styled from 'styled-components';

export const HeaderWrapper = styled.header`
   width: 100%;
   height: max-content;
   position: fixed;
   display: flex;
   justify-content: center;
   transition-duration: 0.7s;
   background-color: ${props => props.open ? '#020202' : 'rgba(10,10,10,0.8)'};
   z-index: 2;
`