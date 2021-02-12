import styled from 'styled-components'
import { CustomButton, CustomHeading } from '../../styles/common'

export const ContactsWrapper = styled.div`

`

export const ContactsContainer = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 100px;
   height: max-content;

   @media(max-width: 960px) {
      flex-direction: column;
      align-items: flex-start;

      /* margin-left: 20px; */
      /* justify-content: cente */
   }
`

export const MapContainer = styled.div`
   margin-top: 40px;
   position: relative;
   /* align-self: center; */
   >img {
      width: 100%;
      /* max-width: 720px; */
   }
   >svg {
      position: absolute;
      left: 48%;
      top: 41%;

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
   margin-left: 40px;

   @media(max-width: 960px) {
      margin-left: 0;
      width: 100%;
   }
`

export const InfoContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;


   >span, a {
      width: max-content;
      margin-bottom: 14px;
      font-weight: 200;
      font-size: 14px;
      line-height: 19px;
      letter-spacing: .3px;
      color: #F9F9F9;

      z-index: 2;

      transition-duration: 0.2s;
      opacity: 1;
   }
   a:hover {
      transition-duration: 0.2s;
      opacity: 0.8;
   }

   @media(max-width: 960px) {
      margin-left: 20px;
   }
`

export const Heading = styled(CustomHeading)`
   margin-bottom: 24px;
   margin-top: 15;

   @media(max-width: 960px) {
      margin-left: 20px;
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