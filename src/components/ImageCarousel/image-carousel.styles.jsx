import styled from 'styled-components'

export const Container = styled.div`
   width: 100%;
   height: 350px;

   @media (max-width: 1240px){
      padding-left: 20px;
      padding-right: 20px;
      /* height: 450px; */
   }

   .slick-dots li.slick-active button:before {
      opacity: 1;
      color: #F9F9F9;
   }
   .slick-dots li button:before {
      opacity: 1;
      color: rgba(196, 196, 196, 0.6);
      font-size: 8px;
   }
   .slick-slide {
      text-align: center;
   }
   .slick-dots {
      bottom: -35px;
   }
`

export const SlideImage = styled.img`
   padding: 0px 5px;
   width: 100%;
   max-width: 220px;
   max-height: 315px;
   @media (max-width: 500px) {
      max-width:300px;
      max-height: 435px;
   }
   transition-duration: 0.5s;
   opacity: 1;
`

export const SlideImageHidden = styled(SlideImage)`
position: absolute;
/* top: 0;
left: 0; */
opacity: 0;

`

export const ImageWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   > div {
      display: flex!important;
   }
   position: relative;
   /* >:hover {
      :nth-child(1) {
         opacity: 0;

      }
      :nth-child(2) {
         opacity: 1;

      }
   } */
`

export const SliderTextContainer = styled.section`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 6px 0;
background: linear-gradient(180deg, rgba(9, 9, 9, 0.16) 25%, #090909 95.83%);
width: calc(100% - 10px);
height: 58px;
position: absolute;
bottom: 0;
left: 5px;
`


export const SliderText = styled.span`
font-weight: 300;
font-size: 16px;
line-height: 20px;
/* identical to box height, or 125% */

text-align: center;
letter-spacing: 0.05em;

color: #F9F9F9;

`

export const SlideContainer = styled.div`
display: flex;
justify-content: center;
:focus {
   outline: none !important
}

`