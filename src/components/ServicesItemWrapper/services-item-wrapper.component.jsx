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
import { useHistory } from 'react-router';


let callback;

const ServicesItemWrapper = ({ works, currentTab }) => {
    const [content, setContent] = useState([])
    const { width } = useWindowDimensions()
    const [countSlidesToShow, setCountSlidesToShow] = useState(4)
    const [imageWidth, setImageWidth] = useState(currentTab === 0 ?
        works.apps[0].Gallery[0].width :
        works.websites[0].Gallery[0].width) //currentTab === 0 ? works.websites : works.app
    const sliderRef = useRef()
    const [idCases, setCasesId] = useState([])
    const history = useHistory()


    useEffect(() => {
        if (width) {
            let appsImages = []
            let id = []
            if (currentTab === 0) {
                works.apps.map((app, i) => {
                    appsImages.push(app.Gallery.slice(0, countSlidesToShow))
                    id.push(app.id)
                })
                setImageWidth(works.apps[0].Gallery[0].width)
            } else {
                works.websites.map((app, i) => {
                    appsImages.push(app.Gallery.slice(0, 1))
                    id.push(app.id)
                })
                setImageWidth(works.websites[0].Gallery[0].width)
                setCountSlidesToShow(1)
            }
            setCasesId(id)
            setContent(appsImages)
        }
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
    }, [width, currentTab, countSlidesToShow, imageWidth])

    const handleNavigation = (id) => {
        if (currentTab === 0) {
            history.push(`/works/Application/${id}`)
        } else {
            history.push(`/works/Website/${id}`)
        }
    }

    const registerCallBack = () => {
        callback = true
    }

    const cancelCallback = (e) => {
        if (callback) {
            callback = false
        }
    }
    const handleMouseUp = (id) => {
        if (callback) {
            if (currentTab === 0) {
                history.push(`/works/Application/${id}`)
            } else {
                history.push(`/works/Website/${id}`)
            }
        }
    }

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
                                    <SlideContainer
                                        // onClick={() => handleNavigation(idCases[index])}
                                        onMouseDown={registerCallBack}
                                        onMouseMove={cancelCallback}
                                        onMouseUp={() => handleMouseUp(idCases[index])}
                                        key={index}
                                    >
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
                            return (
                                <SlideContainer
                                    // onClick={() => handleNavigation(idCases[index])}
                                    onMouseDown={registerCallBack}
                                    onMouseMove={cancelCallback}
                                    onMouseUp={(e) => handleMouseUp(idCases[index])}
                                    key={index}
                                >
                                    <SlideImageBig
                                        src={CMS_URL + images[0].url}

                                        alt='itemImage'
                                    />
                                </SlideContainer>

                            )
                        }
                    })
                }
            </Slider>
        </ComponentWrapper>
    )
}

export default ServicesItemWrapper;