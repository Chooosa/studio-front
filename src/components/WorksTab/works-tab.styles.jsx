import styled from 'styled-components';
import {motion} from 'framer-motion';

export const  TabContainer  = styled(motion.div)`
width: 100%;
display: flex;
flex-direction: column;
padding-top: 28px;
@media(max-width: 600px) {
    padding-top: 12px;
}
`

export const TabHeader = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
`

export const Description = styled.p`
width: 100%;
max-width: 394px;
font-weight: 200;
font-size: 14px;
line-height: 20px;
letter-spacing: 0.3px;
color: #F9F9F9;
@media(max-width: 600px) {
    max-width: initial;
}
`


export const NumberContainer = styled.div`
@media(max-width: 611px) {
    display: none;
}
`