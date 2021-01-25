import styled from 'styled-components';
import { CustomButton } from '../../styles/common';
import { motion } from 'framer-motion';


export const FooterWrapper = styled.footer`
   width: 100%;
   height: 340px;
   background-color: #fff;
   display: flex;
   justify-content: center;
   padding-left: 5%;
   z-index: 0;
   background: linear-gradient(to right,#111 71%,rgba(17,17,17,0) 100%);
`

export const FooterContainer = styled.div`
   width: 100%;
   height: 100%;
   max-width: 956px;
   display: flex;
   align-items: center;
   position: relative;
   padding-right: 30px;
   /* z-index: 2; */
`

export const InfoWrapper = styled.div`
   display: flex;
   flex-direction: column;
   padding: 43px 0;
   width: 100%;
   height: 100%;
`

export const InfoContainerTop = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
`

export const InfoContainerBottom = styled.div`
   width: 100%;
   height: 40px;
   max-width: 480px;
   display: flex;
   align-items: ${props => props.customWidth > 1000 ? 'center' : 'flex-start'};
   justify-content: ${props => props.customWidth > 1000 ? 'space-between' : 'center'};
   flex-direction: ${props => props.customWidth > 1000 ? 'row' : 'column'};
   position: ${props => props.customWidth > 1000 ? 'static' : 'absolute'};
   top: 50%;
`

export const InfoContainerLeft = styled.div`
   width: 100%;
   max-width: 250px;

   z-index: 2;
`

export const InfoContainerRight = styled.div`
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

      @media (max-width: 765px) {
         transform: translateY(-40px);
      }
   }
   a:hover {
      transition-duration: 0.2s;
      opacity: 0.8;
   }
`

export const MapWrapper = styled.div`
   width: 100%;
   max-width: 610px;
   height: 100%;
   max-height: 340px;
   position: absolute;
   right: 0;
   overflow: hidden;
   /* z-index: -1; */
   >img {
      width: 100%;
      max-height: 340px;
   }
`

export const MapContainer = styled(motion.div)`
   width: 100%;
   height: 100%;
   position: absolute;
   top: 0;
   left: 0;

   display: flex;
   justify-content: flex-end;
   align-items: flex-end;

   background: linear-gradient(to right,#111 15%,rgba(17,17,17,0) 100%);
   z-index: 1;

   >svg {
      position: absolute;
      top: 43%;
      right: 35%;
      >g>path {
         fill: ${props => props.color};
      }
   }
`

export const MapButton = styled(CustomButton)`
   /* position: absolute; */
   margin: 0 60px 30px 0;
   border-color: #f9f9f9;
   background-color: #f9f9f9;
   color: #0a0a0a;
   :hover {
      opacity: 0.8;
   }
   @media(max-width: 612px) {
      margin: 0;
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



export const FooterWrapperMobile = styled.footer`
   display: flex;
   width: 100%;
   z-index: 0;
`

export const FooterContainerMobile = styled.div`
   display: flex;
   flex-direction: column;
   position: relative;
   min-height: 632px;
   max-height: 1000px;
   width: 100%;
   height: 100%;
`

export const MapWrapperMobile = styled.div`
   display: flex;
   width: 100%;
   height: 100%;
   position: relative;
   overflow: hidden;

   >img {
      width: 100%;
   }

   >svg {
      position: absolute;
      top: 58%;
      left: 37%;
      >g>path {
         fill: ${props => props.color};
      }
   }
`

export const SocialNetworksWrapperMobile = styled.div`
   position: absolute;
   top: 5%;
   left: 10%;
   height: 200px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`

export const MapButtonMobileContainer = styled.div`
   display: flex;
   position: absolute;
   bottom: 10%;
   align-items: center;
   justify-content: center;
   width: 100%;
`

export const MapButtonMobile = styled(CustomButton)`
   border-color: #f9f9f9;
   background-color: #f9f9f9;
   color: #0a0a0a;
   :hover {
      opacity: 0.8;
   }
   @media(max-width: 410px) {
      left: 0;
   }
`


export const Container = styled.div`
max-height: 1000px;
width:100%;
min-height: 632px;
display: flex;
   min-height: 632px;
    
   width: 100%;
   z-index: 2;
`