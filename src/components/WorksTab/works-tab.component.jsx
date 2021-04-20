import React, { useState } from 'react';
import InView from 'react-intersection-observer';
import WorkItem from '../WorkItem/work-item.component';

import {
    TabContainer,
    Description,
    NumberContainer,
    TabHeader
} from './works-tab.styles';

const WorksTab = ({ description, works }) => {
    const [animate, setAnimate] = useState(false)


    const handleViewportChange = (e, entry) => {
        if (e && entry && (entry.intersectionRatio >= 0.5)) {
            if (!animate) {
                setAnimate(true)
            }
        } else if (!e || (entry.intersectionRatio < 0.5)) {
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
                        {description}
                    </Description>
                    <NumberContainer>
                    </NumberContainer>
                </TabHeader>
            </InView>
            {
                works.map((work, index) => {
                    return (
                        <WorkItem
                            key={index}
                            work={work}
                        />
                    )
                })
            }
        </TabContainer>
    )
}


export default WorksTab;