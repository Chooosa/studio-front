import styled from 'styled-components';
import { CustomButton, CustomHeading, CustomText } from '../../styles/common';

export const PlanWrapper = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   background-color: #111;

   height: 670px;
   margin-bottom: 10px;
`

export const Button = styled(CustomButton)`
   align-self: center;
   border-color: ${props => props.color};
   background-color: ${props => props.color};
`

export const PlanContainer = styled.div`
   /* height: 200px; */

`

export const LeftContainer = styled.div`
   display: flex;
   flex-direction: column;
`

export const RightContainer = styled.div`

`

export const Heading = styled(CustomHeading)`

`

export const Text = styled(CustomText)`

`