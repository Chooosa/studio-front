import React, { useState } from 'react';
import InView from 'react-intersection-observer';

import {Container} from './section.styles';
import SectionHeader from '../SectionHeader/section-header.component';



const Section = ({title, index, description, descriptionWidth, children, threshold, headerContainerStyles, headerDescriptionStyles}) => {
    const [animate, setAnimate] = useState(false)


    const handleViewportChange = (e, entry) => {

        console.log(e, entry)

        if (e&&entry&&entry.intersectionRatio>= 0.5) {
            console.log(entry.intersectionRatio)
            if (!animate) {
                setAnimate(true)
            }
        } else if (!e||entry.intersectionRatio<0.5) {
            setAnimate(false)
        }
    }



    return (
        <InView
        as='div'
        onChange={handleViewportChange}
        threshold={threshold? threshold: 0.5}
        >
            <Container
            >
                <SectionHeader
                title={title}
                description={description}
                index={index}
                show={animate}
                width={descriptionWidth}
                headerContainerStyles={headerContainerStyles}
                headerDescriptionStyles={headerDescriptionStyles}
                />
                {children}
            </Container>
        </InView>
    )
}


export default Section;

