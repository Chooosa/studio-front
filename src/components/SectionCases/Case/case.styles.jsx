import styled from 'styled-components';
import { CustomButton } from '../../../styles/common';


export const CaseContainer = styled.div`
display: flex;
flex-direction: row;
width: 100%;
background-color: #111111;
height:430px;
@media(max-width: 768px) {
    height: 360px;

}
@media(max-width: 600px) {
    flex-direction: column-reverse;
    height: auto;
}
`


export const ContentContainer = styled.div`
display: flex;
flex-direction: column;
min-width: 365px;
width: 365px;
justify-content: space-between;
@media(max-width: 768px) {
    min-width: 50%;
    width: 50%;
}
@media(max-width: 600px) {
    width: 100%;
    min-width: 100%;
}
`


export const ContentTitle = styled.h2`
margin: 0;
padding: 0;
margin-bottom: 24px;
font-size: 24px;
color: #F9F9F9;
line-height: 33px;
`

export const ContentDescription = styled.div`
font-size: 14px;
line-height: 20px;
letter-spacing: 0.3px;
color: #F9F9F9;

`
export const ContentBody = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
height: 100%;
padding: 0 33px 0 60px;
>div >ul {
    padding-inline-start: 0px;
}
@media(max-width: 600px) {
    width: 100%;
    padding:0 33px 0px 8%;
    height: 252px;
}
`

export const ActionButton = styled(CustomButton)`
border-color: ${props => props.color};
width: 100%;
max-width: 100%;
@media(max-width: 600px) {
    background-color: ${props => props.color};
}
`


export const PreviewImage = styled.div`
width: 100%;
height: 100%;
display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
> img {
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%
}
@media(max-width: 600px) {
    height: 320px;
}
`