import styled, {keyframes, css} from 'styled-components';



export const  LoaderContainer = styled.div`
width: 100%;
height: 100%;
background-color: #0a0a0a;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
z-index: 1500;
flex-direction: column;
`

const dash = (color) => keyframes`
  75% {
    stroke-dashoffset: 0;
    fill:#0a0a0a;
  }
  100% {
      fill: ${color};
      stroke-dashoffset: 0;
  }
`



export const Logo = styled.div`
    height: auto;
   >svg > path {
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
      fill:#0a0a0a;
      stroke: ${props => props.color ? props.color : '#F9F9F9'};
      /* transition-duration: 2s; */
      animation: ${props => css`${dash(props.color)} 1s linear forwards`}; 
   }

`

