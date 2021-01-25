import React, { useState } from 'react';
import InView from 'react-intersection-observer';
import ReactMarkdown from 'react-markdown';
import { CMS_URL } from '../../config';
import AnimatedNumbers from '../Common/AnimatedNumbers/animated-numbers.component';
import ServicesItemWrapper from '../ServicesItemWrapper/services-item-wrapper.component';
import { useTranslation } from '../../hooks/translation';

import {
    TabContainer,
    Description,
    NumberContainer,
    TabHeader
} from './service-tab.styles';

const ServiceTab = ({service, content}) => {
    const [animate, setAnimate] = useState(false)
    const {language} = useTranslation();


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
                            {language === 'ru' ? service.Description : service.DescriptionEng}
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
                {
                    content?content.map((item, index) => {
                        return (
                            <ServicesItemWrapper
                            key={index}
                            title={language === 'ru' ? item.Title : item.TitleEng}
                            image={CMS_URL + item.Image.url}
                            />
                        )
                    })
                    :null
                }
        </TabContainer>
    )
}


export default ServiceTab;