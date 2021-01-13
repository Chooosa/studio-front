import styled from 'styled-components';
import {motion} from 'framer-motion';

export const AnimatedNumber = styled.div`
>svg {
    fill: url(${props => `#grad${props.index}`});
    >path {
        fill: url(${props => `#grad${props.index}`});
    }
}
`

export const FirstStop = styled(motion.stop)`

`

export const SecondStop = styled(motion.stop)`
`

export const ThirdStop = styled(motion.stop)`
`


