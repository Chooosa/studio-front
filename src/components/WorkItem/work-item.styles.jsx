import styled from 'styled-components';
import {motion} from 'framer-motion';

export const Container = styled.div`
width: 100%;
padding: 34px 20px 34px 20px;
display: flex;
flex-direction: column;
background: #111111;
margin-top: 100px;
margin-bottom: 20px;
@media(max-width: 600px) {
    margin-top: 50px;
}
`

export const Title = styled.h3`
font-weight: 500;
font-size: 24px;
line-height: 20px;

color: #F9F9F9;
`

export const TextContent = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
@media(max-width: 600px) {
    flex-direction: column;
}
`


export const TextSection = styled.p`
width: 47%;
font-weight: 200;
font-size: 14px;
line-height: 20px;
letter-spacing: 0.3px;
color: #F9F9F9;
@media(max-width: 600px) {
    width: 100%;
    margin-bottom: 10px;
}
`

export const SliderContainer = styled.div`
width: 100%;
margin-top: 60px;
@media(max-width: 600px) {
margin-top: 30px;
}
`


export const SlideImage = styled.img`
/* width: auto !important; */
padding: 0px 5px;
cursor: pointer;
`