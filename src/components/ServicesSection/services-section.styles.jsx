import styled from 'styled-components';
import { CustomHeading } from '../../styles/common';


export const ServicesContainer = styled.section`
display: flex;
flex-direction: column;
width: 100%;
`


export const CardContainer = styled.div`
width: 100%;
flex-direction: row;
display: flex;
@media(max-width: 600px) {
    flex-direction: column;
}
cursor: default;
`


export const ServicesContent = styled.div`
width: 100%;
margin-bottom: 60px;
display: flex;
flex-direction: column;
@media(max-width: 1056px) {
    padding-left: 20px;
    padding-right: 20px;
}
`

export const ServicesHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center; 

`
export const Title = styled(CustomHeading)`
margin: 0;
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
max-width: 391px;
width: 100%;
text-align: left;
font-weight: 200;
`


