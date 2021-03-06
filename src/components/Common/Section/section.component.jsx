import React, { useState } from 'react';
import InView from 'react-intersection-observer';

import { Container } from './section.styles';
import SectionHeader from '../SectionHeader/section-header.component';



const Section = ({
    title,
    index,
    description,
    descriptionWidth,
    children,
    threshold,
    headerContainerStyles,
    headerDescriptionStyles,
    reff,
    padding,
    nonAnimation,
    nonNumber,
    custom
}) => {
    const [animate, setAnimate] = useState(false)


    const handleViewportChange = (e, entry) => {



        if (e && entry && (threshold ? entry.intersectionRatio >= threshold : entry.intersectionRatio >= 0.5)) {

            if (!animate) {
                setAnimate(true)
            }
        } else if (!e || (threshold ? entry.intersectionRatio < threshold : entry.intersectionRatio < 0.5)) {
            setAnimate(false)
        }
    }


    return (
        <InView
            as='div'
            onChange={handleViewportChange}
            threshold={threshold ? threshold : 0.5}
        >
            <Container
                ref={reff}
            >
                <SectionHeader
                    title={title}
                    custom={custom}
                    description={description}
                    index={index}
                    show={animate}
                    descriptionWidth={descriptionWidth}
                    headerContainerStyles={headerContainerStyles}
                    headerDescriptionStyles={headerDescriptionStyles}
                    padding={padding}
                    nonAnimation={nonAnimation}
                    nonNumber={nonNumber}
                />
                {children}
            </Container>
        </InView>
    )
}


export default Section;

