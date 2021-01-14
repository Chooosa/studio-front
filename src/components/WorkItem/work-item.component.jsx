import React, {useEffect, useState} from 'react';
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


const WorkItem = ({work}) => {
    const {width, height} = useWindowDimensions()
    const [fullscreenImage, setFullScreenImage] = useState(undefined)
    const [animating, setAnimating] = useState(false)

    const handleFullScreen = (e, w, h, currentWidth, index) => {
        if (!animating) {
            setAnimating(true)
            const fly = e.target
            let disLeft= fly.getBoundingClientRect().left;
            let disTop= fly.getBoundingClientRect().top;
            const flyCopy = fly.cloneNode(true)
            flyCopy.style =`z-index: 1111; width:${currentWidth}px; border-radius:20px; opacity:1; position:fixed; top:${disTop}px;left:${disLeft}px;transition: 1s cubic-bezier(1, 1, 1, 1)`;
            const el = document.body.appendChild(flyCopy);
            setTimeout(() => {
                flyCopy.style.left=`${(width-w)/2}px`;
                flyCopy.style.top= `${(height-h)/2}px`;
                flyCopy.style.width=`${w}px`;
            }, 300)
            flyCopy.addEventListener('transitionend', () => {
                setFullScreenImage({index, el})
                setAnimating(false)
            })
        }
    }

    useEffect(() => {
        if (fullscreenImage) {
            fullscreenImage.el.parentNode?.removeChild(fullscreenImage.el)
            // fullscreenImage.el.parentNode.removeChild(fullscreenImage.el)
        }
    }, [fullscreenImage])

    return (
        <Container>
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
            <SliderContainer>
                {
                    work.Gallery.length>1?
                    <Slider
                    variableWidth={true}
                    swipeToSlide={true}
                    initialSlide={0}
                    infinite={false}
                    rows={1}
                    >
                        {
                            work.Gallery.map((img, index) => {
                                
                                return (
                                    <SlideImage key={index} src={CMS_URL+img.url} alt='example' style={{width: width>600? img.width*0.8: width*0.7  }} onClick={(e) => handleFullScreen(e,img.width, img.height, width>600? img.width*0.8: width*0.7, index)}/>
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
                onClick={() => setFullScreenImage(undefined)}
                >
                    <div 
                    style={{
                        position: 'relative'
                    }}
                    >
                        <SlideImage  src={CMS_URL+work.Gallery[fullscreenImage.index].url} alt='example-fullscreen'/>
                    </div>
                </div>
                :null
            }
        </Container>
    )
}


export default WorkItem;