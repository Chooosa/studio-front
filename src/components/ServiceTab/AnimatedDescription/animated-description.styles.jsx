import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled.div`
   max-width: 100%;
   text-align: center;
`

export const SVG = styled(motion.svg)`
   width: calc(100% - 40px);
   >#path01 {
      fill: url("#gradient01");
   }
`

export const FirstStop = styled(motion.stop)`

`

export const SecondStop = styled(motion.stop)`
`

export const ThirdStop = styled(motion.stop)`
`