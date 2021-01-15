import styled from 'styled-components';
import {motion} from 'framer-motion';

export const BottomTabContainer = styled.div`
width: 100%;
position: fixed;
bottom: 0;
left: 0;
display: flex;
justify-content: center;
z-index: 1112;
transition-duration: 0.5s;
transform: ${props => `translateY(${props.hide? 80: 0}px)`};
`


export const BottomTabBarContainer = styled.div`
width: 100%;
max-width: 400px;
background-color: ${props => props.color};
height: 57px;
display: flex;
flex-direction: row;
justify-content: center;
@media(min-width:401px) {
    border-radius: 10px;
    margin-bottom: 15px;
} 

`


export const BottomTabBarInnerContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 70%;
height: 100%;
padding: 8px 0px;
`

export const BottomTab = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100%;
align-items: center;
cursor: pointer;
`

export const BottomTabIcon = styled.div`
>svg >path {
    stroke: ${props => props.active? '#ffffff' :'rgba(0, 0, 0, 0.5)'};
}
`

export const BottomTabTitle = styled.div`
/* color: ${props => props.active? '#111111' :'#ffffff'}; */
color: ${props => props.active? '#ffffff' :'rgba(0, 0, 0, 0.5)'};
font-weight: 500;
font-size: 10px;
line-height: 11px;
/* identical to box height */

`