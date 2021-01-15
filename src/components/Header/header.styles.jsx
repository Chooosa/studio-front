import styled from 'styled-components';

export const HeaderWrapper = styled.header`
   width: 100%;
   height: max-content;
   position: fixed;
   display: flex;
   justify-content: center;
   transition-duration: 0.7s;
   background-color: ${props => props.open ? '#020202' : '#0a0a0a'};
   z-index: 2;
`