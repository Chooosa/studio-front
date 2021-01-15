import React, {useEffect, useState} from 'react';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { CMS_URL } from '../../config';
import { useWindowDimensions } from '../../hooks/dimensions';


import {
    Container,
    SliderContainer,
    TextContent,
    TextSection,
    Title,
    SlideImage
} from './work-item.styles';

let callback;

const WorkItem = ({work}) => {
    const {width, height} = useWindowDimensions()
    const [fullscreenImage, setFullScreenImage] = useState(undefined)
    const [animating, setAnimating] = useState(false)
    const {section, itemId} = useParams()
    const containerRef = useRef()



    useEffect(() => {
        
        if (section===work.Type&&itemId.toString()===work.id.toString()) {
            setTimeout(() => {
                if (localStorage.getItem('scroll')==='false') {
                    localStorage.setItem('scroll', 'true')
                    window.scrollTo({
                        behavior: 'smooth',
                        top: containerRef.current?.offsetTop-60
                    })
                } 
            }, 300)
        }
    }, [])

    const getImageDimension = (w, h) => {

        let left, top, hh, ww;
        if (w>width){
            ww=`${width*0.8}px`;
            const newHeight = width*0.8*h/w
            left=`${(width-width*0.8)/2}px`;
            top= `${(height-newHeight)/2}px`;
            hh=`${newHeight}px`;
        } else {
            left=`${(width-w)/2}px`;
            top= `${(height-h)/2}px`;
            ww=`${w}px`;
            hh=`${h}px`;
        }
        
        return {ww, hh, left, top}
    }


    const handleFullScreen = (e, w, h, currentWidth, index) => {
        if (!animating) {
            console.log('eve')
            setAnimating(true)
            const fly = e.target
            let disLeft= fly.getBoundingClientRect().left;
            let disTop= fly.getBoundingClientRect().top;
            const flyCopy = fly.cloneNode(true)
            flyCopy.style =`z-index: 1111; width:${currentWidth}px; border-radius:20px; opacity:1; position:fixed; top:${disTop}px;left:${disLeft}px;transition: 0.5s cubic-bezier(1, 1, 1, 1)`;
            const el = document.body.appendChild(flyCopy);
            setTimeout(() => {
                if(w > width) {
                    const newheight = width*0.8*h/w
                    flyCopy.style.left=`${(width-width*0.8)/2}px`;
                    flyCopy.style.top= `${(height-newheight)/2}px`;
                    flyCopy.style.width=`${width*0.8}px`;
                } else {
                    flyCopy.style.left=`${(width-w)/2}px`;
                    flyCopy.style.top= `${(height-h)/2}px`;
                    flyCopy.style.width=`${w}px`;
                }
            }, 300)
            flyCopy.addEventListener('transitionend', () => {
                setFullScreenImage({index, el})
                setAnimating(false)
            })
        }
    }

    const removeNode = () => {
        fullscreenImage.el.parentNode?.removeChild(fullscreenImage.el)
    }

    const getSliderHeight = () => {
        console.log(work.Gallery[0])
        if (work.Gallery.length>1) {
            return width>600? work.Gallery[0].height*0.8: width*0.7*work.Gallery[0].height/work.Gallery[0].width> work.Gallery[0].height*0.7?work.Gallery[0].height*0.7:width*0.7*work.Gallery[0].height/work.Gallery[0].width
        } else {
            return (width>996?956-40: width-80)*work.Gallery[0].height/work.Gallery[0].width
        }
    }

    const registerCallBack = (e, w, h, currentWidth, index) => {
        callback = setTimeout(() => {
            console.log(e)
            handleFullScreen(e, w, h, currentWidth, index)
        }, 50)
    }

    const cancelCallback = (e) => {
        if (callback) {
            clearTimeout(callback)
        }
    }


    return (
        <Container
        ref={containerRef}
        >
            <Title>
                {work.Title}
            </Title>
            <TextContent>
                <TextSection>
                    {work.FirstDescriptionBlock}
                </TextSection>
                <TextSection>
                    {work.SecondDescriptionBlock}
                </TextSection>
            </TextContent>
            <SliderContainer
            style={{
                height: `${getSliderHeight()}px`
            }}
            >
                {
                    work.Gallery.length>1?
                    <Slider
                    variableWidth={true}
                    swipeToSlide={true}
                    initialSlide={0}
                    infinite={false}
                    rows={1}
                    arrows={false}
                    >
                        {
                            work.Gallery.map((img, index) => {
                                
                                return (
                                    // onClick={(e) => handleFullScreen(e,img.width, img.height, width>600? img.width*0.8: width*0.7> img.width*0.7?img.width*0.7:width*0.7, index)}
                                    <SlideImage 
                                    key={index} 
                                    src={CMS_URL+img.url} 
                                    alt='example' 
                                    style={{width: width>600? img.width*0.8: width*0.7> img.width*0.7?img.width*0.7:width*0.7 }} 
                                    onMouseDown={(e) => registerCallBack(e,img.width, img.height, width>600? img.width*0.8: width*0.7> img.width*0.7?img.width*0.7:width*0.7, index)}
                                    onMouseMove={cancelCallback}
                                    />
                                )
                            })
                        }
                    </Slider>
                    : <img src={CMS_URL+work.Gallery[0].url} alt='example' style={{width: '100%'}}/>
                }
            </SliderContainer>
            {
                fullscreenImage?
                <div
                id='fullscreen'
                style={{
                    position: 'fixed',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    top: 0,
                    left: 0,
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    zIndex: 1110
                }}
                onClick={() => {
                    removeNode()
                    setFullScreenImage(undefined)
                }}
                >
                    <div 
                    style={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    >
                        <SlideImage  
                        src={CMS_URL+work.Gallery[fullscreenImage.index].url} 
                        alt='example-fullscreen' onLoad={removeNode} 
                        style={{
                            width: getImageDimension(work.Gallery[fullscreenImage.index].width, work.Gallery[fullscreenImage.index].height).ww,
                            position: 'absolute',
                            left:getImageDimension(work.Gallery[fullscreenImage.index].width, work.Gallery[fullscreenImage.index].height).left,
                            top: getImageDimension(work.Gallery[fullscreenImage.index].width, work.Gallery[fullscreenImage.index].height).top
                        }}
                        
                        />
                    </div>
                </div>
                :null
            }
        </Container>
    )
}


export default WorkItem;