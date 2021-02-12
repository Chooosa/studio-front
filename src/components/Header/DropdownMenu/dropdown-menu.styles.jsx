import styled from 'styled-components';
import { ButtonsWrapper } from '../Navbar/navbar.styles';

export const DropdownMenuWrapper = styled.nav`
   display: flex;
   justify-content: center;
   padding-bottom: 20px;
   width: 100%;
   height: 200px;
   position: absolute;
   top: 70px;
   left: 0;
   border-bottom: 1px solid ${props => props.open ? props.color : 'transparent'};
   background-color: #0a0a0a;
   z-index: 499;

   overflow: hidden;
   transition: all .6s ease;
   ${props => props.open ? 'max-height: 300px;' : `max-height: 0px; padding: 0;`}
`

export const DropdownMenuContainer = styled.div`
   width: 100%;
   max-width: 1015px;
   height: max-content;
   min-height: 200px;
   display: flex;
   justify-content: space-between;
   margin: 0 20px;
`

export const WhiteSpace = styled.div`
   width: 100px;
`

export const LinksWrapper = styled(ButtonsWrapper)`
   padding-right: 65px;
`

export const LinksCell = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   max-width: 120px;

   :nth-of-type(2) {
      margin-right: 25px;
   }

   >a,span {
      font-weight: 200;
      font-size: 14px;
      line-height: 19px;
      letter-spacing: 0.05em;
      color: #f9f9f9;
      margin-bottom: 16px;
      position: relative;
      cursor: pointer;
      ::before {
         content: "";
         position: absolute;
         height: 4px;
         width: 0;
         right: 0;
         bottom: 2px;
         z-index: -1;
         opacity: 0;
         transition: all 0.4s ease;

         background-color: ${props => props.color ? props.color : '#3fb755'};
      }

      :hover::before {
         opacity: 1;
         width: 100%;
         transition: all 0.4s ease;
      }

      /* :focus::before {
         opacity: 1;
         width: calc(100% - 10px);
         transition: all 0.4s ease;
      } */
   }
`