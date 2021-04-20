import { useAnimation } from 'framer-motion';
import React, { useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { colorSelectors } from '../../../../redux/color/color.selectors';

import {
    AnimatedGroup,
    FirstStop,
    SecondStop,
    ThirdStop
} from './animated_path.styles'

const AnimatedPath = ({ path, index, duration, start, callback }) => {
    const firstControls = useAnimation()
    const secondControls = useAnimation()
    const thirdControls = useAnimation()
    const color = useSelector(colorSelectors.color)
    const [animationEnd, setAnimationEnd] = useState(false)

    const onAnimationStep = (color, duration) => {
        const animationStep = {
            stopColor: color,
            transition: {
                duration: duration,
                ease: 'linear'
            }
        }
        return animationStep
    }

    const memoAnimationStep = useMemo(() => onAnimationStep(color, duration), [color, duration])

    useEffect(() => {
        let cleanupFunction = false;
        if (start) {
            const animation = async () => {
                firstControls.stop()
                secondControls.stop()
                thirdControls.stop()
                await firstControls.start(memoAnimationStep)
                await secondControls.start(memoAnimationStep)
                return await thirdControls.start(memoAnimationStep)

            }
            animation()
                .then(() => {
                    if (!cleanupFunction) {
                        setAnimationEnd(true)
                        if (callback) {
                            callback()
                        }
                    }
                })
        }


        return () => {
            firstControls.stop()
            secondControls.stop()
            thirdControls.stop()
            cleanupFunction = true
        }
    }, [firstControls, secondControls, thirdControls, color, start, memoAnimationStep, callback])


    return (
        <AnimatedGroup index={index} animationEnd={animationEnd} color={color}>
            <linearGradient id={`gradient${index}`} x1={'0%'} y1={'50%'} x2={'100%'} y2={'50%'} >
                <FirstStop
                    initial={{
                        stopColor: '#414141'
                    }}
                    animate={firstControls}
                    offset="0%"
                >
                </FirstStop>
                <SecondStop
                    offset="50%"
                    initial={{
                        stopColor: '#414141'
                    }}
                    animate={secondControls}
                ></SecondStop>
                <ThirdStop
                    offset="100%"
                    initial={{
                        stopColor: '#414141'
                    }}
                    animate={thirdControls}
                ></ThirdStop>
            </linearGradient>
            {path}
        </AnimatedGroup>
    )
}


export default AnimatedPath;