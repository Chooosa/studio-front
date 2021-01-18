import styled from 'styled-components';
import {motion} from 'framer-motion';

export const  TabContainer  = styled(motion.div)`
width: 100%;
display: flex;
flex-direction: column;
padding-top: 100px;
margin-bottom: 100px;
@media(max-width: 600px) {
    padding: 12px 0px 0px 0px;
    margin-bottom: 60px;
}
`

export const TabHeader = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
`

export const Description = styled.div`
width: 100%;
max-width: 570px;
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