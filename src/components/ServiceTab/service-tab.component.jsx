import React, { useState } from 'react';
import InView from 'react-intersection-observer';
import ReactMarkdown from 'react-markdown';
import AnimatedNumbers from '../Common/AnimatedNumbers/animated-numbers.component';

import {
    TabContainer,
    Description,
    NumberContainer,
    TabHeader
} from './service-tab.styles';

const ServiceTab = ({service}) => {
    const [animate, setAnimate] = useState(false)


    const handleViewportChange = (e, entry) => {
        if (e&&entry&&(entry.intersectionRatio>= 0.5)) {
            if (!animate) {
                setAnimate(true)
            }
        } else if (!e||(entry.intersectionRatio< 0.5)) {
            setAnimate(false)
        }
    }


    return (
        <TabContainer>
                <InView
                    as='div'
                    onChange={handleViewportChange}
                    threshold={0.5}
                >
                <TabHeader>
                    <Description>
                        <ReactMarkdown>
                            {service.Description}
                        </ReactMarkdown>
                    </Description>
                    <NumberContainer>
                        <AnimatedNumbers
                        duration={0.3}
                        index={1}                
                        show={animate}
                        />
                    </NumberContainer>
                </TabHeader>
                </InView>
        </TabContainer>
    )
}


export default ServiceTab;