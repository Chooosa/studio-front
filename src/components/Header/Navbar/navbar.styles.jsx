import { motion } from 'framer-motion';
import styled from 'styled-components';

export const NavbarContainer = styled.div`
   width: 100%;
   max-width: 1200px;
   height: 70px;
   padding-top: 20px;
   padding-bottom: 5px;
   margin: 0 20px;
   display: flex;
   justify-content: space-between;
   align-items: center;

   transition-duration: 0.7s;
   background-color: transparent;
   position: relative;
   z-index: 500;
`
//background-color: ${props => props.open ? '#020202' : 'transparent'};
export const ButtonsWrapper = styled.div`
   display: flex;
   /* justify-content: space-between; */
   /* width: 400px; */
   width: 100%;
   max-width: 520px;

   /* >button {
      :nth-of-type(2) {
      margin-right: 25px;
      }
   } */

`

export const LangToggleButton = styled.button`
   background-color: transparent;
   border-color: transparent;
   border-width: 0px;
   outline-width: 0px;
   margin-left: 20px;
   /* position: absolute; */
   /* right: 0; */

   font-weight: 600;
   font-size: 16px;
   line-height: 22px;

   :hover {
      cursor: pointer;
   }

   color: #F9F9F9;
   text-transform: uppercase;
`

export const CustomLink = styled.span`
   font-weight: 600;
   font-size: 16px;
   line-height: 22px;
   color: ${props => props.color ? props.color : '#F9F9F9'};
   margin-right: ${props => props.customMargin ? '40px' : '0'};

   opacity: 1;
   transition-duration: 0.2s;
   cursor: pointer;
   :hover {
      opacity: 0.8;
      transition-duration: 0.2s;
   }
`

export const DropdownMenuWrapper = styled.div`
   position: relative;
   z-index: 1;

   >button {
      z-index: 20;
   }
`

export const DropDownContainer = styled.div`
   display: ${props => props.none ? 'block' : 'none'};
   /* visibility: ${props => props.visible ? 'visible' : 'hidden'}; */
   position: absolute;
   width: 120px;
   margin-top: 20px;
   /* transition-duration: 0.2s; */
   z-index: ${props => props.visible ? '1' : '-1'};
   /* background-color: red; */
`

export const LinksCell = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   max-width: 120px;
   position: relative;
   z-index: 1;
`

export const Link = styled(motion.span)`
   width: max-content;
   line-break: strict;
   font-weight: 200;
   font-size: 14px;
   line-height: 19px;
   letter-spacing: 0.05em;
   color: #f9f9f9;
   margin-bottom: 16px;
   position: relative;
   /* z-index: -1; */
   cursor: pointer;

   ::before {
      content: "";
      position: absolute;
      height: 1px;
      width: 0;
      right: 0;
      bottom: -1px;
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
`