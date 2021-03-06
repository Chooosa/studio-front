import React, { useState } from 'react';
import InView from 'react-intersection-observer';
import ServicesItemWrapper from '../ServicesItemWrapper/services-item-wrapper.component';
import { useTranslation } from '../../hooks/translation';

import {
    TabContainer,
    TabHeader,
    CardsWrapper,
    CardsContainer
} from './service-tab.styles';
import { useDispatch, useSelector } from 'react-redux';
import { colorSelectors } from '../../redux/color/color.selectors';
import AnimatedCard from '../Common/AnimatedCard/animated-card.component';
import AnimatedNumbersNew from '../AnimatedNumberNew/animated_number_new.component';
import { useWindowDimensions } from '../../hooks/dimensions';
import AnimatedHeaderMobile from '../AnimatedHeaderMobile/animated_header_mobile.component';
import { setScroll } from '../../redux/scroll/scroll.actions';


const ServiceTab = ({ service, currentTab, works }) => {
    const [animate, setAnimate] = useState(false)
    const { language } = useTranslation();
    const color = useSelector(colorSelectors.color)
    const { t } = useTranslation();
    const { width } = useWindowDimensions()
    const dispatch = useDispatch()



    const handleViewportChange = (e, entry) => {
        if (e && entry && (entry.intersectionRatio >= 0.5)) {
            if (!animate) {
                setAnimate(true)
            }
        } else if (!e || (entry.intersectionRatio < 0.5)) {
            setAnimate(false)
        }
    }

    const handleCardClick = (card) => {
        localStorage.setItem('requestType', card)
        dispatch(setScroll('request'))

    }


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
                            {
                                width < 600 ?
                                    <AnimatedHeaderMobile currentTab={currentTab} />
                                    :
                                    <AnimatedNumbersNew currentTab={currentTab} />
                            }
                        </TabHeader> :
                        <CardsWrapper>
                            <CardsContainer>
                                <AnimatedCard
                                    t={t}
                                    description={language === 'ru' ? service.Description1 : service.DescriptionEng1}
                                    title={language === 'ru' ? service.Title1 : service.TitleEng1}
                                    color={color}
                                    showButton={false}
                                    onCardClick={() => handleCardClick(service.Title1)}
                                />
                                <AnimatedCard
                                    t={t}
                                    description={language === 'ru' ? service.Description2 : service.DescriptionEng2}
                                    title={language === 'ru' ? service.Title2 : service.TitleEng2}
                                    color={color}
                                    showButton={false}
                                    onCardClick={() => handleCardClick(service.Title2)}
                                />
                            </CardsContainer>
                            <CardsContainer>
                                <AnimatedCard
                                    t={t}
                                    description={language === 'ru' ? service.Description3 : service.DescriptionEng3}
                                    title={language === 'ru' ? service.Title3 : service.TitleEng3}
                                    color={color}
                                    showButton={false}
                                    onCardClick={() => handleCardClick(service.Title3)}
                                />
                                <AnimatedCard
                                    t={t}
                                    description={language === 'ru' ? service.Description4 : service.DescriptionEng4}
                                    title={language === 'ru' ? service.Title4 : service.TitleEng4}
                                    color={color}
                                    showButton={false}
                                    onCardClick={() => handleCardClick(service.Title4)}
                                />
                            </CardsContainer>
                        </CardsWrapper>
                }
            </InView>

            {
                currentTab !== 2 &&
                <ServicesItemWrapper
                    works={works}
                    currentTab={currentTab}
                />
            }
        </TabContainer>
    )
}


export default ServiceTab;