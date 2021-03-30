import React, { useEffect, useRef, useState } from 'react';
import { Fragment } from 'react';
import Slider from 'react-slick';
import { CMS_URL } from '../../config';
import { useWindowDimensions } from '../../hooks/dimensions';


import {
    ComponentWrapper,
    SlideImage,
    SlideImageBig,
    SlideContainer,
    ArrowContainer
} from './services-item-wrapper.styles';
import { ReactComponent as ArrowRight } from '../../assets/right-arrow.svg';
import { ReactComponent as ArrowLeft } from '../../assets/left-arrow.svg';

const ServicesItemWrapper = ({ works, currentTab }) => {
    const [content, setContent] = useState([])
    const { width } = useWindowDimensions()
    const [countSlidesToShow, setCountSlidesToShow] = useState(4)
    const [imageWidth, setImageWidth] = useState(0)
    const sliderRef = useRef()


    useEffect(() => {
        let appsImages = []
        if (currentTab === 0) {
            works.apps.map((app, i) => {
                appsImages.push(app.Gallery.slice(0, countSlidesToShow))
            })
            setImageWidth(appsImages[0][0].width)
        } else {
            works.websites.map((app, i) => {
                appsImages.push(app.Gallery.slice(0, 1))
            })
            setImageWidth(appsImages[0][0].width)
            setCountSlidesToShow(1)
        }
        setContent(appsImages)
    }, [works, currentTab, countSlidesToShow])

    useEffect(() => {
        if (currentTab === 0) {
            if (width > 1240) {
                setCountSlidesToShow(4)
            } else {
                const padding = width > 612 ? 80 : 40
                let count = Math.floor((width - padding) / imageWidth)
                count = count > 4 ? 4 : count < 1 ? 1 : count
                setCountSlidesToShow(count)
            }
        }
    }, [width, currentTab, countSlidesToShow])



    const NextArrow = () => {
        return <ArrowContainer onClick={() => sliderRef.current.slickNext()} right={true}>
            <ArrowRight />
        </ArrowContainer>
    }

    const PrevArrow = () => {
        return <ArrowContainer onClick={() => sliderRef.current.slickPrev()} right={false}>
            <ArrowLeft />
        </ArrowContainer>
    }

    return (
        <ComponentWrapper
            // sliderWidth={imageWidth * countSlidesToShow}
            sliderWidth={currentTab === 0 ? imageWidth * countSlidesToShow : 0}
        >
            <Slider
                ref={sliderRef}
                dots={true}
                swipeToSlide={true}
                initialSlide={0}
                infinite={false}
                rows={1}
                arrows={false}
                slidesToShow={1}
                focusOnSelect={false}
                slidesToScroll={1}
                arrows={width > 612 ? true : false}
                nextArrow={<NextArrow />}
                prevArrow={<PrevArrow />}
            >
                {
                    content.length > 0 && content.map((images, index) => {
                        if (currentTab === 0) {
                            return (
                                <div>
                                    <SlideContainer key={index}>
                                        {
                                            images.map((img, i) => {
                                                // setImageWidth(img.width)
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
                            // console.log('name: ', images[0].name, ', width: ', images[0].width)
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