import styled from 'styled-components';

export const SliderWrapper = styled.div`
   max-width: calc(100% - ${props => props.sliderWidth}px);
   min-height: 50px;
   overflow: hidden;
   margin-bottom: 40px;
   /* align-self: flex-end; */
   >div>div{
      background-repeat: no-repeat;
      box-sizing: inherit;
   }
`