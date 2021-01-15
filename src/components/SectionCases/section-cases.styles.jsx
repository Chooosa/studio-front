import styled from 'styled-components';
import { CustomButton } from '../../styles/common';



export const ControlsContainer = styled.div`
display: flex;
flex-direction: row;
@media(max-width: 600px) {
    flex-direction: column;
}
margin-bottom: 35px;
`


export const Button = styled(CustomButton)`
width: 100%;
max-width: 600px;
border: 1px solid #1C1C1C;
background-color: ${props => props.active? props.color: '#111111'};
height: 70px;
@media (max-width: 600px) {
    height: 60px;
}
`


export const CasesContainer = styled.div`
position: absolute;
width: 100%;
transform: ${props => props.front? `translateZ(${props.z}px)` : `translateX(${props.z}px)  rotateY(90deg) `}  ;
/* transform-origin: ${props => props.front? '' : 'top right'}; */
overflow: hidden;
`

export const SliderContainer = styled.div`
perspective: 2000px;
position: relative;
height:860px;
z-index: 1;
@media(max-width: 768px) {
    height: 720px;

}

@media(max-width: 600px) {
    height: 1144px;
}
/* overflow: hidden; */
`
export const SLiderInnerContainer = styled.div`
transform: ${props => `translateZ(-${props.z}px)`};
transform-style:preserve-3d;
`

export const Slider = styled.div`
display: flex;
flex-direction: row;
transform: ${props => `rotateY(${props.rotation}deg)`};
width: 100%;
transition-duration: 1s;
transform-style:preserve-3d;
`


export const AllCasesButtonContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 50px;
`

export const AllCasesButton = styled(CustomButton)`
width: 100%;
border: none;
background-color: ${props => props.color};
`