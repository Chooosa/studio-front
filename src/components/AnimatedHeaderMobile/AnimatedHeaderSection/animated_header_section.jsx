import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import AnimatedNumbers from '../../Common/AnimatedNumbers/animated-numbers.component';

import {
    AnimatedHeaderSectionContainer,
    SectionHeader,
    SectionText
} from './animated_header_section.styles';


const AnimatedHeaderSection = ({ title, index, text }) => {
    const [animate, setAnimate] = useState(false)


    const handleViewportChange = (e, entry) => {
        if (e && entry && (entry.intersectionRatio >= 1)) {
            if (!animate) {
                setAnimate(true)
            }
        }
    }

    return (
        <InView
            threshold={1}
            onChange={handleViewportChange}
            style={{ width: '100%', maxWidth: '500px' }}
        >
            <AnimatedHeaderSectionContainer>
                <AnimatedNumbers
                    index={index}
                    duration={0.3}
                    show={animate}
                />
                <SectionHeader>
                    {title}
                </SectionHeader>
                <SectionText>
                    {text}
                </SectionText>
            </AnimatedHeaderSectionContainer>
        </InView>
    )
}



export default AnimatedHeaderSection;
