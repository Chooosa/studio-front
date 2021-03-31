import { motion } from 'framer-motion';
import styled from 'styled-components';


export const AnimatedGroup = styled.g`
>path {
    fill: ${props => props.animationEnd? props.color : `url("#gradient${props.index}")`};
}
`

export const FirstStop = styled(motion.stop)`

`

export const SecondStop = styled(motion.stop)`
`

export const ThirdStop = styled(motion.stop)`
`