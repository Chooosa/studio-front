import styled from 'styled-components';
import {motion} from 'framer-motion';

export const TabsHeaderOuterContainer = styled.div`
display: flex;
flex-direction: column;
width:100%;
`


export const TabsHeader = styled.div`
display: flex;
justify-content: flex-start;
width: 100%;
`

export const TabHeader = styled(motion.span)`
font-size: 32px;
color: ${props => props.active? props.color: '#F9F9F9'};
line-height: 44px;
margin-right: 8%;
/* font-weight: bold;
font-family: initial; */
cursor: pointer;
display: flex;

@media(max-width: 895px) {
    margin-right:6%;
    &:last-child {
        margin-right:0;
    }
}
@media(max-width: 780px) {
    margin-right:5%;
    font-size: 28px;
}
@media(max-width: 675px) {
    margin-right:3.5%;
    font-size: 26px;
}
`


export const AnimatedLine = styled(motion.div)`
background-color: ${props => props.color};
height: 4px;
width: 0;
`


export const TabBodyContainer = styled.div`
width: 100%;
`