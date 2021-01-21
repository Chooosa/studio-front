import styled from 'styled-components';

export const ComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    margin: 70px 5px 0px 5px;
`

export const ItemTitle = styled.span`
    color: #F9F9F9;

    font-weight: 500;
    font-size: 24px;

    margin-bottom: 45px;
`

export const ItemImage = styled.div`
    display: flex;
    width: 100%;
    margin: 15px 0px;

    >img {
        height: 100%;
        width: 100%;
    }
`