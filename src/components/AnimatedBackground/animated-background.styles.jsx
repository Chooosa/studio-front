import styled, { keyframes, css } from 'styled-components';


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


const circle = (dash) => keyframes`
0% {
    stroke-dashoffset: ${3 * dash}; }
  20% {
    stroke-dashoffset: ${2 * dash}; }
  30% {
    stroke-dashoffset: ${2 * dash}; }
  45% {
    stroke-dashoffset: ${dash}; }
  50% {
    stroke-dashoffset: ${dash}; }
    70% {
    stroke-dashoffset: ${2 * dash}; }
  80% {
    stroke-dashoffset: ${dash}2*; }
    100% {
    stroke-dashoffset: ${3 * dash}; }

`

const lines = keyframes`
0% {
    stroke-dashoffset: 1950; }
  40% {
    stroke-dashoffset: 3900; }
  60% {
    stroke-dashoffset: 3900; }
  90% {
    stroke-dashoffset: 5800; }
  100% {
    stroke-dashoffset: 5800; }

`




export const Container = styled.div`
width: 100%;
display: ${props => props.hide ? 'none' : 'flex'};
flex-direction: column;
z-index: 0;
position: absolute;
top:70px;
left: 0;
overflow: hidden;
${props => props.animationHeight ? `height: ${props.animationHeight}px;` : ''}
`


export const FirstLines = styled.div`
display: flex;
flex-direction: row;
align-items: flex-end;
`

export const SecondLines = styled.svg`
position: relative;
margin-top: 400px;
right: ${props => -props.ww / 2}px;
align-self: flex-end;
@media(max-width:800px) {
  margin-top: 600px;
}
@media(max-width:500px) {
  margin-top: 1100px;
}
`


export const AnimatedCircle = styled.circle`
stroke-width: 48px;
stroke-dasharray: ${props => props.dash};
animation: ${props => css`${circle(props.dash)} 20s linear infinite`};
`


export const ThirdLines = styled.svg`
stroke-dasharray: 2000;
animation: ${lines} 15s linear infinite;
margin-top: 1200px;
@media(max-width:800px) {
  margin-top: 1400px;
}
@media(max-width:500px) {
  margin-top: 1900px;
}
@media(max-width:400px) {
  margin-top: 2400px;
}
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
animation-delay: ${props => props.index * 0.5}s;
transform: ${props => `translateX(${props.w}px)`};
@media(max-width: 800px) {
    margin-top: 24px;
    animation: ${props => css`${horizontalMove(props.w)} 26s linear infinite`};
    animation-delay: ${props => props.index * 0.5}s;
}
@media(max-width: 600px) {
    margin-top: 30px;
    animation: ${props => css`${horizontalMove(props.w)} 26s linear infinite`};
    animation-delay: ${props => props.index * 0.5}s;
}
`

export const Vertical = styled.svg`
margin-right: 48px;
animation: ${props => css`${verticalMove(props.h)} 15s linear infinite`};
animation-delay: ${props => props.index * 0.5}s;
transform: ${props => `translateY(-${props.h}px)`};
@media(max-width: 800px) {
    margin-right: 24px;
    animation: ${props => css`${verticalMove(props.h)} 13s linear infinite`};
    animation-delay: ${props => props.index * 0.5}s;
}
@media(max-width: 600px) {
    margin-right: 24px;
    animation: ${props => css`${verticalMove(props.h)} 13s linear infinite`};
    animation-delay: ${props => props.index * 0.5}s;
}
`




