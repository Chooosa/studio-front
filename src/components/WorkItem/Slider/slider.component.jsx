import { useAnimation, useMotionValue, useSpring } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { ReactComponent as ArrowRight } from '../../../assets/right-arrow.svg';
import { ReactComponent as ArrowLeft } from '../../../assets/left-arrow.svg';



import {
    SliderContainer,
    ArrowContainer
} from './slider.styles';
import { useSelector } from 'react-redux';
import { colorSelectors } from '../../../redux/color/color.selectors';



const Slider = ({ children, width, screenWidth, slideWidth, slideCount }) => {
    const x = useMotionValue(0)
    const x2 = useSpring(0)
    const containerRef = useRef()
    const [dragConstraints, setDragConstraints] = useState(0)
    const color = useSelector(colorSelectors.color)
    const dragControl = useAnimation()


    useEffect(() => {
        if (containerRef.current) {
            const sliderWidth = containerRef.current.getBoundingClientRect().width

            setDragConstraints(width - sliderWidth)
        }
    }, [width])





    const NextArrow = () => {
        return <ArrowContainer onClick={() => {

            if (x.get() > -dragConstraints) {
                x.stop()
                var currentSlide = Math.round((Math.abs(x.get()) / slideWidth))
                var newLocation;


                if ((dragConstraints + x.get()) < slideWidth) {
                    newLocation = - dragConstraints
                } else {
                    newLocation = - (currentSlide + 1) * slideWidth
                }

                dragControl.start({ x: newLocation })

            }
        }} color={color} right={true}>
            <ArrowRight />
        </ArrowContainer>
    }

    const PrevArrow = () => {
        return <ArrowContainer onClick={() => {
            if (x.get() < 0) {
                var currentSlide = Math.round(Math.abs(x.get() / slideWidth))
                var newLocation;

                if (currentSlide === 0) {
                    newLocation = 0
                } else {
                    newLocation = - (currentSlide - 1) * slideWidth
                }
                x.stop()
                dragControl.start({ x: newLocation })
            }
        }} color={color} right={false}>
            <ArrowLeft />
        </ArrowContainer>
    }

    return (
        <div style={{ position: 'relative' }} onTouchMove={(e) => e.stopPropagation()}>
            {screenWidth > 600 ?
                <PrevArrow />
                : null
            }
            <div style={{ overflowX: 'hidden' }} ref={containerRef}>
                <SliderContainer
                    dragDirectionLock={true}
                    drag="x"
                    initial={{ x: 0 }}
                    style={{ x, }}
                    animate={dragControl}

                    dragConstraints={{
                        left: -dragConstraints,
                        right: 0
                    }}

                    dragTransition={{ bounceDamping: 10, bounceStiffness: 100 }}
                >
                    {children}
                </SliderContainer>
            </div>
            {screenWidth > 600 ?
                <NextArrow />
                : null
            }
        </div>
    )
}


export default Slider;