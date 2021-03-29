import styled from 'styled-components';
import { CustomButton } from '../../styles/common';

export const CooperationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const Button = styled(CustomButton)`
    align-self: center;
    border-color: ${props => props.color};
    background-color: ${props => props.color};
    margin-bottom: 30px;
`