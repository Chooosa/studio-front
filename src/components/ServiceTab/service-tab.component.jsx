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
    TabHeader,
    CardsWrapper,
    CardsContainer,
    DescriptionWrapper,
    DescriptionContainer,
    DescriptionText,
    Separator,
    SeparatorMin
} from './service-tab.styles';
import { useSelector } from 'react-redux';
import { colorSelectors } from '../../redux/color/color.selectors';
import { Fragment } from 'react';
import AnimatedCard from '../Common/AnimatedCard/animated-card.component';

const ServiceTab = ({ service, content, currentTab }) => {
    const [animate, setAnimate] = useState(false)
    const { language } = useTranslation();
    const color = useSelector(colorSelectors.color)
    const { t } = useTranslation();


    const handleViewportChange = (e, entry) => {
        if (e && entry && (entry.intersectionRatio >= 0.5)) {
            if (!animate) {
                setAnimate(true)
            }
        } else if (!e || (entry.intersectionRatio < 0.5)) {
            setAnimate(false)
        }
    }

    // const Text = ({ textRu, textEng, middle = false, index }) => {
    //     return (
    //         <Fragment>
    //             <DescriptionText
    //                 color={color}
    //                 middle={middle}
    //                 index={index}
    //                 style={{
    //                     transform: `translateX(${index === 1 ? '-180px' : '180px'})`
    //                 }}
    //             >
    //                 <ReactMarkdown>
    //                     {language === 'ru' ? textRu : textEng}
    //                 </ReactMarkdown>
    //             </DescriptionText>
    //             {/* <SeparatorMin color={color} /> */}
    //         </Fragment>
    //     )
    // }

    return (
        <TabContainer>
            <InView
                as='div'
                onChange={handleViewportChange}
                threshold={0.5}
            >
                {
                    currentTab !== 2 ?
                        <TabHeader>
                            <Description>
                                <ReactMarkdown>
                                    {language === 'ru' ? service.Description : service.DescriptionEng}
                                </ReactMarkdown>
                            </Description>
                            <NumberContainer>
                                {/* <AnimatedNumbers
                                    duration={0.3}
                                    index={1}
                                    show={animate}
                                /> */}
                            </NumberContainer>
                        </TabHeader> :
                        <CardsWrapper>
                            <CardsContainer>
                                <AnimatedCard
                                    t={t}
                                    description={service.Description1}
                                    title={service.Title1}
                                    color={color}
                                    showButton={false}
                                />
                                <AnimatedCard
                                    t={t}
                                    description={service.Description2}
                                    title={service.Title2}
                                    color={color}
                                    showButton={false}
                                />
                            </CardsContainer>
                            <CardsContainer>
                                <AnimatedCard
                                    t={t}
                                    description={service.Description3}
                                    title={service.Title3}
                                    color={color}
                                    showButton={false}
                                />
                                <AnimatedCard
                                    t={t}
                                    description={service.Description4}
                                    title={service.Title4}
                                    color={color}
                                    showButton={false}
                                />
                            </CardsContainer>
                        </CardsWrapper>
                    // <DescriptionWrapper>
                    //     <DescriptionContainer>
                    //         <Text
                    //             textRu={service.Description1}
                    //             textEng={service.Description1Eng}
                    //             index={1}
                    //         />
                    //         <Separator color={color} />
                    //         <Text
                    //             textRu={service.Description2}
                    //             textEng={service.Description2Eng}
                    //             index={2}
                    //         />
                    //         <Separator color={color} />
                    //         <Text
                    //             textRu={service.Description3}
                    //             textEng={service.Description3Eng}
                    //             index={1}
                    //         />
                    //     </DescriptionContainer>
                    //     <DescriptionContainer justify color={color}>
                    //         <Text
                    //             textRu={service.Description4}
                    //             textEng={service.Description4Eng}
                    //             index={2}
                    //         />
                    //         <Separator color={color} />
                    //         <Text
                    //             textRu={service.Description5}
                    //             textEng={service.Description5Eng}
                    //             index={1}
                    //         />
                    //     </DescriptionContainer>
                    // </DescriptionWrapper>
                }
            </InView>
            {
                content ? content.map((item, index) => {
                    return (
                        <ServicesItemWrapper
                            key={index}
                            title={language === 'ru' ? item.Title : item.TitleEng}
                            image={CMS_URL + item.Image.url}
                        />
                    )
                })
                    : null
            }
        </TabContainer>
    )
}


export default ServiceTab;