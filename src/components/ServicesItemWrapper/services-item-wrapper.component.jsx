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
                                        countSlide={countSlidesToShow === 1 && currentTab !== 1}
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
                                    countSlide={countSlidesToShow === 1 && currentTab !== 1}
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




// import React, { useEffect, useRef, useState } from 'react';
// import { Fragment } from 'react';
// // import Slider from 'react-slick';
// import { CMS_URL } from '../../config';
// import { useWindowDimensions } from '../../hooks/dimensions';


// import {
//     ComponentWrapper,
//     SlideImage,
//     SlideImageBig,
//     SlideContainer,
//     ArrowContainer
// } from './services-item-wrapper.styles';
// import { ReactComponent as ArrowRight } from '../../assets/right-arrow.svg';
// import { ReactComponent as ArrowLeft } from '../../assets/left-arrow.svg';
// import { useHistory } from 'react-router';
// import Slider from './Slider/slider.component'


// let callback;

// const ServicesItemWrapper = ({ works, currentTab }) => {
//     const [content, setContent] = useState([])
//     const { width } = useWindowDimensions()
//     const [countSlidesToShow, setCountSlidesToShow] = useState(4)
//     const [imageWidth, setImageWidth] = useState(currentTab === 0 ?
//         345 : 1124)
//     const [imageHeight, setImageHeight] = useState(currentTab === 0 ?
//         700 : 676)
//     const sliderRef = useRef()
//     const [idCases, setCasesId] = useState([])
//     const history = useHistory()

//     useEffect(() => {
//         if (currentTab === 0) {
//             setImageWidth(345)
//         } else {
//             setImageWidth(1124)
//         }
//     }, [width, imageWidth, currentTab])

//     useEffect(() => {
//         if (width) {
//             let appsImages = []
//             let id = []
//             if (currentTab === 0) {
//                 works.apps.map((app, i) => {
//                     appsImages.push(app.MainImage)
//                     id.push(app.id)
//                 })
//                 console.log('111', appsImages)
//                 // setImageWidth(works.apps[0].Gallery[0].width)
//             } else {
//                 works.websites.map((app, i) => {
//                     appsImages.push(app.Gallery.slice(0, 1))
//                     id.push(app.id)
//                 })
//                 // setImageWidth(works.websites[0].Gallery[0].width)
//                 setCountSlidesToShow(1)
//             }
//             setCasesId(id)
//             setContent(appsImages)
//         }
//         console.log(currentTab)
//     }, [works, currentTab])

//     // useEffect(() => {
//     //     if (currentTab === 0) {
//     //         if (width > 1240) {
//     //             setCountSlidesToShow(4)
//     //         } else {
//     //             const padding = width > 612 ? 80 : 40
//     //             let count = Math.floor((width - padding) / imageWidth)
//     //             count = count > 4 ? 4 : count < 1 ? 1 : count
//     //             setCountSlidesToShow(count)
//     //         }
//     //     }
//     // }, [width, currentTab, countSlidesToShow, imageWidth])

//     // console.log(works.apps[0].MainImage)

//     // const handleNavigation = (id) => {
//     //     if (currentTab === 0) {
//     //         history.push(`/works/Application/${id}`)
//     //     } else {
//     //         history.push(`/works/Website/${id}`)
//     //     }
//     // }

//     const registerCallBack = () => {
//         callback = true
//     }

//     const cancelCallback = (e) => {
//         if (callback) {
//             callback = false
//         }
//     }
//     const handleMouseUp = (id) => {
//         if (callback) {
//             if (currentTab === 0) {
//                 history.push(`/works/Application/${id}`)
//             } else {
//                 history.push(`/works/Website/${id}`)
//             }
//         }
//     }

//     // const NextArrow = () => {
//     //     return <ArrowContainer onClick={() => sliderRef.current.slickNext()} right={true}>
//     //         <ArrowRight />
//     //     </ArrowContainer>
//     // }

//     // const PrevArrow = () => {
//     //     return <ArrowContainer onClick={() => sliderRef.current.slickPrev()} right={false}>
//     //         <ArrowLeft />
//     //     </ArrowContainer>
//     // }

//     return (
//         <ComponentWrapper
//         // sliderWidth={imageWidth * countSlidesToShow}
//         // sliderWidth={currentTab === 0 ? imageWidth * countSlidesToShow : 0}
//         >
//             <Slider
//                 width={imageWidth * content.length}
//                 screenWidth={width}
//                 slideWidth={imageWidth}
//                 slideCount={content.length}
//             >
//                 {
//                     console.log('width: ', imageWidth * content.length, ' screenWidth: ', width, ' slideWidth: ', imageWidth, ' slideCount: ', content.length)
//                 }
//                 {
//                     content.length > 0 && content.map((image, index) => {
//                         return (
//                             <div>
//                                 <SlideContainer
//                                     // onClick={() => handleNavigation(idCases[index])}
//                                     onMouseDown={registerCallBack}
//                                     onMouseMove={cancelCallback}
//                                     onMouseUp={() => handleMouseUp(idCases[index])}
//                                     key={index}
//                                     countSlide={countSlidesToShow === 1 && currentTab !== 1}
//                                 >
//                                     <SlideImage
//                                         src={currentTab === 0 ? CMS_URL + image?.url : CMS_URL + image[0]?.url}
//                                         key={index}
//                                         alt='itemImage'
//                                     />
//                                 </SlideContainer>
//                             </div>
//                         )
//                     })
//                 }
//             </Slider>


//             {/* <Slider
//                 ref={sliderRef}
//                 dots={true}
//                 swipeToSlide={true}
//                 initialSlide={0}
//                 infinite={false}
//                 rows={1}
//                 arrows={false}
//                 slidesToShow={1}
//                 focusOnSelect={false}
//                 slidesToScroll={1}
//                 arrows={false}
//                 nextArrow={<NextArrow />}
//                 prevArrow={<PrevArrow />}
//             >
//                 {
//                     content.length > 0 && content.map((images, index) => {
//                         if (currentTab === 0) {
//                             return (
//                                 <div>
//                                     <SlideContainer
//                                         // onClick={() => handleNavigation(idCases[index])}
//                                         onMouseDown={registerCallBack}
//                                         onMouseMove={cancelCallback}
//                                         onMouseUp={() => handleMouseUp(idCases[index])}
//                                         key={index}
//                                         countSlide={countSlidesToShow === 1 && currentTab !== 1}
//                                     >
//                                         {
//                                             images.map((img, i) => {
//                                                 // setImageWidth(img.width)
//                                                 return (
//                                                     <SlideImage
//                                                         src={CMS_URL + img.url}
//                                                         key={i}
//                                                         alt='itemImage'
//                                                     />
//                                                 )
//                                             })
//                                         }
//                                     </SlideContainer>
//                                 </div>

//                             )
//                         } else {
//                             return (
//                                 <SlideContainer
//                                     // onClick={() => handleNavigation(idCases[index])}
//                                     onMouseDown={registerCallBack}
//                                     onMouseMove={cancelCallback}
//                                     onMouseUp={(e) => handleMouseUp(idCases[index])}
//                                     key={index}
//                                     countSlide={countSlidesToShow === 1 && currentTab !== 1}
//                                 >
//                                     <SlideImageBig
//                                         src={CMS_URL + images[0].url}

//                                         alt='itemImage'
//                                     />
//                                 </SlideContainer>

//                             )
//                         }
//                     })
//                 }
//             </Slider> */}
//         </ComponentWrapper>
//     )
// }

// export default ServicesItemWrapper;