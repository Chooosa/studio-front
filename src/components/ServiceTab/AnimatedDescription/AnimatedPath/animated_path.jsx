import { useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { colorSelectors } from '../../../../redux/color/color.selectors';

import {
    AnimatedGroup,
    FirstStop,
    SecondStop,
    ThirdStop
} from './animated_path.styles'

const AnimatedPath = ({path, delay, index, duration, start, callback}) => {
    const firstControls = useAnimation()
    const secondControls = useAnimation()
    const thirdControls = useAnimation()
    const legDuration = 0.2;
    const color = useSelector(colorSelectors.color)
    const [animationEnd, setAnimationEnd] = useState(false)



    const animationStep = {
        stopColor: color,
        transition: {
            duration: duration,
            ease: 'linear'
        }
    }

    useEffect(() => {
        if (start) {
            const animation = async() => {
                firstControls.stop()
                secondControls.stop()
                thirdControls.stop()
                await firstControls.start(animationStep)
                await secondControls.start(animationStep)
                return await thirdControls.start(animationStep)
                
            }
             animation()
             .then(() => {
                 setAnimationEnd(true)
                 if (callback) {
                     callback()
                 }
             })
        }
       
 
       return () => {
           firstControls.stop()
           secondControls.stop()
           thirdControls.stop()
       }
   }, [firstControls, secondControls, thirdControls, color, start, animationStep])


    return (
        <AnimatedGroup index={index} animationEnd={animationEnd} color={color}>
            <linearGradient id={`gradient${index}`} x1={'0%'} y1={'50%'} x2= {'100%'} y2= {'50%'} >
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