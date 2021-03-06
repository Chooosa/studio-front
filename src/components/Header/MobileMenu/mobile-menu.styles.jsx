import { motion } from 'framer-motion'
import styled from 'styled-components'


export const Container = styled(motion.div)`
position: fixed;
top: 70px;
left: 0;
display: flex;
width: 100%;
height: calc(100% - 70px);
display: flex;
flex-direction: column;
background-color: #0A0A0A;
z-index: 1200;
`

export const BodyItem = styled.span`
font-weight: ${props => props.active ? 500 : 200};
font-size: 16px;
line-height: 21px;
letter-spacing: 0.05em;
color: #F9F9F9;
margin-left: 10px;
margin-top: 12px;
>a {
    font-weight: ${props => props.active ? 500 : 200};
font-size: 16px;
line-height: 21px;
letter-spacing: 0.05em;
color: #F9F9F9;
}
cursor: pointer;
`


export const Divider = styled(motion.div)`
background-color: ${props => props.color};
width: 100%;
height: 2px;
margin-top: 20px;
`

export const CustomLink = styled.span`
    width: 100%;
    cursor: pointer;
    padding: 0 9%;
    /* margin-right: 12px; */
    margin-top: 23px;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: ${props => props.color ? props.color : '#F9F9F9'};
    >a {
        color: ${props => props.color ? props.color : '#F9F9F9'};
    }
`