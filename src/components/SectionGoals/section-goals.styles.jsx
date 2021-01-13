import styled from 'styled-components';
import { CustomButton, CustomHeading, CustomText } from '../../styles/common';

export const GoalsWrapper = styled.section`
   width: 100%;
   display: flex;
   flex-direction: column;
   margin-bottom: 180px;
`

export const Heading = styled(CustomHeading)`

`

export const Text = styled(CustomText)`

`

export const Button = styled(CustomButton)`
   align-self: center;
   /* margin-top: 50px; */

   border-color: ${props => props.color};
   background-color: ${props => props.color};
`