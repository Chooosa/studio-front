import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TabContainer = styled(motion.div)`
width: 100%;
display: flex;
flex-direction: column;
padding-top: 28px;
margin-bottom: 145px;
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

export const DescriptionWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const DescriptionContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: ${props => props.justify ? 'space-evenly' : 'space-between'};
    border-top: 2px solid transparent;
    border-color: ${props => props.justify ? props.color : 'transparent'};
    transition-duration: 0.5s;

    @media(min-width: 1120px) {
        >div {
            padding: ${props => props.justify ? '30px 10px 0 10px' : '0 10px 30px 10px'};
        }
    }

    @media(max-width: 1120px) {
        align-items: center;
        flex-direction: column;
        border: none;

        /* transform: translateX(-100px); */
    }
`

export const DescriptionText = styled.div`
    width: 100%;
    max-width: 345px;
    color: #F9F9F9;
    padding: 0 10px;
    transition-duration: 0.5s;
    position: relative;
    h4 {
        margin-top: 0;
    }

    @media(max-width: 1120px) {
        padding: 30px 10px;
    }
    @media(min-width: 1120px) {
        transform: translateX(0)!important;
    }
`

export const Separator = styled.div`
    width: 2px;
    padding: 0!important;
    background-color: ${props => props.color};
    transition-duration: 0.5s;

    @media(max-width: 1120px) {
        display: none;
    }
`

export const SeparatorMin = styled.div`
    width: 100px;
    height: 2px;
    padding: 0!important;
    background-color: ${props => props.color};
    transition-duration: 0.5s;
    display: none;
    @media(min-width: 1120px) {
        display: none;
    }
`

export const CardsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const CardsContainer = styled.div`
    width: 100%;
    display: flex;

    @media(max-width: 600px) {
        flex-direction: column;
    }
`