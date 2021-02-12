import styled from 'styled-components'
import { CustomButton } from '../../styles/common'

export const NotwFoundWrapper = styled.div`
   height: 100%;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   padding: 80px 0;
`

export const ImageWrapper = styled.div`
   position: relative;
   z-index: 1;

   >svg {
      position: relative;
      z-index: 50;
      >path:last-of-type {
         fill: ${props => props.color};
      }
   }
`

export const DescriptionWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
`

export const DescriptionLabel = styled.span`
   font-weight: ${props => props.color ? 'normal' : '600'};
   font-size: 16px;
   line-height: 27px;
   color: ${props => props.color ? props.color : '#F9F9F9'};
   text-align: center;
   margin-bottom: 20px;
`

export const CustomLink = styled(CustomButton)`
   border-color: ${props => props.color};
   background-color: ${props => props.color};
   margin-top: 4px;
`

export const GhostWrapper = styled.div`
   position: absolute;
   bottom: 53px;
   left: 156px;
   z-index: 10;
   overflow: hidden;
   width: 52px;
   height: 100px;
   animation: ${props => props.hover ? 'ghostHover 1.5s infinite' : 'none'};

   >svg {
      transform: translateX(${props => props.translate});
      transition-duration: 0.8s;

      position: absolute;
      bottom: 18px;
      left: -13px;
   }

   @keyframes ghostHover {
      0%   {
         transform: translateY(0);
      }
      50%  {
         transform: translateY(-3px);
      }
      100% {
         transform: translateY(0);
      }
   }
`

export const UfoWrapper = styled.div`
   position: absolute;
   top: 0;
   left: 60px;
   transition-duration: 1.5s;
   transform: translateX(${props => props.translate});

   animation: ${props => props.hover ? 'hover 1.5s infinite' : 'none'};

   >svg{
      >path:first-of-type {
         fill: ${props => props.color};
      }
   }

   @keyframes hover {
      0%   {
         transform: translateY(0);
      }
      50%  {
         transform: translateY(-5px);
      }
      100% {
         transform: translateY(0);
      }
   }
`

export const UfoGlowWrapper = styled.div`
   position: absolute;
   bottom: 26px;
   left: 50px;
   visibility: ${props => props.blink ? 'visible' : 'hidden'};
   transition-duration: 0.4s;

   >svg {
      >path {
         fill: ${props => props.color};
      }
   }
`