import styled from 'styled-components'

export const Container = styled.div`
   width: 100%;
   height: 350px;

   @media (max-width: 1240px){
      padding-left: 20px;
      padding-right: 20px;
      height: 450px;
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
   @media (max-width: 500px) {
      max-width:300px;
   }
`

export const ImageWrapper = styled.div`
   height: 320px;
   padding: 10px;
`