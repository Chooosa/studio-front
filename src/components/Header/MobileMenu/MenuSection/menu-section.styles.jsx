import { motion } from 'framer-motion';
import styled from 'styled-components';


export const MenuItemContainer = styled(motion.div)`
display: flex;
flex-direction: column;
padding: 0 9%;
`

export const MenuItemHeader = styled.div`
display: flex;
flex-direction: row;
cursor: pointer;
margin-right: 12px;
margin-top: 23px;
align-items: center;
>svg {
    transition-duration: 0.3s;
    transform: ${props => props.open? 'rotateZ(90deg)': 'rotateZ(0deg)'};
    >path {
        stroke: ${props => props.color? props.color: '#F9F9F9'};

    }
}
`

export const HeaderText = styled.span`
font-weight: 600;
font-size: 20px;
line-height: 28px;
color: ${props => props.color? props.color: '#F9F9F9'};
`

export const MenuItemBody = styled.div`
display: flex;
flex-direction: column;
transition-duration: 0.6s;
overflow: hidden;
${props => props.open ? 'max-height: 200px;' : `max-height: 0px; padding: 0;`};
`

