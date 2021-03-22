import styled from 'styled-components';

export const HeaderWrapper = styled.header`
   width: 100%;
   height: max-content;
   position: fixed;
   display: flex;
   justify-content: center;
   transition-duration: 0.7s;
   z-index: 2;
   background-color: ${props => props.background ? '#0a0a0a' : 'transparent'};
      /* background: linear-gradient(180deg, #090909 0%, rgba(9, 9, 9, 0) 126.63%); */
`

export const Background = styled.div`
   position: absolute;
   z-index: -1;
   width: 100%;
   transition-duration: 0.3s;
   height: ${props => props.backgroundWidth ? '200px' : '70px'};
   background: linear-gradient(180deg, #090909 0%, rgba(9, 9, 9, 0) 126.63%);
   background: -moz-linear-gradient(180deg, #090909 0%, rgba(9, 9, 9, 0) 126.63%); /* FF3.6-15 */
   background: -webkit-linear-gradient(180deg, #090909 0%, rgba(9, 9, 9, 0) 126.63%); /* Chrome10-25,Safari5.1-6 */
`