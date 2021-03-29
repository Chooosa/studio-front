import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import Slider from 'react-slick';
import { CMS_URL } from '../../config';
import { useWindowDimensions } from '../../hooks/dimensions';


import {
    ComponentWrapper,
    SlideImage,
    SlideImageBig,
    SlideContainer
} from './services-item-wrapper.styles';

const ServicesItemWrapper = ({ works, currentTab }) => {
    const [content, setContent] = useState([])
    const { width } = useWindowDimensions()
    const [countSlidesToShow, setCountSlidesToShow] = useState(4)


    useEffect(() => {
        let appsImages = []
        if (currentTab === 0) {
            works.apps.map((app, i) => {
                appsImages.push(app.Gallery.slice(0, 4))
                // app.Gallery.slice(0, 4).map((img) => {
                //     appsImages.push(img)
                // })
            })
        } else {
            works.websites.map((app, i) => {
                appsImages.push(app.Gallery.slice(0, 1))
                // app.Gallery.slice(0, 1).map((img) => {
                //     appsImages.push(img)
                // })
            })
        }
        setContent(appsImages)
    }, [works, currentTab])

    return (
        <ComponentWrapper>
            <Slider
                dots={true}
                // variableWidth={true}
                swipeToSlide={true}
                initialSlide={0}
                infinite={false}
                rows={1}
                arrows={false}
                slidesToShow={1}
                focusOnSelect={false}
                slidesToScroll={1}
            >
                {
                    content.length > 0 && content.map((images, index) => {
                        if (currentTab === 0) {
                            return (
                                <div>
                                    <SlideContainer key={index}>
                                        {
                                            images.map((img, i) => {
                                                // console.log(img.url)
                                                return (
                                                    <SlideImage
                                                        src={CMS_URL + img.url}
                                                        key={i}
                                                        alt='itemImage'
                                                    />
                                                )
                                            })
                                        }
                                    </SlideContainer>
                                </div>

                            )
                        } else {
                            return (
                                <SlideImageBig
                                    src={CMS_URL + images[0].url}
                                    key={index}
                                    alt='itemImage'
                                />
                            )
                        }
                    })
                }
            </Slider>
        </ComponentWrapper>
    )
}

export default ServicesItemWrapper;