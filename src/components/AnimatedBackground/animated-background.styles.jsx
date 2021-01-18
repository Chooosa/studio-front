import styled, {keyframes, css} from 'styled-components';


export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
z-index: 0;
position: absolute;
top:70px;
left: 0;
`


export const FirstLines = styled.div`
display: flex;
flex-direction: row;
align-items: flex-end;
`

export const SecondLines = styled.svg`

`

export const ThirdLines = styled.svg`
`

export const VerticalContainer = styled.div`
display: flex;
flex-direction: row;
overflow: hidden;
`

export const HorizontalContainer = styled.div`
display: flex;
flex-direction: column;
overflow: hidden;
`

export const Horizontal = styled.svg`
margin-top: 48px;
animation: ${props => css`${horizontalMove(props.w)} 30s linear infinite`};
animation-delay: ${props => props.index*0.5}s;
transform: ${`translateX(${props => props.w}px)`};
@media(max-width: 800px) {
    margin-top: 24px;
    animation: ${props => css`${horizontalMove(props.w)} 20s linear infinite`};
    animation-delay: ${props => props.index*0.5}s;
}

`

export const Vertical = styled.svg`
margin-right: 48px;  
animation: ${props => css`${verticalMove(props.h)} 15s linear infinite`};
animation-delay: ${props => props.index*0.5}s;
transform: ${`translateY(-${props => props.h}px)`};
@media(max-width: 800px) {
    margin-right: 24px;
    animation: ${props => css`${verticalMove(props.h)} 10s linear infinite`};
    animation-delay: ${props => props.index*0.5}s;
}
`


const verticalMove = (h) => keyframes`

  0% {
      transform: ${`translateY(-${h}px)`};
  }
  20% {
      transform: translateY(0px);
  }
  60% {
        transform: translateY(0px);
  }
  80% {
    transform: ${`translateY(-${h}px)`};
  }
  100% {
    transform: ${`translateY(-${h}px)`};
  }
`

const horizontalMove = (w) => keyframes`
  0% {
      transform: ${`translateX(${w}px)`};
  }
  10% {
      transform: ${`translateX(${w}px)`};
  }
  20% {
      transform: translateX(0px);
  }
  30% {
        transform: translateX(0px);
  }
  40% {
    transform: ${`translateX(-${w}px)`};
  }
  50% {
    transform: ${`translateX(-${w}px)`};
  }
  60% {
    transform: ${`translateX(-${w}px)`};
  }
  70% {
        transform: translateX(0px);
  }
  80% {
        transform: translateX(0px);
  }
  90% {
    transform: ${`translateX(${w}px)`};
  }  
  100% {
    transform: ${`translateX(${w}px)`};
  }
`




// export const Logo = styled.div`
//     height: auto;
//    >svg > path {
//     stroke-dasharray: 100;
//     stroke-dashoffset: 100;
//       fill:#0a0a0a;
//       stroke: ${props => props.color ? props.color : '#F9F9F9'};
//       /* transition-duration: 2s; */
//       animation: ${props => css`${dash(props.color)} 1.5s linear forwards`}; 
//    }

// `