import styled from 'styled-components';
import {motion} from 'framer-motion';

export const CardContainer = styled(motion.div)`
flex: 1 1 100%;
background-color: #111111;
border: ${props => props.noBorder? 'none': '1px solid #1C1C1C'};
position: relative;
height: 317px;
display: flex;
flex-direction: column;
justify-content: space-between;
@media(max-width: 600px) {
    height: auto;
}
`


export const CardInnerContainer = styled.div`
border: 1px solid #1C1C1C;
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100%;
&:hover {
    border-color: ${props => props.color}
}
`

export const CardBody = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 8%;
flex: 1 1 100%;
@media(max-width: 600px) {
    padding-top: 50px;
    padding-bottom: 50px;
    min-height: 164px;
}
`





export const Title = styled(motion.span)`
font-size: 24px;
line-height: 32px;
color: #F9F9F9;
max-width: 12ch;
`

export const Description = styled(motion.span)`
margin-top: 12px;
font-size: 14px;
color: #F9F9F9;
line-height: 20px;
letter-spacing: .3px;
@media(max-width: 600px) {
    padding: 8%;
    margin-top: 0;
    padding-top: 0;
}
`


export const Button = styled(motion.button)`
    position: relative;
   outline: none;
   box-shadow: none;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 10px;
   width: 100%;
   min-height: 60px;
   border: ${props => `1px solid ${props.color}`};
   border-radius: 2px;
   background-color:  ${props => props.color};
   cursor: pointer;
   transition-duration: 0.2s;
   opacity: 1;

   font-weight: 500;
   font-size: 14px;
   line-height: 19px;
   color: #fefefe;
   >div >svg {
       transition-duration: 0.3s;
   }
   &:hover {
       >div >svg {
           transform: scale(1.2);
       }
   }
`

export const Icon = styled.div`
position: absolute;
right: 20px;
`


export const CardHeader = styled(motion.div)`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
outline: none;
`

export const CardIcon = styled(motion.div)`
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
transition-duration: 0.3s;
-webkit-tap-highlight-color:transparent;
&:hover {
    transform: scale(1.1);
}
`

export const CardOverlay = styled(motion.div)`
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
`