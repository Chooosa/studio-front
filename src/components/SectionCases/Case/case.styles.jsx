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
@media(max-width: 500px) {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 16px;
}
`

export const ContentDescription = styled.div`
font-size: 14px;
line-height: 20px;
letter-spacing: 0.3px;
color: #F9F9F9;
@media(max-width: 500px) {
    font-size: 14px;
    line-height: 18px;

}

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

z-index: 1;
overflow: hidden;

@media (min-width: 600px) {
    ::after {
        content: "";
        background-color: ${props => props.color};
        position: absolute;
        z-index: -1;
        padding: 0.85em 0.75em;
        display: block;

        left: -20%;
        right: -20%;
        top: 0;
        bottom: 0;
        transform: skewX(-45deg) scale(0, 1);
        transition: all 0.4s ease;
    }

    :hover {
        /* transition-duration: 0.4s; */
        transition: all 0.4s ease-out;
        ::after {
            transform: skewX(-45deg) scale(1, 1);
        }
        >img {
            transition-duration: 0.2s;
            transform: scale(1)
        }
    }
}

>img {
    transition-duration: 0.2s;
    transform: scale(0)
}

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