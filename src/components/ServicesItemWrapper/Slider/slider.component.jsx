import { useAnimation, useMotionValue } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

import {
    SliderContainer
} from './slider.styles';

const Slider = ({ children, width }) => {
    const x = useMotionValue(0)
    const containerRef = useRef()
    const [dragConstraints, setDragConstraints] = useState(0)
    const dragControl = useAnimation()


    useEffect(() => {
        if (containerRef.current) {
            const sliderWidth = containerRef.current.getBoundingClientRect().width

            setDragConstraints(width - sliderWidth)
        }
    }, [width])


    return (
        <div style={{ position: 'relative' }}>
            <div style={{ overflow: 'hidden' }} ref={containerRef}>
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
        </div>
    )
}


export default Slider;