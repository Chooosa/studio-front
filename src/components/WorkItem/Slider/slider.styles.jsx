import { motion } from 'framer-motion';
import styled from 'styled-components';



export const SliderContainer = styled(motion.div)`
display: flex;
flex-wrap: no-wrap;
`


export const ArrowContainer = styled.div`
position: absolute;
top: calc(50% - 20px);
${props => !props.right ? 'left: -50px;' : 'right: -55px;'}
z-index: 1;
width: 40px;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
/* background-color: ${props => props.color}; */
cursor: pointer;
`