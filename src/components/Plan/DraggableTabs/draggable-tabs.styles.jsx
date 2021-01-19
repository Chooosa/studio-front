import styled from 'styled-components';

export const TabsWrapper = styled.div`
   width: calc(100% - ${props => props.paddingLeft}px);
   /* max-width: 480px; */
   height: 50px;
   overflow: hidden;
   margin-bottom: 40px;
   align-self: flex-end;
   z-index: 1;
   `
/* padding-left: ${props => props.paddingLeft}px; */

export const TabsContainer = styled.div`
   display: flex;
   height: 100%;
   z-index: 2;
`

export const Tab = styled.button`
   height: 100%;
   z-index: 3;
`