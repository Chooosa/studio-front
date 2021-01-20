import styled from 'styled-components';

export const SliderWrapper = styled.div`
   width: calc(100% - ${props => props.sliderWidth}px);
   min-height: 50px;
   overflow: hidden;
   margin-bottom: 40px;
   align-self: flex-end;
`