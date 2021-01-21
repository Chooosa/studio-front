import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 70px;
display: flex;
flex-direction: row;
justify-content: space-between;
padding-top: 20px;
padding-bottom: 5px;
margin: 0 20px;
background-color: #0A0A0A;
`

export const IconButton = styled.div`
width: 40px;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
-webkit-tap-highlight-color:transparent;
>svg >path {
    stroke: ${props => props.open? props.color: '#f9f9f9'}
}
`

export const LangToggleButton = styled.button`
background-color: transparent;
border-color: transparent;
border-width: 0px;
outline-width: 0px;
position: absolute;
right: 15%;
top: 50%;
opacity: ${props => props.open ? 1 : 0};
transition-duration: 0.6s;

:hover {
    cursor: ${props => props.open ? 'pointer' : 'regular'};
}

color: white;
text-transform: uppercase;
`


