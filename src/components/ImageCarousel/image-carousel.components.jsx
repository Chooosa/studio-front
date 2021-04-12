import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';

import { Container, SlideImage, ImageWrapper, SliderText, SliderTextContainer, SlideContainer } from './image-carousel.styles'
import { useWindowDimensions } from '../../hooks/dimensions';
import { useTranslation } from '../../hooks/translation';
import { isMobile, isTablet } from 'react-device-detect';

const jobTitles = [
   "job_jenya",
   "job_designer",
   "job_full_stack",
   "job_front_developer",
   "job_manager",
   "job_front_developer"
]

const names = [
   "Lilekov_Evgeniy",
   "Anna_Kulikova",
   "Sergey_Yukhanov",
   "Olga_Salnikova",
   "Andrey_Eruh",
   "Kotler_Roman",
   // "Nasir_Imanov",
   // "Sergey_Luchinkin",
]




const ImageCarousel = ({ imageArray, imageSmileArray }) => {
   const { width } = useWindowDimensions()
   const [countSlidesToShow, setCountSlidesToShow] = useState(5)
   const [smileImage, setSmileImage] = useState(null)
   const { t } = useTranslation()

   const handleChangePhoto = (index) => {
      if (index || index === 0) {
         if (!isMobile && !isTablet) {

            setSmileImage(index)
         }
      } else {
         setSmileImage(null)
      }
   }

   const handleClick = (index) => {
      if (isMobile || isTablet) {
         if (smileImage === index) {
            setSmileImage(null)
         } else {
            setSmileImage(index)
         }
      }
   }



   useEffect(() => {
      let count
      if (width > 1240) {
         count = 5
      } else if (width > 940) {
         count = 4
      } else if (width > 700) {
         count = 3
      } else if (width > 500) {
         count = 2
      } else {
         count = 1
      }

      count = imageArray.length < count ? imageArray.length : count
      setCountSlidesToShow(count)
   }, [width, countSlidesToShow, imageArray])

   return (
      <Container>
         <Slider
            dots={true}
            // variableWidth={true}
            swipeToSlide={true}
            initialSlide={0}
            infinite={false}
            rows={1}
            arrows={false}
            slidesToShow={countSlidesToShow}
            focusOnSelect={false}
            slidesToScroll={1}
         >
            {
               imageArray.map((image, index) => {
                  return (
                     <SlideContainer >
                        <ImageWrapper >
                           <div style={{ width: 'max-content', position: 'relative' }}>
                              <SlideImage
                                 src={index === smileImage ? imageSmileArray[index] : image}
                                 key={index}
                                 alt='team'
                                 onMouseEnter={() => handleChangePhoto(index)}
                                 onMouseLeave={() => handleChangePhoto()}
                                 onClick={() => handleClick(index)}
                              >
                              </SlideImage>
                              <SliderTextContainer>
                                 <SliderText>
                                    {t(names[index])}
                                 </SliderText>
                                 <SliderText>
                                    {t(jobTitles[index])}
                                 </SliderText>
                              </SliderTextContainer>
                           </div>
                           {/* <SlideImageHidde          n
                                                src={index===smileImage? imageSmileArray[index]:  image}
                                                key={index}
                                                alt='team'
                                                onMouseEnter={() => handleChangePhoto(index)}
                                                onMouseLeave={() => handleChangePhoto()}
                           /> */}
                        </ImageWrapper>
                     </SlideContainer>
                  )
               })
            }
         </Slider>
      </Container>
   )
}

export default ImageCarousel