import React, { useEffect, useState } from 'react';
import One from './Numbers/01';
import Two from './Numbers/02';
import Three from './Numbers/03';
import Four from './Numbers/04';
import Five from './Numbers/05';
import Six from './Numbers/06';
import Seven from './Numbers/07';

import {
    AnimatedNumber,
    FirstStop,
    SecondStop,
    ThirdStop
} from './animated-numbers.styles';
import { useAnimation } from 'framer-motion';

import { useSelector } from 'react-redux';
import { colorSelectors } from '../../../redux/color/color.selectors';


const numbers = [<One/>, <Two/>,<Three/>,<Four/>,<Five/>,<Six/>,<Seven/>]




const AnimatedNumbers = ({index, duration, show}) => {
    const currentNumber = numbers[index-1]
    const firstControls = useAnimation()
    const secondControls = useAnimation()
    const thirdControls = useAnimation()
    const [reverse, setReverse] = useState(false)
    
    const color = useSelector(colorSelectors.color)




    

    useEffect(() => {

        const animationStep = {
            stopColor: color,
            transition: {
                duration: duration? duration: 0.2,
                ease: 'linear'
            }
        }
    
        const reverseAnimationStep = {
            stopColor: '#414141',
            transition: {
                duration: duration? duration: 0.3,
                ease: 'linear'
            }
        }
        const animation = async() => {
            firstControls.stop()
            secondControls.stop()
            thirdControls.stop()
            await firstControls.start(animationStep)
            await secondControls.start(animationStep)
            return await thirdControls.start(animationStep)
            
        }
    
        const reverseAnimation = async() => {
            firstControls.stop()
            secondControls.stop()
            thirdControls.stop()
            await firstControls.start(reverseAnimationStep)
            await secondControls.start(reverseAnimationStep)
            return await thirdControls.start(reverseAnimationStep)
            
        }

        if (show) {
            animation()
            .then(() => {
                setReverse(true)
            })
        } else {
            reverseAnimation()
            .then(() => {
                setReverse(false)
            })
        }
    }, [show, duration, color, firstControls, secondControls, thirdControls])

    return (
        <AnimatedNumber
        index={index}
        >
                    <svg width="95" height="54" viewBox="0 0 95 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <linearGradient id={`grad${index}`} x1={reverse? '100%': '0%'} y1={reverse? '100%': '0%'} x2= {reverse? '100%': '0%'} y2= {reverse? '0%': '100%'} >
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
                        {currentNumber}
                    </svg>
        </AnimatedNumber>
    )
}


export default AnimatedNumbers;