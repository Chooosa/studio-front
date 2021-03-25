import styled from 'styled-components'
import { CustomButton, CustomHeading } from '../../styles/common'

export const ContactsWrapper = styled.div`
   display: flex;
   flex-direction: column;
`

export const ContactsContainer = styled.div`
   display: flex;
   align-items: flex-end;
   justify-content: space-between;
   margin-bottom: 100px;
   height: max-content;
   position: relative;

   @media(max-width: 600px) {
      margin-bottom: 10px;
   }

   /* @media(max-width: 960px) {
      flex-direction: column;
      align-items: flex-start;

      /* margin-left: 20px; */
      /* justify-content: cente */
   /* }  */
`

export const MapContainer = styled.div`
   /* margin-top: 40px; */
   position: absolute;
   right: 0;
   /* height: 100%;
   width: 100%; */

   /* background-image: url(${props => props.mapImg});
   background-repeat: no-repeat;
   background-position: bottom right; */

   >img {
      clip-path: url(#clipPath);
      position: relative;
      bottom: -5px;
      /* width: 100%; */
      /* object-fit: none; */
      /* max-width: 720px; */
   }
   >svg:first-of-type {
         * {
            transition-duration: 0.3s;
      }
   }
   >svg:last-of-type {
      position: absolute;
      right: 6.5%;
      top: 53%;

      >path {
         fill: #000;
      }

      * {
         fill: ${props => props.color};
      }
   }

   @media(max-width: 550px) {
      >svg {
         left: 46%;
         top: 37%;
      }
   }
   @media(max-width: 420px) {
      >svg {
         left: 45%;
         top: 35%;
      }
   }
   @media(max-width: 375px) {
      >svg {
         left: 43%;
         top: 33%;
      }
   }
`

export const InfoWrapper = styled.div`
   /* margin-left: 40px; */
   @media(max-width: 1240px) {
      margin-left: 20px;
   }

   @media(max-width: 960px) {
      margin-left: 0;
      width: 100%;
   }
`

export const InfoContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   padding-left: ${props => props.hoverImg ? '20px' : '0'};
   transition-duration: 1s;

   >span, a {
      width: max-content;
      margin-bottom: 35px;
      font-weight: 300;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: .05em;
      color: ${props => props.hoverImg ? '#fff' : '#F9F9F9'};

      z-index: 2;

      transition-duration: 0.2s;
      opacity: 1;
   }
   >span:last-of-type {
      cursor: pointer;

      :hover {
         transition-duration: 0.2s;
         opacity: 0.8;
      }
   }
   a:hover {
      transition-duration: 0.2s;
      opacity: 0.8;
   }

   @media(max-width: 960px) {
      margin-left: 20px;
   }
   @media(max-width: 768px) {
      >span, a {
         font-size: 14px;
      }
   }
   @media(max-width: 600px) {
      margin-left: 10px;
   }
`

export const Heading = styled(CustomHeading)`
   margin-bottom: 40px;
   /* margin-top: 15px; */

   @media(max-width: 960px) {
      margin-left: 20px;
   }
   @media(max-width: 600px) {
      margin-left: 10px;
   }
`

export const SocialNetworksWrapper = styled.div`
   width: 100%;
   /* height: 40px; */
   max-width: 480px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-direction: row;
   margin-top: 0;
   margin-bottom: 24px;

   @media(max-width: 960px) {
      margin-left: 20px;
   }

   @media(max-width: 450px) {
      flex-direction: column;
      align-items: flex-start;
      margin-top: 0;
      margin-bottom: 20px;
   }
`

export const SocialNetworks = styled.a`
   font-weight: 500;
   font-size: 16px;
   line-height: 22px;
   letter-spacing: .3px;
   color: #F9F9F9;
   display: flex;
   align-items: center;
   height: max-content;
   margin: 15px 0px;
   margin-right: 40px;

   z-index: 2;

   transition-duration: 0.2s;
      opacity: 1;

   >img {
      margin-right: 12px;
   }

   :hover {
      transition-duration: 0.2s;
      opacity: 0.6;
   }
`

export const MapButton = styled(CustomButton)`
   border-color: #f9f9f9;
   background-color: #f9f9f9;
   color: #0a0a0a;
   :hover {
      opacity: 0.8;
   }

   @media(max-width: 960px) {
      margin-left: 20px;
   }

   @media(max-width: 400px) {
      margin-left: 0;
   }
`

export const RequisitesButton = styled(CustomButton)`
   border-color: ${props => props.color};
   max-width: 305px;
   margin-bottom: 5px;
   align-self: center;
   z-index: 1;
   overflow: hidden;

   ${props => props.hoverImg ? 'transition: all 1s ease-out;' : ''}

   ::after {
      content: "";
      background-color: ${props => props.color};
      position: absolute;
      z-index: -1;
      padding: 0.85em 0.75em;
      display: block;

      left: -20%;
      right: -20%;
      top: 0;
      bottom: 0;
      transform: skewX(-45deg) scale(${props => props.hoverImg ? '1' : '0'}, 1);
      transition: all 1s ease;
   }

   /* :hover {
      transition: all 0.4s ease-out;
      ::after {
         transform: skewX(-45deg) scale(1, 1);
      }
   } */
`

export const Button = styled(CustomButton)`
   /* width: calc(100% - 20px); */
   max-width: 305px;
   margin-top: 15px;
   /* margin-right: 20px; */
   /* margin-top: 50px; */

   border-color: ${props => props.color};
   background-color: ${props => props.color};
`