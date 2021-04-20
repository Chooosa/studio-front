import React, { useEffect, useState } from 'react';
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
    const [imageWidth, setImageWidth] = useState(345)
    const [imageHeight, setImageHeight] = useState(700)
    const [idCases, setCasesId] = useState([])
    const history = useHistory()

    useEffect(() => {
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
    }, [width, imageWidth, currentTab])

    useEffect(() => {
        if (width) {
            let appsImages = []
            let id = []
            if (currentTab === 0) {
                works.apps.map((app) => {
                    appsImages.push({ img: app.MainImageServices, logo: app.Logo })
                    id.push(app.id)
                    return appsImages
                })
            } else {
                works.websites.map((app) => {
                    appsImages.push({ img: app.MainImageServices, logo: app.Logo })
                    id.push(app.id)
                    return appsImages
                })
            }
            setCasesId(id)
            setContent(appsImages)
        }
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
                    content.length > 0 ? content.map((image, index) => {
                        return (
                            <div key={index}>
                                <SlideContainer
                                    style={{ width: imageWidth, height: imageHeight }}
                                    // onClick={() => handleNavigation(idCases[index])}
                                    onMouseDown={registerCallBack}
                                    onMouseMove={cancelCallback}
                                    onMouseUp={() => handleMouseUp(idCases[index])}
                                    key={index}
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