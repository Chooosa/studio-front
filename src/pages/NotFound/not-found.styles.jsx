import styled from 'styled-components'

export const NotwFoundWrapper = styled.div`
   height: 100%;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   /* flex-direction */
`

export const Numbers = styled.span`
   font-weight: bold;
   font-size: 180px;
   color: ${props => props.color};
`