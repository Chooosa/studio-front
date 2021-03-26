import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CustomButton } from '../../styles/common';

export const PageContainer = styled(motion.div)`
width:100%;
display: flex;
flex-direction: column;
-webkit-overflow-scrolling: auto;
@media(max-width: 1240px) {
    padding: 0px 20px 0px 20px;
}
`
export const PageHeader = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`

export const PageTitle = styled.h2`
margin: 0;
padding: 0;
font-weight: 300;
font-size: 24px;
line-height: 33px;
letter-spacing: 0.06em;
color: #F9F9F9;
margin-top: 80px;
margin-bottom: 48px;
@media(max-width: 612px) {
    margin-top: 50px;
}
`

export const Button = styled(CustomButton)`
    align-self: center;
    border-color: ${props => props.color};
    background-color: ${props => props.color};
    margin-top: 60px;
    margin-bottom: 30px;
`