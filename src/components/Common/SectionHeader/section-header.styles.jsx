import styled from 'styled-components';
import { CustomHeading } from '../../../styles/common';



export const Content = styled.div`
width: 100%;
margin-bottom: 60px;
display: flex;
flex-direction: column;
@media(max-width: 1056px) {
    padding-left: ${props => props.padding ? props.padding : '20px'};
    padding-right: ${props => props.padding ? props.padding : '20px'};
}
`

export const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`
export const Title = styled(CustomHeading)`
    margin: 0;
    /* text-transform: capitalize; */
    @media (max-width: 700px) {
        font-size: 36px;
        line-height: 44px;
    }
    @media (max-width: 600px) {
        font-size: 32px;
        line-height: 40px;
    }
    @media (max-width: 500px) {
        font-size: 26px;
        line-height: 34px;
    }
    @media (max-width: 430px) {
        font-size: 24px;
        line-height: 30px;
        letter-spacing: 0;
    }
    @media (max-width: 400px) {
        font-size: 22px;
        line-height: 28px;
        margin-right: 5px;
    }
    @media (max-width: 370px) {
        font-size: 20px;
        line-height: 26px;
    }
`

export const DescriptionContainer = styled.div`
width: 100%;
display: flex;
justify-content: flex-start;
`

export const Description = styled.p`
margin: 12px 0px;
font-size: 14px;
color: #F9F9F9;
letter-spacing: 0.3px;
line-height: 20px;
max-width: ${props => props.width ? props.width : '391px'};
width: 100%;
text-align: left;
font-weight: 200;
`