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
    padding: ${props => props.width > 600 ? '50px' : '0px'} 0px;
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
    min-height: 80px;
    ${props => props.open ? 'max-height: 900px' : `max-height: 0px`};
    transition: all .6s ease;
    padding: 10px 15px;
    border-bottom: 1px solid #2C2C2C;

    flex-direction: column;

    >span {
        overflow: hidden;
        margin-bottom: 20px;
    }

`

export const DropDownSectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;

    >h2 {
        margin: 0px;
    }
`