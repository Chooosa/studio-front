import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';

import { Container, SlideImage, ImageWrapper } from './image-carousel.styles'
import { useWindowDimensions } from '../../hooks/dimensions';


const ImageCarousel = ({ imageArray, imageSmileArray }) => {
   const { width } = useWindowDimensions()
   const [countSlidesToShow, setCountSlidesToShow] = useState(5)
   const [smileImage, setSmileImage] = useState(null)
   

   const handleChangePhoto = (index) => {
      if (index || index === 0) {

         setSmileImage(index)
      } else {
         setSmileImage(null)
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
                     <div>
                        <ImageWrapper >
                           <SlideImage
                              src={index===smileImage? imageSmileArray[index]:  image}
                              key={index}
                              alt='team'
                              onMouseEnter={() => handleChangePhoto(index)}
                              onMouseLeave={() => handleChangePhoto()}
                           />
                           {/* <SlideImageHidden
                                                src={index===smileImage? imageSmileArray[index]:  image}
                                                key={index}
                                                alt='team'
                                                onMouseEnter={() => handleChangePhoto(index)}
                                                onMouseLeave={() => handleChangePhoto()}
                           /> */}
                        </ImageWrapper>
                     </div>
                  )
               })
            }
         </Slider>
      </Container>
   )
}

export default ImageCarousel