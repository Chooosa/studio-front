import React, { useEffect, useRef, useState } from 'react';
import { CMS_URL } from '../../config';
import { useWindowDimensions } from '../../hooks/dimensions';


import {
    ComponentWrapper,
    SlideImage,
    SlideContainer,
    SlideOverlay
} from './services-item-wrapper.styles';
import { useHistory } from 'react-router';
import Slider from './Slider/slider.component'


let callback;

const ServicesItemWrapper = ({ works, currentTab }) => {
    const [content, setContent] = useState([])
    const { width } = useWindowDimensions()
    const [countSlidesToShow, setCountSlidesToShow] = useState(4)
    // const [imageWidth, setImageWidth] = useState(currentTab === 0 ?
    //     345 : 1124)
    // const [imageHeight, setImageHeight] = useState(currentTab === 0 ?
    //     700 : 676)
    const [imageWidth, setImageWidth] = useState(345)
    const [imageHeight, setImageHeight] = useState(700)
    const sliderRef = useRef()
    const [idCases, setCasesId] = useState([])
    const history = useHistory()

    useEffect(() => {
        // if (currentTab === 0) {
        if (width > 1070) {
            setImageWidth(345)
            setImageHeight(700)
        } else if (width > 380) {
            setImageWidth(300)
            setImageHeight(600)
        } else {
            setImageWidth(250)
            setImageHeight(400)
        }
        // } else {
        //     if (width > 1245) {
        //         setImageWidth(1124)
        //         setImageHeight(676)
        //     } else if (width > 920) {
        //         setImageWidth(800)
        //         setImageHeight(500)
        //     } else if (width > 720) {
        //         setImageWidth(600)
        //         setImageHeight(400)
        //     } else if (width > 490) {
        //         setImageWidth(400)
        //         setImageHeight(300)
        //     } else if (width > 420) {
        //         setImageWidth(350)
        //         setImageHeight(225)
        //     } else if (width > 365) {
        //         setImageWidth(300)
        //         setImageHeight(200)
        //     } else if (width > 300) {
        //         setImageWidth(250)
        //         setImageHeight(150)
        //     }
        // }
    }, [width, imageWidth, currentTab])

    useEffect(() => {
        if (width) {
            let appsImages = []
            let id = []
            if (currentTab === 0) {
                works.apps.map((app, i) => {
                    // appsImages.push(app.MainImageServices)
                    appsImages.push({ img: app.MainImageServices, logo: app.Logo })
                    id.push(app.id)
                })
                console.log('111', appsImages)
                // setImageWidth(works.apps[0].Gallery[0].width)
            } else {
                works.websites.map((app, i) => {
                    // appsImages.push(app.Gallery.slice(0, 1))
                    // appsImages.push({ img: app.Gallery.slice(0, 1), logo: app.Logo })
                    appsImages.push({ img: app.MainImageServices, logo: app.Logo })
                    id.push(app.id)
                })
                // setImageWidth(works.websites[0].Gallery[0].width)
                // setCountSlidesToShow(1)
            }
            setCasesId(id)
            setContent(appsImages)
        }
        console.log('currentTab', currentTab)
    }, [works, currentTab, width])

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

    return (
        <ComponentWrapper>
            <Slider
                width={(imageWidth * content.length) + (16 * content.length)}
                screenWidth={width}
                slideWidth={imageWidth}
                slideCount={content.length}
            >
                {
                    console.log('width: ', imageWidth * content.length, ' screenWidth: ', width, ' slideWidth: ', imageWidth, ' slideCount: ', content.length)
                    // console.log('content.length: ', content.length)
                }
                {
                    content.length > 0 ? content.map((image, index) => {
                        return (
                            <div>
                                <SlideContainer
                                    style={{ width: imageWidth, height: imageHeight }}
                                    // onClick={() => handleNavigation(idCases[index])}
                                    onMouseDown={registerCallBack}
                                    onMouseMove={cancelCallback}
                                    onMouseUp={() => handleMouseUp(idCases[index])}
                                    key={index}
                                    countSlide={countSlidesToShow === 1 && currentTab !== 1}
                                >
                                    <SlideOverlay
                                        translate={imageWidth}
                                        apps={currentTab === 0}
                                        imgWidth={width < 400 && currentTab === 1 ? image.logo?.width * 0.45 : width < 600 ? image.logo?.width * 0.6 : currentTab === 1 ? image.logo?.width * 0.7 : image.logo?.width}
                                    >
                                        <img draggable={false} src={CMS_URL + image.logo?.url} alt='logo' />
                                        <img draggable={false} src={CMS_URL + image.logo?.url} alt='logo' />
                                    </SlideOverlay>
                                    <SlideImage
                                        id='slide'
                                        apps={currentTab === 0}
                                        // src={currentTab === 0 ? CMS_URL + image.img?.url : CMS_URL + image.img[0]?.url}
                                        src={CMS_URL + image.img?.url}
                                        key={index}
                                        alt='itemImage'
                                        draggable={false}
                                    />
                                </SlideContainer>
                            </div>
                        )
                    })
                        : null
                }
            </Slider>
        </ComponentWrapper>
    )
}

export default ServicesItemWrapper;