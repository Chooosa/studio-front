import styled from 'styled-components';

export const GuaranteesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const GuaranteesSections = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #111111;
    padding: 50px 0px;
`

export const GuaranteeSectionWrapper = styled.div`
    display: flex;
    padding: 30px 0px;    
    
    >div {
        display: flex;
        flex-direction: column;
        width: 50%;
        margin: 0px 30px;
        align-items: center;


        >h2 {
            margin-left: 30px;
            align-self: flex-start;
        }

        >svg {
            margin: 0px 0px;
            transition: 4s;
        }  
    }
`

export const ListTextWrapper = styled.div`
    >ul {
        padding: 15px;
    }
    
`

export const DropDownSectionDiv = styled.div`
    display: flex;
    ${props => props.open ? 'max-height: 300px' : `max-height: 0px`};
    height: 300px;
    transition: all .6s ease;
    padding: 0px 15px;

    >span {
        ${props => props.open ? 'max-height: 300px' : `max-height: 0px`};
        overflow: hidden;
        >p {
            display: flex;
        }
    }

`

export const DropDownSectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0px 15px;

    >h2 {
        margin: 0px;
    }
`