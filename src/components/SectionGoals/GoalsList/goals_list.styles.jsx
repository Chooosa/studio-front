import styled from 'styled-components';



export const ListContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
margin-bottom: 7px;
margin-top: 40px;
`


export const Goal = styled.p`
padding: 0;
margin: 10px 0px 10px 0px;
font-family: Manrope;
font-style: normal;
font-weight: 200;
font-size: 14px;
line-height: 20px;
/* or 125% */

letter-spacing: 0.05em;

color: #F9F9F9;
>svg {
    margin-right: 14px;
    >circle {
        stroke: ${props => props.color}
    }
}

@media (max-width: 550px) {
    font-size: 13px;
    line-height: 17px;
}
@media (max-width: 420px) {
    font-size: 12px;
    line-height: 15px;
}


`


export const Description = styled.span`
font-family: Manrope;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 22px;
letter-spacing: 0.05em;

color: #F9F9F9;
max-width: 110ch;
margin-top: 5px;
@media (max-width: 550px) {
    font-size: 14px;
    line-height: 18px;
}
@media (max-width: 420px) {
    font-size: 12px;
    line-height: 16px;
}
`