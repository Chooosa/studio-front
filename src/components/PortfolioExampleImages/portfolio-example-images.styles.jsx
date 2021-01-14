import styled from 'styled-components';

export const PortfolioExampleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #111111;
    padding: 24px 20px;
`

export const TableWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    margin: 24px 0px 0px;
`

export const ItemWrapper = styled.img`
    display: flex;
    width: ${props => 100/props.columns - 1}%;
    height: 100%;
    margin: ${props => props.columns === 2 ? 10 : 5}px 0px;
`

export const TitleWrapper = styled.div`
    margin: 0px 0px 24px 0px;
`

export const AppTitle = styled.span`
    font-family: Manrope;
    font-style: normal;
    font-weight: 800;
    font-size: 28px;
    line-height: 38px;

    color: #F9F9F9;
`

export const DescriptionWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: column;
    ${props => props.device === 'computer' ? 'flex-direction: row' : 'flex-direction: column'}
`

export const AppDescription = styled.span`
    display: flex;
    color: #F9F9F9;
    font-family: Manrope;
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.05em;
    padding: 0px 5px;
`

export const AdditionalInfo = styled.span`
    display: flex;
    color: #F9F9F9;
    padding: 0px 5px;
    margin: ${props => props.device === 'computer' ? '12px 0% 0% 50%' : '12px 0% 0% 0%'};

    font-family: Manrope;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.05em;
`

export const TableWrapperMobile = styled.div`
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    margin-top: 35px;
`
export const ItemWrapperMobile = styled.img`
    display: inline-block;
    margin: 0px 5px
`